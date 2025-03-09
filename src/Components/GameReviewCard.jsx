const GameReviewCard = ({ review }) => {
    return (
      <div className="max-w-lg w-full mx-auto p-6 bg-gray-900 text-white rounded-xl shadow-lg mt-6 md:p-8 lg:p-3">
        <img
          src={review.gameCover}
          alt={review.gameTitle}
          className="w-full h-36 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-400 mb-2">{review.gameTitle}</h2>
        <p className="text-gray-300 text-sm mb-2">Publishing Year: {review.publishingYear}</p>
        <p className="text-gray-300 text-sm mb-2">Genre: {review.genre}</p>
        <p className="text-gray-400 mb-4">{review.reviewDescription}</p>
        <div className="flex justify-between items-center">
          <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">Rating: {review.rating}/10</span>
          <span className="text-gray-400 text-sm">Reviewed by: {review.userName}</span>
        </div>
      </div>
    );
  };
  
  export default GameReviewCard;