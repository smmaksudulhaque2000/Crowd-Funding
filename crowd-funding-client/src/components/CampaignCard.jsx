import { Link } from "react-router";

const CampaignCard = ({ campaing }) => {

  if (!campaing) {
    return <p>Sorry! No Campaigns Found</p>;
  }

  
  const { image, title, type, description, minDonation, deadline, userEmail } = campaing;
  return (
    <div className="bg-base-100 shadow-xl flex flex-col md:flex-col lg:flex-row justify-center items-center border rounded-xl border-gray-100">
      <figure className="w-full p-2">
        <img className="h-64 w-96 mx-auto rounded" src={image} alt="Image" />
      </figure>
      <div className="card-body">
            <h2 className="card-title text-amber-500">{title}</h2>
            <p>{description}</p>
            <p>{type}</p>
            <p>{minDonation} Tk</p>
            <p className="text-teal-500">{deadline}</p>
            <p>{userEmail}</p>
        <div className="card-actions justify-end">
          <Link to={`/allcamping/${campaing._id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
