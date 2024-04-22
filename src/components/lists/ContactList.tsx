import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

type ContactProfileProps = {
  firstName: string
  lastName: string
  img: string
  phoneNumber: string
  email: string
};

type LetterSectionProps = {
  letter: string
  profiles: ContactProfileProps[]
  setProfile: Dispatch<SetStateAction<ContactProfileProps>>
  setOpen: Dispatch<SetStateAction<boolean>>
};

const LetterSection = ({ letter, profiles, setProfile, setOpen }: LetterSectionProps) => {
  return (
    <div className="relative min-w-[300px]">
      <div className="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
        {letter}
      </div>
      <div className="divide-y dark:divide-slate-200/5">
        {profiles.map((profile, i) => (
          <button
            key={i}
            onClick={() => { setProfile(profile); setOpen(true) }}
            className="flex w-full items-center gap-4 p-4 hover:bg-slate-100"
          >
            <img className="w-12 h-12 rounded-full" src={profile.img} alt={`profile of ${profile.firstName}`} loading="lazy" />
            <span className="text-slate-900 text-sm font-medium dark:text-slate-200">{profile.firstName} {profile.lastName}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    letter: 'A',
    profiles: [
      {
        firstName: "Andrew",
        lastName: "Alfred",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample13.jpg",
        phoneNumber: "123-456-7890",
        email: "andrew@example.com"
      },
      {
        firstName: "Aisha",
        lastName: "Houston",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg",
        phoneNumber: "234-567-8901",
        email: "aisha@example.com"
      },
      {
        firstName: "Anna",
        lastName: "White",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg",
        phoneNumber: "345-678-9012",
        email: "anna@example.com"
      },
      {
        firstName: "Andy",
        lastName: "Flint",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample6.jpg",
        phoneNumber: "456-789-0123",
        email: "andy@example.com"
      }
    ]
  },
  {
    letter: 'B',
    profiles: [
      {
        firstName: "Bob",
        lastName: "Alfred",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample8.jpg",
        phoneNumber: "567-890-1234",
        email: "bob@example.com"
      },
      {
        firstName: "Bianca",
        lastName: "Houston",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg",
        phoneNumber: "678-901-2345",
        email: "bianca@example.com"
      },
      {
        firstName: "Brianna",
        lastName: "White",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample9.jpg",
        phoneNumber: "789-012-3456",
        email: "brianna@example.com"
      },
      {
        firstName: "Bert",
        lastName: "Flint",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample16.jpg",
        phoneNumber: "890-123-4567",
        email: "bert@example.com"
      }
    ]
  },
  {
    letter: 'C',
    profiles: [
      {
        firstName: "Colton",
        lastName: "Alfred",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample2.jpg",
        phoneNumber: "901-234-5678",
        email: "colton@example.com"
      },
      {
        firstName: "Cynthia",
        lastName: "Houston",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample5.jpg",
        phoneNumber: "012-345-6789",
        email: "cynthia@example.com"
      },
      {
        firstName: "Cheyenne",
        lastName: "White",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample10.jpg",
        phoneNumber: "123-456-7890",
        email: "cheyenne@example.com"
      },
      {
        firstName: "Charlie",
        lastName: "Flint",
        img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg",
        phoneNumber: "234-567-8901",
        email: "charlie@example.com"
      }
    ]
  }
];

const ContactList = () => {
  const [profile, setProfile] = useState<ContactProfileProps>(data[0].profiles[0]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative overflow-hidden">
      <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-y-scroll ring-1 ring-slate-900/5 -my-px">
        {data.map((data, i) => (
          <LetterSection key={i} letter={data.letter} profiles={data.profiles} setProfile={setProfile} setOpen={setOpen} />
        ))}
      </div>
      <AnimatePresence mode='wait'>
        {open &&
          <motion.div
            initial={{ x: 350 }}
            animate={{ x: 0 }}
            exit={{ x: -350 }}
            className="absolute z-10 top-0 left-0 w-full h-full bg-slate-700/70 backdrop-blur-sm rounded-xl"
          >
            <button
              onClick={() => { setOpen(false) }}
              className="absolute right-2 top-2 text-right hover:text-red-600 scale-[200%] hover:rotate-[90deg] text-white duration-300"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M368 368 144 144m224 0L144 368" />
              </svg>
            </button>
            <img className="mt-2 w-52 h-52 rounded-tl-full rounded-tr-full rounded-br-full mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,.7)]" src={profile.img} alt={`profile of ${profile.firstName}`} loading="lazy" />
            <h2 className="text-white text-xl my-2 font-medium dark:text-slate-200 text-center">{profile.firstName} {profile.lastName}</h2>
            <div className="flex flex-col w-full text-center text-white font-medium">
              <span>{profile.phoneNumber}</span>
              <span>{profile.email}</span>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>
  );
};

export default ContactList;
