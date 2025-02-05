import { Link } from "react-router-dom";
import story from "../assets/story.jpg";
import story2 from "../assets/story2.jpg";
import story3 from "../assets/story3jpeg.jpeg";
import Marquee from "react-fast-marquee";

const Story = () => {
  return (
    <div className="font-poppins">
      <section id="stories-of-impact" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-center font-bold text-3xl text-sky-600">Stories of Impact</h2>
            <p className="w-full lg:w-3/4 mx-auto text-center my-5 text-slate-500">The "Stories of Impact" section showcases the incredible transformations made possible through your donations. Here, we share real stories of individuals and communities who have experienced the life-changing effects of your support. From building schools in remote villages to providing clean water to those in need, each story reflects the power of collective kindness. These stories not only highlight the challenges faced by the underprivileged but also celebrate the resilience, hope, and positive change that your generosity brings. Explore these heartfelt accounts and be inspired by the tangible difference we can make together.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={story} alt="Story Image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Water for All</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                  The Light of Hope: The First Clean Water Project in a Village...
                  </p>
                </Marquee>
                <Link to="/rahim" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={story2} alt="Story Image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Home Again</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                  A New Beginning: Shelters for Homeless Families...
                  </p>
                </Marquee>
                <Link to="/amina" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img className="w-full h-48 object-cover" src={story3} alt="Story Image" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Bright Minds, Bright Future</h3>
                <Marquee>
                  <p className="text-gray-600 mt-2">
                  Lighting Up Lives: Solar Panels for Remote Schools...
                  </p>
                </Marquee>
                <Link to="/children" className="text-blue-600 hover:underline mt-4 block">Read More</Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/allcamping"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Story;
