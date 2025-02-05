import React, { useEffect } from "react";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import Aos from "aos";
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    <div className="flex flex-col py-10 px-5 gap-8 bg-gray-300 ">
      <h3 className="text-center font-bold text-3xl text-sky-600">
        About Us
      </h3>
      <p className="w-full lg:w-3/4 mx-auto text-center my-5 text-slate-500">
      Our platform connects individuals who want to make a difference. We provide a space where users can create new fundraising campaigns and donate to existing ones. By bringing together people who wish to help with those in need, we aim to create a community of support. Whether you're looking to donate or initiate a campaign for a cause close to your heart, our platform makes it easy to contribute to meaningful change. Join us today and be part of a movement that helps make a real difference in the lives of others.
      </p>

      <div className="bg-gray-600 p-6 rounded-lg shadow-md w-3/4 mx-auto text-center">
        <h4 className="text-2xl font-semibold mb-3 text-gray-800">Our Mission</h4>
        <p className="text-gray-400">
        Our mission is to empower individuals to support causes that matter. We believe that even small contributions can create significant change, and we are committed to making the process of giving easy, transparent, and impactful. By connecting donors with campaigns in need, we aim to provide a platform where everyone has the opportunity to make a difference. Through collective efforts, we strive to build a compassionate community that helps bring hope and support to those who need it most.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-3/4 mx-auto">
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-left">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Create a Campaign</h4>
          <p className="text-gray-600">It all begins with you. Start a campaign for a cause that matters to you. Whether it's supporting individuals in need or raising awareness for a specific cause, creating a campaign is simple and impactful.</p>
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-down">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Donate to Causes</h4>
          <p className="text-gray-600">You don't have to create a campaign to make a difference. Browse through various active campaigns and contribute what you can. Every donation counts, and together we can make lasting change.</p>
        </div>
        <div className="bg-gray-400 p-6 rounded-lg shadow-md text-center" data-aos="fade-right">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Spread the Word</h4>
          <p className="text-gray-600">Help us reach more people. Share campaigns with your network and inspire others to contribute. By spreading awareness, you play a key role in amplifying the support and bringing hope to those in need.</p>
        </div>
      </div>

      <div className="w-4/4 mx-auto text-center">
        <h4 className="text-2xl font-semibold text-gray-800 mb-5">Meet Our Team</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">John Doe</h5>
            <p className="text-gray-600 text-sm">Founder</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile2}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">Jane Smith</h5>
            <p className="text-gray-600 text-sm">Coordinator</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-xl w-40 text-center">
            <img
              src={profile3}
              alt="Team Member"
              className="rounded-full w-24 h-24 mx-auto mb-3"
            />
            <h5 className="text-lg font-medium text-gray-800">Emily Johnson</h5>
            <p className="text-gray-600 text-sm">Volunteer Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
