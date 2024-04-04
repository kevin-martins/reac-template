import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: any) => {
  return (
    <></>
    // <motion.div
    //   key={idx}
    //   style={{
    //     backgroundImage: `url(${imgSrc})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    //   animate={{
    //     scale: imgIndex === idx ? 0.95 : 0.85,
    //   }}
    //   transition={SPRING_OPTIONS}
    //   className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
    // />
    // <div
    //   key={card.id}
    //   className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    // >
    //   <img
    //     src={card.url}
    //     alt={card.alt}
    //     className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    //     style={{
    //       objectFit: "cover",
    //       objectPosition: "center",
    //     }}
    //   />
    //   <div className="absolute inset-0 z-10 grid place-content-center">
    //     <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
    //       {card.title}
    //     </p>
    //   </div>
    // </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];