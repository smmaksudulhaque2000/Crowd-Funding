import { Slide } from "react-awesome-reveal";
import { Link } from "react-router";

const RunningCampaignCard = ({ campaing }) => {
  if (!campaing) {
    return <p>Sorry! No Campaigns Found</p>;
  }

  const { image, title, type, description, minDonation, deadline, userEmail } = campaing;
  return (
    <div className="bg-base-100 shadow-xl flex flex-col md:flex-col lg:flex-row justify-center items-center border rounded-xl border-gray-100">
      <figure className="w-full lg:w-[1200px] p-2">
        <img className="h-72 w-full mx-auto rounded" src={image} alt="Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-500">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p>{type}</p>
        <Slide direction={'up'}>
          <p className="font-bold">${minDonation}</p>
          <p className="text-teal-500">{deadline}</p>
          <p className="text-gray-500">{userEmail}</p>
        </Slide>
        <div className="card-actions justify-end">
          <Link to={`/allcamping/${campaing._id}`}>
            <button className="btn bg-slate-500">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RunningCampaignCard;
