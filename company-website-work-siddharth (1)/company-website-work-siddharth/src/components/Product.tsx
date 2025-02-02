import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Product as ProductProp, ProductProps } from "@/lib/types";
import qrcode from "@/assets/qrcode.png";

export function Product({ products, }: ProductProps) {
    const [selectedProduct, setSelectedProduct] = useState<ProductProp | null>(null);
    return (
        <>
            {/* Main Content Container */}
            <div className="relative w-full max-w-screen">
                {/* Product Cards */}
                <div
                    className={`transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${selectedProduct ? "w-full lg:w-1/2" : "w-full lg:w-2/3 mx-auto"
                        }`}
                >
                    <div className="space-y-6 w-11/12 p-2 h-[calc(100vh-200px)] overflow-y-auto">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                className={`flex flex-col rounded-2xl sm:flex-row overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer group ${selectedProduct?.id === product.id
                                    ? "ring-2 ring-blue-500 bg-gray-50"
                                    : "hover:bg-gray-50"
                                    }`}
                                onClick={() => setSelectedProduct(product)}
                            >
                                <div className="flex flex-col md:flex-row p-6">
                                    {/* Product Content */}
                                    <CardHeader className="p-0 mb-4 md:w-1/2">
                                        <CardTitle className="text-center group-hover:text-blue-600 transition-colors duration-300 text-3xl">
                                            {product.title}
                                        </CardTitle>
                                        <CardDescription className="text-center italic group-hover:text-blue-400 transition-colors duration-300">
                                            {product.subtitle}
                                        </CardDescription>
                                        <p className="text-base group-hover:text-gray-900 py-10 my-4">
                                            {product.description}
                                        </p>
                                    </CardHeader>
                                    {/* Product Image and Stats */}
                                    <CardContent className="p-0 md:w-1/2">
                                        <div className="flex flex-row justify-between items-center gap-4">
                                            <div className="relative flex flex-col items-center justify-center w-full md:w-[250px] h-[250px] md:h-auto">
                                                <img src={product.image} alt={product.title} />
                                            </div>
                                            <div className="grid grid-cols-3 sm:grid-cols-1 gap-3 px-5 sm:py-4">
                                                {product.stats.map((stat, index) => (
                                                    <div key={index} className="flex flex-col items-center gap-2">
                                                        <img
                                                            src={stat.image}
                                                            height={34}
                                                            width={34}
                                                            alt=""
                                                            className="object-contain"
                                                        />
                                                        <p className="text-xs text-gray-600">{stat.subheading}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                {/* Product Details */}
                <div
                    className={`fixed lg:absolute top-0 right-0 h-full lg:w-1/2 transition-transform duration-500 ease-in-out ${selectedProduct ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                        } z-10 lg:z-0 bg-white lg:bg-transparent overflow-y-auto pb-8`}
                >
                    {selectedProduct && (
                        <div className="h-full p-4">
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                            <Card className="overflow-y-auto rounded-2xl max-h-[calc(100vh-2rem)]">
                                <CardHeader className="flex flex-col justify-between items-center">
                                    <CardTitle className="text-3xl font-bold">
                                        {selectedProduct.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-8">
                                    <div className="lg:hidden relative w-full md:w-[200px] h-[200px] md:h-auto">
                                        <img src={selectedProduct.image} alt={selectedProduct.title} />
                                    </div>
                                    {/* Header Points */}
                                    <div className="flex flex-col md:flex-row gap-4 items-center">
                                        {/* First column */}
                                        <div className="w-full md:w-1/3">
                                            <div className="grid grid-cols-1 gap-4">
                                                {selectedProduct.details.headerPoints.slice(0, Math.ceil(selectedProduct.details.headerPoints.length / 2)).map((point, index) => (
                                                    <div key={index} className="flex flex-col p-4 bg-gray-50 rounded-[20px] border-2 hover:shadow-lg">
                                                        <h3 className="font-semibold mb-2">{point.heading}</h3>
                                                        <p className="text-sm text-gray-600">{point.subheading}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Center image */}
                                        <div className="hidden w-full md:w-1/3 md:flex flex-col justify-center items-center">
                                            <img
                                                src={selectedProduct.image}
                                                alt="Center image"
                                                className="object-cover max-w-full max-h-full"
                                            />
                                        </div>

                                        {/* Second column */}
                                        <div className="w-full md:w-1/3">
                                            <div className="grid grid-cols-1 gap-4">
                                                {selectedProduct.details.headerPoints.slice(Math.ceil(selectedProduct.details.headerPoints.length / 2)).map((point, index) => (
                                                    <div key={index} className="flex flex-col p-4 bg-gray-50 rounded-[20px] border-2 hover:shadow-lg">
                                                        <h3 className="font-semibold mb-2">{point.heading}</h3>
                                                        <p className="text-sm text-gray-600">{point.subheading}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Key Specs */}
                                    <div>
                                        <h3 className="text-lg text-center font-semibold mb-4">Key Specifications</h3>
                                        <div className="flex flex-row justify-evenly items-center">
                                            {selectedProduct.details.keyspecs.map((spec, index) => (
                                                <div key={index} className="flex flex-col p-4 bg-gray-50 rounded-[20px] border-2 hover:shadow-lg">
                                                    <img src={spec} alt="" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Application Areas */}
                                    <div>
                                        <h3 className="text-lg text-center font-semibold mb-4">Application Areas</h3>
                                        <div className="flex flex-row gap-2 justify-evenly items-center">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {selectedProduct.details.applicationAreas.images.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={image}
                                                        width={64}
                                                        alt={`Application area ${index + 1}`}
                                                        className="object-cover rounded-lg"
                                                    />
                                                ))}
                                            </div>
                                            <p className="w-1/2">
                                                {selectedProduct.details.applicationAreas.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Dimension and Layout */}
                                    {selectedProduct.details.dimensionandlayout && (
                                        <div>
                                            <h3 className="text-lg font-semibold mb-4  text-center">Dimension and Layout</h3>
                                            <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center">
                                                <p className="md:w-1/2">
                                                    {selectedProduct.details.dimensionandlayout.description}
                                                </p>
                                                <img
                                                    src={selectedProduct.details.dimensionandlayout.image}
                                                    alt="Dimension and Layout"
                                                    width={350}
                                                    className="h-auto rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Integration Ideas */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4 text-center">Integration Ideas</h3>
                                        <img
                                            src={selectedProduct.details.integrationIdeasImage}
                                            alt="Integration diagram"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    {/* Accessories */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4  text-center">Accessories</h3>
                                        <Carousel>
                                            <CarouselContent>
                                                {selectedProduct.details.accessoryImages.map((image, index) => (
                                                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                                        <div className="flex object-fill items-center justify-center">
                                                            <img src={image} alt={`Accessory ${index + 1}`} />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                        </Carousel>
                                    </div>
                                    {/* Media Gallery */}
                                    <div>
                                        <h3 className="text-lg font-semibold mb-4  text-center">Media Gallery</h3>
                                        <Carousel>
                                            <CarouselContent>
                                                {selectedProduct.details.mediaGalleryImages.map((image, index) => (
                                                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                                        <div className="flex object-fill items-center justify-center">
                                                            <img src={image} alt={`Media ${index + 1}`} />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                        </Carousel>
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold mb-4 text-center">Get in Touch</h3>
                                        <form action="" className="flex flex-col gap-4 items-center justify-center">
                                            <div className="flex flex-col md:flex-row gap-2 items-start justify-between w-full">
                                                <input type="text" className="border bg-transparent rounded-[8px] p-2 w-full md:w-1/2" placeholder="Full Name" />
                                                <input type="text" className="border bg-transparent rounded-[8px] p-2 w-full md:w-1/2" placeholder="Product/Solution" />
                                            </div>
                                            <div className="flex flex-col md:flex-row gap-2 items-start justify-between w-full">
                                                <input type="text" className="border bg-transparent rounded-[8px] p-2 w-full md:w-1/2" placeholder="Email" />
                                                <input type="text" className="border bg-transparent rounded-[8px] p-2 w-full md:w-1/2" placeholder="Mobile Number" />
                                            </div>
                                            <div className="flex flex-col gap-2 items-start justify-center w-full">
                                                <textarea
                                                    name=""
                                                    id=""
                                                    placeholder="Message"
                                                    rows={3}
                                                    className="w-full border rounded-[8px] p-2 resize-none bg-transparent"
                                                ></textarea>
                                            </div>
                                            <input type="submit" value="Submit" className="bg-blue-500 text-white text-base px-8 py-2 rounded-[8px]" />
                                        </form>
                                    </div>
                                </CardContent>
                                <CardFooter className="bg-[#202020] flex flex-row items-center justify-center gap-4 p-4 text-white">
                                    <img
                                        src={qrcode}
                                        alt="qrcode"
                                        className="object-cover max-w-full max-h-full"
                                    />
                                    <p>
                                        Discover our extensive range of innovative products, to know more scan the QR code or visit our website.
                                    </p>
                                </CardFooter>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}