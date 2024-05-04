type Props = {
  text: string
};

const ShadowButton = ({ text }: Props) => {
  return (
    <button
      className="group flex items-center gap-2 rounded px-6 py-4 font-medium text-white transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 md:text-lg bg-black shadow-[4px_4px_0px_gray] hover:shadow-[6px_6px_2px_gray] active:shadow-[4px_4px_0px_gray]"
    >
      {text}
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="group-hover:-rotate-45 duration-300"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </button>
  );
};

export default ShadowButton;
