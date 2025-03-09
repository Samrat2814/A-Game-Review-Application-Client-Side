import { Link } from "react-router-dom";

const GameReviewCard = ({ review }) => {
  const { _id } = review;
  
  console.log(_id)
  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-6 md:p-8 lg:p-3 flex flex-col">
      <img
        src={review.gameCover}
        alt={review.gameTitle}
        className="w-full h-36 object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold text-blue-400 mb-2">
        {review.gameTitle}
      </h2>
      <p className="text-gray-300 text-sm mb-2">
        Publishing Year: {review.publishingYear}
      </p>
      <p className="text-gray-300 text-sm mb-2">Genre: {review.genre}</p>

      {/* Fixed Description Issue - Ensures Button Always Stays at Bottom */}
      <div className="flex-grow">
        <p className="text-gray-400 mb-4">{review.reviewDescription}</p>
      </div>

      {/* Rating & Button in a Row */}
      <div className="flex justify-between items-center mt-4">
        <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
          Rating: {review.rating}/10
        </span>

        <Link
          to={`/page-details/${_id}`}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          More Details
        </Link>
      </div>
    </div>
  );
};

export default GameReviewCard;
