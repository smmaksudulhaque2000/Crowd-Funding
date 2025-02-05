import { useLoaderData } from "react-router";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyCampaignCard from "../MyCampaignCard";
import Loading from "../Loading";

const MyCampaign = () => {
  const loadedCampaigns = useLoaderData();
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState(loadedCampaigns);
  const [loading, setLoading] = useState(true);
  const [showNoCampaigns, setShowNoCampaigns] = useState(false);

  const filteredCampaigns = campaigns.filter(
    (campaign) => campaign.userEmail === user.email
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (filteredCampaigns.length === 0) {
        setShowNoCampaigns(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [filteredCampaigns]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mb-40">
      <h3 className="text-3xl font-bold mb-6 text-center text-sky-600">
        My Campaigns
      </h3>
      {showNoCampaigns ? (
        <p className="text-center text-red-400 font-bold text-3xl my-10">
          No campaigns found for your account.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th className="text-teal-500">Image</th>
                <th className="text-teal-500">Title</th>
                <th className="text-teal-500">Type</th>
                <th className="text-teal-500">Min Donation (Tk)</th>
                <th className="text-teal-500">Deadline</th>
                <th className="text-teal-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCampaigns.map((campaign) => (
                <MyCampaignCard
                  key={campaign._id}
                  campaign={campaign}
                  campaigns={campaigns}
                  setCampaigns={setCampaigns}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
