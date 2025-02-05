import React, { useState } from "react";
import RunningCampaignCard from "./RunningCampaignCard";

const RunningCampaign = ({ campaigns }) => {
  const [showAll, setShowAll] = useState(false);

  const validCampaigns = campaigns.filter(
    (campaign) => new Date(campaign.deadline) >= new Date()
  );

  const displayedCampaigns = showAll ? validCampaigns : validCampaigns.slice(0, 6);

  return (
    <div>
      <h3 className="text-center font-bold text-3xl text-sky-600">Running Campaign</h3>
      <p className="w-full lg:w-3/4 mx-auto text-center my-5 text-slate-500">
        In our Running Campaigns section, you can explore all the active and ongoing campaigns. These campaigns focus on various social, educational, health, and developmental projects, all aiming to bring positive change. By donating, you can contribute to these causes and be a part of making a difference. Our goal is to work together for the betterment of society, and with your support, we can achieve this vision. Join us in creating a lasting impact through your generous contributions.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {displayedCampaigns.map((campaign) => (
          <RunningCampaignCard key={campaign._id} campaing={campaign}></RunningCampaignCard>
        ))}
      </div>

      {!showAll && validCampaigns.length > 6 && (
        <div className="text-center mt-4">
          <button
            className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-blue-600 transition w-full"
            onClick={() => setShowAll(true)}
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default RunningCampaign;
