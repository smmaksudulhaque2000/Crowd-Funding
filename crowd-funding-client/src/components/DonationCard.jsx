const DonationCard = ({ donation }) => {
  if (!donation) {
    return <p>Sorry! No Donation Found</p>;
  }

  const { image, title, type, description, currentDate, userEmail, amount } = donation;

  const formattedDate = new Date(currentDate).toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  return (
    <div className="bg-base-100 shadow-xl flex flex-col md:flex-col lg:flex-row justify-center items-center border rounded-xl border-gray-100">
      <figure className="w-full p-2">
        <img className="h-64 w-96 mx-auto rounded" src={image} alt="Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-amber-500">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <p>{type}</p>
        <p className="font-bold">${amount}</p>
        <p className="text-teal-500">{formattedDate}</p>
        <p className="text-gray-500">{userEmail}</p>
      </div>
    </div>
  );
};

export default DonationCard;
