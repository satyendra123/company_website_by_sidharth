
import heroverticalslider1 from "@/assets/heroverticalslider1.png";
import heroverticalslider2 from "@/assets/heroverticalslider2.png";
import heroverticalslider3 from "@/assets/heroverticalslider3.png";
import heroverticalslider4 from "@/assets/heroverticalslider4.png";

const Image = ({ index, image }) => {
  return (
    <li className="sticky top-0 h-screen w-screen flex justify-center items-center z-10">
      <div className="absolute w-full h-full overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={`Slide ${index + 1}`}
          className="w-full h-screen object-fill rounded-none"
        />
      </div>
    </li>
  );
};

const VerticalCarousel = () => {
  const cards = [
    heroverticalslider1,
    heroverticalslider2,
    heroverticalslider3,
    heroverticalslider4,
  ];

  return (
    <div className="max-w-full mx-auto">
      <ul 
        className="list-none p-0 grid grid-cols-1 gap-0" 
        style={{
          gridTemplateRows: `repeat(${cards.length}, 100vh)`
        }}
      >
        {cards.map((image, index) => (
          <Image
            key={index}
            index={index}
            image={image}
          />
        ))}
      </ul>
    </div>
  );
};

export default VerticalCarousel;