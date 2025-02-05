import React from "react";
import NavBar from "../NavBar";

const MoreStories = () => (
  <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-4">More Stories of Impact</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-3">
      <li>
        <strong>The Light of Hope:</strong> Transforming a Village with Its First Ever Clean Water Well
      </li>
      <li>
        <strong>Lighting Up Lives:</strong> Bringing Solar Power to Remote Schools and Shaping a Brighter Future for Children.
      </li>
      <li>
        <strong>A New Beginning:</strong> Rebuilding Lives and Providing Shelter for Homeless Families After a Devastating Flood.
      </li>
    </ul>
  </div>
);

const Rahim = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-8 px-6 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">The First Clean Water Project in a Village</h3>
        <p className="text-gray-600 leading-relaxed">
        In a small, isolated village, access to clean water was a distant dream. The villagers had to travel long distances to collect water from rivers and ponds, which were often contaminated. This led to widespread waterborne diseases, especially among children, who missed school due to frequent illnesses.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        For years, the villagers struggled with this problem, but hope came when the “Water for All” campaign was launched. With the support of kind-hearted donors from around the world, enough funds were raised to install a clean water well in the village. The project was a huge success, and now the villagers have a reliable and clean water source right at the heart of their community. The women no longer have to carry heavy water containers from distant sources, and the children, once plagued by waterborne illnesses, are healthier and able to attend school regularly.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        With clean water now available to the village, their health has improved, their lives have become easier, and their prospects for the future have become brighter. The campaign not only addressed an immediate need but also gave the villagers the chance to dream of a healthier, more prosperous future.
        </p>
      </div>
      <MoreStories />
    </div>
    </div>
  );
};

export default Rahim;
