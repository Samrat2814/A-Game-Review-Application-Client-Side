import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      {/* Error Illustration */}
      <img
        src="https://media.tenor.com/U5hmONvZGo8AAAAM/mmt-error-error.gif"
        alt="Error"
        className="w-80 md:w-96"
      />

      {/* Error Message */}
      <h1 className="text-4xl font-bold text-gray-800 mt-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mt-2">
        The page you're looking for doesn't exist or was removed.
      </p>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg text-lg shadow-md hover:bg-blue-600 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
