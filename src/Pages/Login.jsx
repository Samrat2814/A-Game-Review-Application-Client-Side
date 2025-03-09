import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { googleLogin, userLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in! 🎉");
        reset();
      })
      .catch((error) => {
        toast.error("Login failed. Please try again! ❌");
        setError("password", {
          type: "manual",
          message: "Incorrect password. Please try again.",
        });
      });
  };

  const googleSignIn = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully logged in with Google! 🎉");
      })
      .catch((error) => {
        toast.error("Google login failed. Please try again! ❌");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-800 text-white">
      <div className="max-w-lg w-full mx-auto p-6 bg-gray-900 rounded-xl shadow-lg mt-6 md:p-8 lg:p-10">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

          <div className="text-right">
            <Link
              to="/forgot"
              className="text-blue-400 text-sm hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            Login
          </button>

          <button
            onClick={googleSignIn}
            className="w-full flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold text-lg transition duration-300"
          >
            <FaGoogle size={20} /> Login with Google
          </button>

          <p className="text-center text-gray-300 font-semibold">
            Don’t Have An Account?{" "}
            <Link className="text-blue-400 hover:underline" to="/signup">
              Register
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;
