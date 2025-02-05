import React from "react";
import NavBar from "../NavBar";

const Amina = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 py-8 px-6 min-h-screen font-poppins">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Shelters for Homeless Families
        </h3>
        <p className="text-gray-600 leading-relaxed">
        The flood that devastated the region left hundreds of families displaced, with no homes to return to. Their homes were swept away, and their livelihoods destroyed. For many, the future seemed bleak, and hope appeared to be in short supply. These families were forced to live in makeshift shelters made from tarps and old materials, which offered no protection from the elements. They had lost everything, and the trauma was overwhelming.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        The “Home Again” campaign was created to provide these displaced families with temporary but sturdy shelters, offering them safety and dignity during their recovery. The generosity of thousands of donors from across the world made it possible to raise the necessary funds for this project. Volunteers worked tirelessly to build these shelters, and soon the families had a place to call home again. These shelters were more than just physical protection from the weather; they represented a fresh start, a place where the families could begin to rebuild their lives. With roofs over their heads, children could go back to school, parents could resume work, and the community could start coming together again. The shelters also provided a sense of security and stability, which is vital for mental well-being after such a traumatic experience. The families, who once feared for their future, now had hope and a sense of belonging.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
        This project was not just about providing shelter; it was about offering a second chance for these families to rebuild their lives, to heal, and to dream once again. Today, as they move forward, these families carry the gratitude of knowing that in their darkest hours, the kindness of strangers helped them find light.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Amina;
