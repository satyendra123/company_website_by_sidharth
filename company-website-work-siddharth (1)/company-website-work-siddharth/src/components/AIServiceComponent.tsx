import aiicon1 from "@/assets/IT Solutions/AIComponentIcons/aiicon1.png";
import aiicon2 from "@/assets/IT Solutions/AIComponentIcons/aiicon2.png";
import aiicon3 from "@/assets/IT Solutions/AIComponentIcons/aiicon3.png";
import aiicon4 from "@/assets/IT Solutions/AIComponentIcons/aiicon4.png";
import aiicon5 from "@/assets/IT Solutions/AIComponentIcons/aiicon5.png";
import aiicon6 from "@/assets/IT Solutions/AIComponentIcons/aiicon6.png";
import aiicon7 from "@/assets/IT Solutions/AIComponentIcons/aiicon7.png";
import aiicon8 from "@/assets/IT Solutions/AIComponentIcons/aiicon8.png";
import aiicon9 from "@/assets/IT Solutions/AIComponentIcons/aiicon9.png";
import aiicon10 from "@/assets/IT Solutions/AIComponentIcons/aiicon10.png";
import aiicon11 from "@/assets/IT Solutions/AIComponentIcons/aiicon11.png";
import aiicon12 from "@/assets/IT Solutions/AIComponentIcons/aiicon12.png";
import AIBrain from "@/assets/IT Solutions/AI Vision/AIBrain.png"
export const AIServiceComponent = () => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center">
            <div className="font-semibold text-4xl text-center">
                AI Vision: Revolutionizing Security, Automation, and Navigation
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-[#058AFB] w-full">
                <div className=" flex flex-col items-center justify-center pt-10">
                    <h1 className="text-white text-5xl font-bold text-start">
                        AI Vision Technology
                    </h1>
                    <img src={AIBrain} alt="" className="opacity-40 w-10/12" />
                </div>

                <div className="px-8 py-4 grid grid-cols-3 gap-2 grid-rows-4 items-center justify-center bg-white my-2 md:mr-5 font-medium">
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit" >
                        <img src={aiicon1} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Automatic Number Plate Detection</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon2} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Facial Recognition</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon3} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Footfall Count</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon4} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Speech Detection</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon5} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Security Management</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon6} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Industrial Automation</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon7} alt="" className="w-12 md:w-32" />
                        <p className="text-center">User Guidance</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon8} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Image Comparison</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon9} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Home Automation</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon10} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Event Count System</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon11} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Visitor Management System</p>
                    </div>
                    <div className="flex flex-col items-center justify-center hover:shadow-2xl transform transition-all duration-300 hover:scale-105 h-fit">
                        <img src={aiicon12} alt="" className="w-12 md:w-32" />
                        <p className="text-center">Attendance Management System</p>
                    </div>
                </div>

            </div>
        </div>
    )
}