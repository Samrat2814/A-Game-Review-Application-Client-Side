import { useLoaderData } from "react-router-dom";
import GameReviewCard from "../Components/GameReviewCard";

const HighestRatedGame = () => {
  const allReviews = useLoaderData();

  // Filter top 6 highest-rated games
  const topRatedGames = allReviews
    .sort((a, b) => b.rating - a.rating) // Sort by highest rating first
    .slice(0, 6); // Get top 6 games

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">
        🎮 Highest Rated Games
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {topRatedGames.map((review) => (
          <GameReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default HighestRatedGame;
