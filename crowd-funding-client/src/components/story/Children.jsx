import React from "react";
import NavBar from "../NavBar";

const Children = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-8 px-6 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Solar Panels for Remote Schools
        </h3>
        <p className="text-gray-600 leading-relaxed">
        In the remote hills of a far-off region, there were schools that lacked electricity, making it impossible for students to study after sunset or use modern educational tools. The teachers struggled to teach under dim candlelight, and students had to study with limited resources. The lack of power also meant no access to digital learning tools, which severely limited the educational opportunities available to these children. The "Bright Minds, Bright Future" campaign aimed to change this by raising funds for solar panels to provide electricity to these schools.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        Thanks to the generosity of donors, the schools were equipped with solar panels that provided a consistent power supply, allowing for evening classes and the use of digital devices for education. The children’s faces lit up as they were able to study at night, and the teachers had access to the resources they had long dreamed of. The solar panels not only brought light to the classrooms but also opened doors to new learning opportunities.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        Students could now learn from videos, access online materials, and engage with the global educational community. This project has completely transformed the education system in the region, and the children are now able to pursue their studies with a sense of hope and possibility that they never had before.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        They are now able to dream of careers in fields they once thought were out of reach, and this change in their lives is a direct result of the power of giving and community action.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Children;
