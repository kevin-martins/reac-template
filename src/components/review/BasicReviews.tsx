import { ReviewCardProps, ReviewProps, calculateTimeSincePublished, renderStars } from "../../pages/components/support/ReviewPage";

const ReviewCard = ({ rating, username, profile, publishedTime, feedback }: ReviewCardProps) => {
  const formattedTime = calculateTimeSincePublished(publishedTime);

  return (
    <div className="w-72 h-max p-4 shadow-md transform hover:translate-x-2 hover:-translate-y-2 hover:scale-105 transition duration-300">
      <div className="flex items-center mb-2">
        <img className="w-10 h-10 rounded-full mr-2" src={profile} alt="User Profile" />
        <div className='grid grid-cols-2'>
          <p>{username}</p>
          <p className="text-sm text-right font-medium text-slate-500">{formattedTime}</p>
          <div className="flex items-center mb-2">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-400 mb-2">{feedback}</p>
    </div>
  );
};

const BasicReviews = ({ reviews }: ReviewProps) => {
  return (
    <div className="flex gap-3 mx-auto">
      {reviews.map((review, i) => (
        <ReviewCard
          key={i}
          rating={review.rating}
          username={review.username}
          profile={review.profile}
          publishedTime={review.publishedTime}
          feedback={review.feedback}
        />
      ))}
    </div>
  );
};

export default BasicReviews;
