import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Account created successfully! 🎉");
        reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-800 text-white">
      <div className="max-w-lg w-full mx-auto p-6 bg-gray-900 rounded-xl shadow-lg mt-6 md:p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Photo URL
            </label>
            <input
              {...register("photoUrl")}
              type="text"
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white"
              placeholder="Enter your photo URL"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              type="email"
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d).*$/,
                  message:
                    "Password must include at least 1 uppercase letter and 1 number",
                },
              })}
              type={showPassword ? "text" : "password"}
              className="w-full p-3 bg-gray-700 rounded-lg border border-gray-600 text-white pr-10"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-3 top-10 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Register
          </button>

          <p className="text-center text-gray-300 font-semibold">
            Already have an account?{" "}
            <Link className="text-blue-400 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SignIn;
