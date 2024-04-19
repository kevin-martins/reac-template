import { Link, useRouteError } from "react-router-dom";
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: ({ i, duration = .6 }: any) => {
    const delay = 1 + i * 1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

const Text = ({ strokeColor }: { strokeColor: string }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="150"
    height="200"
    viewBox="0 0 150 250"
    fill='#b91c1c'
    initial="hidden"
    animate="visible"
  >
    <motion.line
      x1="5"
      y1="100"
      x2="5"
      y2="205"
      strokeWidth="10"
      stroke={strokeColor}
      variants={draw}
      custom={{ i:0 }}
    />
    <motion.line
      x1="5"
      y1="200"
      x2="65"
      y2="200"
      strokeWidth="10"
      stroke={strokeColor}
      variants={draw}
      custom={{ i:.5 }}
    />
    <motion.line
      x1="45"
      y1="170"
      x2="45"
      y2="230"
      strokeWidth="10"
      stroke={strokeColor}
      variants={draw}
      custom={{ i:1 }}
    />
    <motion.ellipse
      cx="70"
      cy="175"
      rx="50"
      ry="70"
      stroke={strokeColor}
      fill='none'
      strokeWidth="8"
      variants={draw}
      custom={{ i:.3, duration: 1.5 }}
    />
    <motion.line
      x1="100"
      y1="100"
      x2="100"
      y2="205"
      strokeWidth="10"
      stroke={strokeColor}
      variants={draw}
      custom={{ i:.5 }}
    />
    <motion.line
      x1="100"
      y1="200"
      x2="160"
      y2="200"
      strokeWidth="10"
      stroke={strokeColor}
      variants={draw}
      custom={{ i:1 }}
    />
    <motion.line
      x1="145"
      y1="170"
      x2="145"
      y2="230"
      strokeWidth="10"
      stroke={strokeColor}
      variants={draw}
      custom={{ i:1.5 }}
    />
  </motion.svg>
)

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="h-screen grid place-items-center">
      <div className="w-fit m-auto">
        <div className="flex">
          <Text strokeColor='#b91c1c' />
          <h1 className="mt-auto text-xl">This page does not exist</h1>
        </div>
        <Link to='/' className="block text-center w-24 m-auto px-6 py-2 mt-3 rounded-lg bg-slate-700 text-white hover:scale-110 focus:scale-90">Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
