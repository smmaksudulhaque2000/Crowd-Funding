import { useEffect } from "react";
import gallery from "../assets/gallery.webp";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.png";
import gallery6 from "../assets/gallery6.jpg";
import gallery7 from "../assets/gallery7.webp";
import Aos from "aos";
import 'aos/dist/aos.css'

const Gallery = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return (
        <div className="py-20">
            <div>
                <h3 className="text-center font-bold text-3xl text-sky-600 w-3/4 mx-auto">Pictures That Speak Louder Than Words</h3>
                <p className="w-full lg:w-3/4 mx-auto text-center my-10 text-slate-500 px-5">
                In this section, we share powerful images that capture the true impact of your donations. Each photo tells a story of struggle, hope, and transformation. These images reflect the lives of those who have been touched by your generosity and the positive changes made possible through your contributions. Whether it’s the face of a child receiving the help they desperately need or a community coming together after a disaster, these photos remind us of the difference we can make when we choose to help. Let these images inspire you to take action, knowing that your support can change lives and shape a brighter future for those in need
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5 lg:px-20">
                <img className="w-full h-64 shadow-xl rounded" src={gallery} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery1} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery2} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery3} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery4} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery5} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery6} alt="Image" data-aos="zoom-in-up"/>
                <img className="w-full h-64 shadow-xl rounded" src={gallery7} alt="Image" data-aos="zoom-in-up"/>
            </div>
        </div>
    );
};

export default Gallery;
