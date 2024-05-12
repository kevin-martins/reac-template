import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroImageScroll = () => {
  const wrapperRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapperRef
  });
  const scale = useTransform(scrollYProgress, [0, .8], ['0.4', '1']);
  const y = useTransform(scrollYProgress, [0, .8], ['-300px', '0px']);
  const scaleTitle = useTransform(scrollYProgress, [.2, .4], ['1', '.4']);
  const opacityTitle = useTransform(scrollYProgress, [.2, .5], ['1', '0']);
  return (
    <motion.header ref={wrapperRef} className="h-[200vh] bg-slate-900">
      <div className="h-[calc(100vh_-_80px)] sticky top-20 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
        <motion.div
          style={{
            scale: scaleTitle,
            opacity: opacityTitle
          }}
          className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-5xl md:text-9xl font-bold text-center max-w-3xl">Awesome Pictures</h1>
          <p className="text-white text-base md:text-xl text-center max-w-xl mb-2 mt-4">Stunning montain pictures for free.</p>
        </motion.div>
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/image_8.avif`}
          alt=''
          style={{ scale }}
          loading="lazy"
          className="col-span-2 relative z-10 object-cover origin-top-left w-full h-full"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/image_6.avif`}
          alt=''
          style={{ scale }}
          loading="lazy"
          className="row-span-2 relative z-10 object-cover origin-top-right w-full h-full"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/image_1.png`}
          alt=''
          style={{ scale }}
          loading="lazy"
          className="row-span-2 relative z-10 object-cover origin-bottom-left w-full h-full"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/image_4.avif`}
          alt=''
          style={{ scale, y }}
          loading="lazy"
          className="relative z-10 object-cover w-full h-full"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/image_7.avif`}
          alt=''
          style={{ scale }}
          loading="lazy"
          className="relative z-10 object-cover origin-bottom-left w-full h-full"
        />
        <motion.img
          src={`${process.env.PUBLIC_URL}/assets/image_9.avif`}
          alt=''
          style={{ scale }}
          loading="lazy"
          className="relative z-10 object-cover origin-bottom-right w-full h-full"
        />
      </div>
    </motion.header>
  );
};

export default HeroImageScroll;
