import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div animate={open ? "open" : "closed"} className="relative">
      <button
        onMouseEnter={() => setOpen((pv) => !pv)}
        onMouseLeave={() => setOpen((pv) => !pv)}
        className="group flex items-center gap-1 rounded-full px-3 py-1.5 text-sm transition-colors text-neutral-400"
      >
        <span className="">Profile</span>
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top", translateX: "-50%" }}
        className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
      >
        <Option setOpen={setOpen} Icon={FiEdit} text="Edit" />
        <Option setOpen={setOpen} Icon={FiPlusSquare} text="Duplicate" />
        <Option setOpen={setOpen} Icon={FiShare} text="Share" />
        <Option setOpen={setOpen} Icon={FiTrash} text="Remove" />
      </motion.ul>
    </motion.div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <div
      id="overlay-content"
      className="absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4"
      style={{ opacity: "1", transform: "none" }}
    >
      <div className="absolute -top-[24px] left-0 right-0 h-[24px]">
        </div>
        <span
          className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-neutral-600 bg-neutral-900"
          style={{ "clip-path": "polygon(0px 0px, 100% 0px, 50% 50%, 0% 100%)", left: "51.8125px" }}
        >
          </span>
          <div className="overflow-hidden">
            <div style={{ opacity: "1", transform: "none" }}>
              <div>
                <div className="flex gap-4"><div>
                  <h3 className="mb-2 text-sm font-medium">Startup</h3>
                  <a href="#" className="mb-1 block text-sm text-neutral-400">Bookkeeping</a>
                  <a href="#" className="block text-sm text-neutral-400">Invoicing</a>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-medium">Scaleup</h3>
                  <a href="#" className="mb-1 block text-sm text-neutral-400">Live Coaching</a>
                  <a href="#" className="mb-1 block text-sm text-neutral-400">Reviews</a>
                  <a href="#" className="block text-sm text-neutral-400">Tax/VAT</a>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-medium">Enterprise</h3>
                  <a href="#" className="mb-1 block text-sm text-neutral-400">White glove</a>
                  <a href="#" className="mb-1 block text-sm text-neutral-400">SOX Compliance</a>
                  <a href="#" className="block text-sm text-neutral-400">Staffing</a>
                  <a href="#" className="block text-sm text-neutral-400">More</a>
                </div>
              </div>
              <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-indigo-300">
                <span>View more</span>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden"></div><div className="overflow-hidden"></div>
                  </div>
    // <motion.li
    //   variants={itemVariants}
    //   onClick={() => setOpen(false)}
    //   className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    // >
    //   <motion.span variants={actionIconVariants}>
    //     <Icon />
    //   </motion.span>
    //   <span>{text}</span>
    // </motion.li>
  );
};

export default Dropdown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};
