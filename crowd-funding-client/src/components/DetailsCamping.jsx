import React, { useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const DetailsCamping = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const campaigns = useLoaderData();
  
  const { image, title, type, minDonation, deadline, description, userEmail } = campaigns;

  const handleDonate = () => {
    const amount = Number(donationAmount);
    const currentDate = new Date();
    const campaignDeadline = new Date(deadline);

    const newDonation = {
      image,
      amount,
      description,
      currentDate,
      title,
      type,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "Unknown",
    };

    const formattedDate = new Date(deadline).toLocaleString("en-US", {
      dateStyle: "medium",
    });

    if (currentDate > campaignDeadline) {
      Swal.fire({
        title: "Sorry!",
        text: `The deadline for this campaign has passed ${formattedDate}`,
        icon: "error",
        confirmButtonText: "Go Back",
      });
      return;
    }

    if (isNaN(amount) || amount < minDonation) {
      Swal.fire({
        title: "Sorry!",
        text: `Minimum donation is ${minDonation} Tk`,
        icon: "error",
        confirmButtonText: "Go Back",
      });
      return;
    }

    fetch("https://crowd-funding-server-two.vercel.app/donation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newDonation),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: `Successfully donated ${amount} Tk!`,
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    setIsModalOpen(false);
  };

  return (
    <div className="card flex flex-col lg:flex-row card-side bg-base-100 shadow-xl">
      <figure className="w-full p-10">
        <img className="rounded-xl" src={image} alt="Campaign" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-500">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p>{type}</p>
        <p className="font-bold">Minimum Donation: ${minDonation}</p>
        <p className="text-teal-500">Deadline: {deadline}</p>
        <p className="text-gray-500">Creator: {userEmail}</p>
        <button
          className="btn bg-sky-500 mt-4"
          onClick={() => setIsModalOpen(true)}
        >
          Donate Now
        </button>
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Donate to {title}</h3>
            <input
              type="number"
              placeholder="Enter donation amount"
              className="input input-bordered w-full mt-4"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
            <div className="modal-action">
              <button className="btn btn-success" onClick={handleDonate}>
                OK
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsCamping;
