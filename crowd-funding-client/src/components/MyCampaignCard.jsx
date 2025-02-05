import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyCampaignCard = ({ campaign, campaigns, setCampaigns }) => {
  if (!campaign) {
    return null;
  }

  const { _id, image, title, type, minDonation, deadline } = campaign;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crowd-funding-server-two.vercel.app/campaign/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });
              const remaining = campaigns.filter((camp) => camp._id !== _id);
              setCampaigns(remaining);
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>
        <img src={image} alt="Campaign" className="w-20" />
      </td>
      <td className="text-purple-500">{title}</td>
      <td>{type}</td>
      <td className="font-bold">${minDonation}</td>
      <td className="text-amber-500">{deadline}</td>
      <td>
        <div className="flex space-x-2">
          <Link to={`/updatecampaign/${_id}`}>
            <button className="text-3xl">
              <FaEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="text-3xl text-red-500"
          >
            <MdDeleteForever />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyCampaignCard;
