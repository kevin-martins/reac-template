type StarProps = {
  fill: number
};

const Star = ({ fill }: StarProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <mask id={`fillMask${fill}`}>
        <rect x="0" y="0" width={`${fill * 100}%`} height="100%" fill="#FFFFFF" />
        <rect x="0" y="0" width={`${(1 - fill) * 100}%`} height="100%" fill="#FFFFFF" />
      </mask>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FACC15" mask={`url(#fillMask${fill})`} />
    </svg>
  );
};

type CustomerReviewProps = {
  rating: number,
  username: string,
  profile: string,
  publishedTime: string,
  feedback: string
};

const CustomerReview = ({ rating, username, profile, publishedTime, feedback }: CustomerReviewProps) => {
  const calculateTimeSincePublished = (publishedTime: string) => {
    const currentTime = new Date();
    const reviewTime = new Date(publishedTime);
    const difference = Math.floor(((currentTime as any) - (reviewTime as any)) / (1000 * 60 * 60 * 24));
    if (difference === 0) {
      return 'Today';
    } else if (difference === 1) {
      return '1 day ago';
    } else {
      return `${difference} days ago`;
    }
  };

  const formattedTime = calculateTimeSincePublished(publishedTime);

  const renderStars = (rating: number) => {
    const stars = [];
    const rest = rating - Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<Star fill={1} />);
      } else if  (i < Math.ceil(rating)) {
        stars.push(<Star fill={rest} />);
      } else {
        stars.push(<Star fill={0} />);
      }
    }
    return stars;
  };

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

const data = [
  {
    rating: 3,
    username: '',
    profile: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    publishedTime: '',
    feedback: ''
  }
];

const Reviews = () => {
  return (
    <div className="flex gap-3 mx-auto">
      {Array.from({ length: 3 }).map((_, i) => (
        <CustomerReview
          key={i}
          rating={4.5}
          username="Patric Valent"
          profile="/assets/veranda_1.png"
          publishedTime="2024-02-25T08:00:00Z"
          feedback="This product is amazing! I'm really satisfied with my purchase.This product is amazing! I'm really satisfied with my purchase.This product is amazing! I'm really satisfied with my purchase."
        />
      ))}
    </div>
  );
};

export default Reviews;
