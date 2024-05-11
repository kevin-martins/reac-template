import { motion } from 'framer-motion'
import {
  BiLogoAirbnb,
  BiLogoAmazon,
  BiLogoAndroid,
  BiLogoDeezer,
  BiLogoDeviantart,
  BiLogoDiscordAlt,
  BiLogoDribbble,
  BiLogoDropbox,
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoPinterest,
  BiLogoReddit,
  BiLogoSlack,
  BiLogoSnapchat,
  BiLogoSteam,
  BiLogoTumblr,
  BiLogoTwitch,
  BiLogoTwitter,
  BiLogoUnity,
  BiLogoVimeo,
  BiLogoWhatsapp,
  BiLogoWindows
} from "react-icons/bi";

const DURATION = 25;

const IconsList1 = () => (
  <>
    <BiLogoDribbble className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoPinterest className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoGithub className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoDeviantart className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoFacebook className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoSnapchat className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoTumblr className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoTwitter className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoReddit className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoLinkedin className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoSlack className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
  </>
);

const BackendIcons = () => (
  <>
    <BiLogoAndroid className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoDropbox className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoSteam className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoUnity className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoTwitch className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoWindows className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoDeezer className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoAmazon className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoDiscordAlt  className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoAirbnb className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
    <BiLogoVimeo className='text-black hover:bg-black/30 hover:text-slate-800 hover:p-0 duration-500 rounded-lg w-16 h-16 md:w-24 md:h-24 p-3' />
  </>
);

type ScrollWrapperProps = {
  direction: string[],
  duration: number,
  children: JSX.Element
};

const ScrollWrapper = ({ direction, duration, children }: ScrollWrapperProps) => {
  return (
    <div className='py-3 overflow-x-hidden text-white'>
      <div className='flex mx-1'>
        {[1, 2, 3].map((x) => (
          <motion.div
            key={x}
            animate={{ x: direction }}
            transition={{ ease: 'linear', repeat: Infinity, duration }}
            className='flex gap-1 px-1'
          >
            {children}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const OppositeAutoScroll = () => {
  return (
    <div className='max-w-fit overflow-hidden'>
      <ScrollWrapper direction={['0%', '-100%']} duration={DURATION}>
        <IconsList1 />
      </ScrollWrapper>
      <ScrollWrapper direction={['-100%', '0%']} duration={DURATION}>
        <BackendIcons />
      </ScrollWrapper>
    </div>
  );
};

export default OppositeAutoScroll;
