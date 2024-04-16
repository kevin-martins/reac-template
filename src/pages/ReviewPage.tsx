import Wrapper from "../components/Wrapper";
import CustomerReview from "../components/review/CustomerReview";
import BasicReviews from "../components/review/BasicReviews";

export type StarProps = {
  fill: number
};

export type ReviewCardProps = {
  rating: number,
  username: string,
  profile: string,
  publishedTime: string,
  feedback: string
};

export type ReviewProps = {
  reviews: ReviewCardProps[]
};

export const renderStars = (rating: number) => {
  const stars = [];
  const rest = rating - Math.floor(rating);
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<Star key={i} fill={1} />);
    } else if  (i < Math.ceil(rating) && rest > 0) {
      stars.push(<Star key={i} fill={rest} />);
    } else {
      stars.push(<Star key={i} fill={0} />);
    };
  };
  return stars;
};

const Star = ({ fill }: StarProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <mask id={`fillMask${fill}`}>
        <rect x="0" y="0" width={`${fill * 100}%`} height="100%" fill="#FFFFFF" />
        <rect x="0" y="0" width={`${(fill) * 100}%`} height="100%" fill="#FFFFFF" />
        <rect x={`${(fill) * 100}%`} y="0" width={`${(1 - fill) * 100}%`} height="100%" fill="#999999" />
      </mask>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FACC15" mask={`url(#fillMask${fill})`} />
    </svg>
  );
};

export const calculateTimeSincePublished = (publishedTime: string) => {
  const currentTime = new Date();
  const reviewTime = new Date(publishedTime);
  const difference = Math.floor(((currentTime as any) - (reviewTime as any)) / (1000 * 60 * 60 * 24));
  switch (true) {
    case difference === 0: return "Today";
    case difference === 1: return "1 day ago";
    case difference < 7: return ` ${difference} days ago`;
    case difference < 30:
      const weeks = Math.floor(difference / 7);
      return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    case difference < 365:
      const months = Math.floor(difference / 30);
      return months === 1 ? '1 month ago' : `${months} months ago`;
    default:
      const years = Math.floor(difference / 365);
      return years === 1 ? '1 year ago' : `${years} years ago`;
  };
};

const data = [
  {
    rating: 4.5,
    username: "Patric Valent",
    profile: 'https://randomuser.me/api/portraits/med/men/75.jpg',
    publishedTime: "2024-02-25T08:00:00Z",
    feedback: "This product is amazing! I'm really satisfied with my purchase."
  },
  {
    rating: 3.8,
    username: "Emily Johnson",
    profile: 'https://randomuser.me/api/portraits/med/women/34.jpg',
    publishedTime: "2024-03-15T10:30:00Z",
    feedback: "Good quality, but it took a bit longer to arrive than expected."
  },
  {
    rating: 5.0,
    username: "John Smith",
    profile: 'https://randomuser.me/api/portraits/med/men/22.jpg',
    publishedTime: "2024-04-01T12:45:00Z",
    feedback: "Absolutely fantastic product! Couldn't be happier with my purchase."
  },
  {
    rating: 4.2,
    username: "Sophia Brown",
    profile: 'https://randomuser.me/api/portraits/med/women/45.jpg',
    publishedTime: "2024-02-12T09:15:00Z",
    feedback: "Great value for money. Highly recommended!"
  },
  {
    rating: 4.7,
    username: "Michael Anderson",
    profile: 'https://randomuser.me/api/portraits/med/men/67.jpg',
    publishedTime: "2024-03-20T14:20:00Z",
    feedback: "Excellent customer service and speedy delivery. Will definitely buy again."
  },
  {
    rating: 4.0,
    username: "Olivia Martinez",
    profile: 'https://randomuser.me/api/portraits/med/women/78.jpg',
    publishedTime: "2024-01-10T11:00:00Z",
    feedback: "Overall a good experience. The product met my expectations."
  },
  {
    rating: 4.9,
    username: "James Wilson",
    profile: 'https://randomuser.me/api/portraits/med/men/12.jpg',
    publishedTime: "2024-03-05T09:30:00Z",
    feedback: "Amazing quality and fast shipping. Very happy with my purchase."
  },
  {
    rating: 3.5,
    username: "Emma Taylor",
    profile: 'https://randomuser.me/api/portraits/med/women/56.jpg',
    publishedTime: "2024-02-28T13:00:00Z",
    feedback: "The product was okay, but it could have been better."
  },
  {
    rating: 4.6,
    username: "Liam Garcia",
    profile: 'https://randomuser.me/api/portraits/med/men/89.jpg',
    publishedTime: "2024-03-10T10:00:00Z",
    feedback: "Very satisfied with the product. It exceeded my expectations."
  },
  {
    rating: 4.3,
    username: "Ava Martinez",
    profile: 'https://randomuser.me/api/portraits/med/women/32.jpg',
    publishedTime: "2024-03-25T15:30:00Z",
    feedback: "Overall a positive experience. Would recommend to others."
  }
];

const ReviewPage = () => {
  const arrayRandomizer = (array: ReviewCardProps[], length: number): ReviewCardProps[] => {
    return array.sort(() => { return 0.5 - Math.random() }).splice(0, length);
  }

  return (
    <div>
      <Wrapper title='Basic'>
        <BasicReviews reviews={arrayRandomizer([...data], 3)} />
      </Wrapper>
      <Wrapper title='Modern'>
        <CustomerReview reviews={arrayRandomizer([...data], 2)} />
      </Wrapper>
    </div>
  );
};

export default ReviewPage;
