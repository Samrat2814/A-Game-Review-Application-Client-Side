import { useContext } from "react";
import { Form, useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const AddReview = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (!user) {
    navigate(location?.state?.from || "/login");
    return null; // Prevent rendering the rest of the component
  }

  const onSubmit = (data) => {
    console.log(data);
    // send data to the server
    // Send data to the server
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("🎉 Coffee added successfully!", {
            position: "top-right",
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("❌ Failed to add coffee");
      });
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-10 md:p-8 lg:p-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
        Add New Review
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("gameCover")}
          type="text"
          placeholder="Game Cover URL"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          {...register("gameTitle")}
          type="text"
          placeholder="Game Title"
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          {...register("reviewDescription")}
          placeholder="Review Description"
          className="w-full p-3 h-32 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("rating")}
            type="number"
            placeholder="Rating (1-10)"
            min="1"
            max="10"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            {...register("publishingYear")}
            type="number"
            placeholder="Publishing Year"
            min="1900"
            max="2025"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <select
          {...register("genre")}
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="RPG">RPG</option>
          <option value="Adventure">Adventure</option>
          <option value="Shooter">Shooter</option>
          <option value="Strategy">Strategy</option>
          <option value="Sports">Sports</option>
        </select>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            {...register("userEmail")}
            type="email"
            placeholder={user.email}
            readOnly
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-400 cursor-not-allowed"
          />
          <input
            {...register("userName")}
            type="text"
            placeholder="User Name"
            readOnly
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-400 cursor-not-allowed"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
        >
          Submit Review
        </button>
      </form>
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddReview;
