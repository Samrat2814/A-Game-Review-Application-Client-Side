import { useLoaderData } from "react-router-dom";
import GameReviewCard from "../Components/GameReviewCard";

const AllReviews = () => {
    const allReviews = useLoaderData();
    console.log(allReviews)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                {
                    allReviews.map(review => <GameReviewCard key={review._id} review={review}/>)
                }
            </div>
        </div>
    );
};

export default AllReviews;