import { ReviewCardProps, ReviewProps, calculateTimeSincePublished, renderStars } from "../../pages/components/support/ReviewPage";

const ReviewCard = ({ rating, username, profile, publishedTime, feedback }: ReviewCardProps) => {
  const formattedTime = calculateTimeSincePublished(publishedTime);
  return (
    <div className="relative w-96 p-4 shadow-md transform hover:translate-x-1 hover:-translate-y-1 transition duration-300 bg-slate-900 rounded-lg">
      <div className="flex items-center mb-2">
        <img width={60} className="rounded-full mr-2" src={profile} alt="User Profile" loading='lazy' />
        <div className=''>
          <span className="block font-semibold text-lg mb-1 text-white">{username}</span>
          <span className="absolute top-4 right-4 text-sm text-slate-300">{formattedTime}</span>
          <div className="flex items-center mb-2">
            {renderStars(rating)}
          </div>
        </div>
      </div>
      <p className="text-sm text-slate-200">{feedback}</p>
    </div>
  );
};

const CustomerReview = ({ reviews }: ReviewProps) => {
  return (
    <section className="w-max flex gap-3 mx-auto">
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
    </section>
  );
};

export default CustomerReview;
