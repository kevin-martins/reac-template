type ContactProfileProps = {
  firstName: string
  lastName: string
  img: string
};

type LetterSectionProps = {
  letter: string
  profiles: ContactProfileProps[]
}

const LetterSection = ({ letter, profiles }: LetterSectionProps) => {
  return (
    <div className="relative min-w-[300px]">
      <div className="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10">
        {letter}
      </div>
      <div className="divide-y dark:divide-slate-200/5">
        {profiles.map((profile, i) => {
          const { firstName, lastName, img } = profile
          return (
            <div className="flex items-center gap-4 p-4 hover:bg-slate-100">
              <img className="w-12 h-12 rounded-full" src={img} alt='profile picture' />
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">{firstName} {lastName}</strong>
            </div>
          )
        })}
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
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Aisha",
        lastName: "Houston",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Anna",
        lastName: "White",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Andy",
        lastName: "Flint",
        img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      }
    ]
  },
  {
    letter: 'B',
    profiles: [
      {
        firstName: "Bob",
        lastName: "Alfred",
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Bianca",
        lastName: "Houston",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Brianna",
        lastName: "White",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Bert",
        lastName: "Flint",
        img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      }
    ]
  },
  {
    letter: 'C',
    profiles: [
      {
        firstName: "Colton",
        lastName: "Alfred",
        img: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Cynthia",
        lastName: "Houston",
        img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Cheyenne",
        lastName: "White",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      },
      {
        firstName: "Charlie",
        lastName: "Flint",
        img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
      }
    ]
  }
];

const ContactList = () => {
  return (
    <div className="relative rounded-xl p-3">
      <div className="relative max-w-md mx-auto bg-white dark:bg-slate-800 shadow-lg h-80 overflow-auto ring-1 ring-slate-900/5 -my-px">
        {data.map((data, i) => (
          <LetterSection key={i} letter={data.letter} profiles={data.profiles} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
