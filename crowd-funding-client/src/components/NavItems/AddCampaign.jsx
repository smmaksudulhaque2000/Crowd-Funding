import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AddCampaign = () => {
  const { user } = useContext(AuthContext);

  const handleAdd = (event) => {
    event.preventDefault();
    const image = event.target.imageUrl.value;
    const title = event.target.title.value;
    const type = event.target.type.value;
    const description = event.target.description.value;
    const minDonation = event.target.minDonation.value;
    const deadline = event.target.deadline.value;

    const newCampaign = {
      image,
      title,
      type,
      description,
      minDonation,
      deadline,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "Unknown",
    };

    fetch("https://crowd-funding-server-two.vercel.app/campaign", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Campaign Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          event.target.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg my-10 border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-sky-600">
        Add New Campaign
      </h2>
      <form onSubmit={handleAdd}>
        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Image URL</span>
          </label>
          <input
            type="url"
            name="imageUrl"
            placeholder="Enter image URL"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Campaign Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter campaign title"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Campaign Type</span>
          </label>
          <select
            name="type"
            className="select select-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          >
            <option value="" disabled>
              Select type
            </option>
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter campaign description"
            className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          ></textarea>
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Minimum Donation Amount</span>
          </label>
          <input
            type="number"
            name="minDonation"
            placeholder="Enter minimum donation amount"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">Deadline</span>
          </label>
          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-sky-500"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">User Name</span>
          </label>
          <input
            type="text"
            value={user?.displayName || "Anonymous"}
            className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            readOnly
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text font-medium">User Email</span>
          </label>
          <input
            type="email"
            value={user?.email || "Unknown"}
            className="input input-bordered w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
            readOnly
          />
        </div>

        <div className="form-control mb-6">
          <button
            type="submit"
            className="btn bg-slate-600 w-full py-3 text-white font-semibold text-lg rounded-lg hover:bg-sky-700"
          >
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaign;
