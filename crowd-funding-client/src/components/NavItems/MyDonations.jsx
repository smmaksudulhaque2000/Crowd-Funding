import { useLoaderData } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState, useEffect } from "react";
import DonationCard from "../DonationCard";
import Loading from "../Loading";

const MyDonations = () => {
  const donations = useLoaderData();
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [showNoDonations, setShowNoDonations] = useState(false);

  const userDonations = donations.filter(
    (donation) => donation.userEmail === user?.email
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (userDonations.length === 0) {
        setShowNoDonations(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [userDonations]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mb-40">
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">
          My Donations
        </h2>
        {showNoDonations ? (
          <p className="text-center text-red-400 font-bold text-3xl my-10">
            No donations yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-5">
            {userDonations.map((donation) => (
              <DonationCard key={donation._id} donation={donation} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyDonations;
