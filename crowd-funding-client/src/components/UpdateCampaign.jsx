import { useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import Lottie2 from "./Lottie2";

const UpdateCampaign = () => {
  const campaigns = useLoaderData();
  const { _id, image, title, type, minDonation, deadline, description } = campaigns;
  const { user } = useContext(AuthContext);

  const handleUpdate = (event) => {
    event.preventDefault();
    const image = event.target.imageUrl.value;
    const title = event.target.title.value;
    const type = event.target.type.value;
    const description = event.target.description.value;
    const minDonation = event.target.minDonation.value;
    const deadline = event.target.deadline.value;

    const updatedCampaign = {
      image,
      title,
      type,
      description,
      minDonation,
      deadline,
      userName: user?.displayName || "Anonymous",
      userEmail: user?.email || "Unknown",
    };

    fetch(`https://crowd-funding-server-two.vercel.app/campaign/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Campaign Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center min-h-screen my-10 p-5">
      <div>
        <Lottie2></Lottie2>
      </div>
      <div className="max-w-xl w-full p-6 bg-white rounded-lg shadow-lg border border-gray-100">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-sky-600">
          Update Your <br /> <span className="text-emerald-600">{title}</span> <br /> Campaign
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">Image URL</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              defaultValue={image}
              placeholder="Enter image URL"
              className="input input-bordered w-full border-sky-400 focus:ring focus:ring-sky-300"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">Campaign Title</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              placeholder="Enter campaign title"
              className="input input-bordered w-full border-sky-400 focus:ring focus:ring-sky-300"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">Campaign Type</span>
            </label>
            <select
              name="type"
              defaultValue={type}
              className="select select-bordered w-full border-sky-400 focus:ring focus:ring-sky-300"
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

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={description}
              placeholder="Enter campaign description"
              className="textarea textarea-bordered w-full border-sky-400 focus:ring focus:ring-sky-300"
              required
            ></textarea>
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">Minimum Donation Amount</span>
            </label>
            <input
              type="number"
              name="minDonation"
              defaultValue={minDonation}
              placeholder="Enter minimum donation amount"
              className="input input-bordered w-full border-sky-400 focus:ring focus:ring-sky-300"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              defaultValue={deadline}
              className="input input-bordered w-full border-sky-400 focus:ring focus:ring-sky-300"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">User Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName || "Anonymous"}
              className="input input-bordered w-full bg-gray-200"
              readOnly
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text text-sky-700 font-semibold">User Email</span>
            </label>
            <input
              type="email"
              value={user?.email || "Unknown"}
              className="input input-bordered w-full bg-gray-200"
              readOnly
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn w-full bg-sky-600 hover:bg-sky-700 text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCampaign;
