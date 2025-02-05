import { useLoaderData } from "react-router";
import About from "../About";
import Banner from "../Banner";
import Carousel from "../Carousel";
import Gallery from "../Gallery";
import RunningCampaign from "../RunningCampaign";
import Story from "../Story";

const Home = () => {
  const campaigns = useLoaderData();

  const slides = [
    {
      src: "https://i.ibb.co.com/pL2FXgc/h1.jpg",
      description: "A Small Contribution, A Big Change.",
    },
    {
      src: "https://i.ibb.co.com/p4sD59r/h4.jpg",
      description: "Your Donation, Their Life Transformation.",
    },
    {
      src: "https://i.ibb.co.com/TW84rqw/h5.webp",
      description: "Believe in the Power of Your Help.",
    },
    {
      src: "https://i.ibb.co.com/jZsKBT4/hh1.jpg",
      description: "Together, We Can Make a Difference.",
    },
  ];

  return (
    <div>
      <Banner />

      <div className="carousel-container mt-10">
        <Carousel autoslide={true}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                className="carousel-image"
                src={slide.src}
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold text-center p-4">
                {slide.description}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="p-5 lg:p-20">
        <RunningCampaign campaigns={campaigns} />
      </div>

      <About />
      <Story />
      <Gallery />
    </div>
  );
};

export default Home;
