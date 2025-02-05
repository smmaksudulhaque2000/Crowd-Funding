import { useLoaderData } from "react-router";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { FaArrowDown19, FaArrowUp19 } from "react-icons/fa6";
import { Slide } from "react-awesome-reveal";

const AllCamping = () => {
  const campaigns = useLoaderData();
  const [sortedCampaigns, setSortedCampaigns] = useState(campaigns);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    if (campaigns) {
      setLoading(false);
    }
  }, [campaigns]);

  const handleSort = () => {
    const sorted = [...sortedCampaigns].sort((a, b) =>
      sortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation
    );
    setSortedCampaigns(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <h3 className="text-3xl font-bold mb-6 text-center text-sky-600">All Campaign</h3>

      <div className="flex justify-end">
        <button
          onClick={handleSort}
          className="btn bg-gray-400 my-4 flex items-center gap-2"
        >
          Sort by minDonation{" "}
          {sortOrder === "asc" ? (
            <FaArrowDown19 className="text-xl" />
          ) : (
            <FaArrowUp19 className="text-xl" />
          )}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr>
              <th className="text-teal-500">#</th>
              <th className="text-teal-500">Image</th>
              <th className="text-teal-500">Title</th>
              <th className="text-teal-500">Type</th>
              <th className="text-teal-500">Min Donation</th>
              <th className="text-teal-500">Deadline</th>
              <th className="text-teal-500">User Email</th>
              <th className="text-teal-500">Details</th>
            </tr>
          </thead>
          <tbody>
            {sortedCampaigns.map((campaing, index) => (
              <tr key={campaing._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={campaing.image}
                    alt={campaing.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="text-purple-500">{campaing.title}</td>
                <td>{campaing.type}</td>
                <td className="font-bold">${campaing.minDonation}</td>
                <td className="text-amber-500">{campaing.deadline}</td>
                <td>{campaing.userEmail}</td>
                <Slide direction="left">
                  <td>
                    <a
                      href={`/allcamping/${campaing._id}`}
                      className="bg-gray-600 btn text-white"
                    >
                      See More
                    </a>
                  </td>
                </Slide>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCamping;
