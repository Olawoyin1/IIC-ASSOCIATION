import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const images = [
  "../../Images/bg-image.jpg",
  "../../Images/bg-image1.jpg",
  "../../Images/bg-image2.jpg",
];

const paragraphLines = [
  "We are more than creators—we are translators of thought into form, of vision into action. Every project begins with a question, a spark shaped by research, and fueled by the belief that real impact comes, a bold idea that refuses to stay quiet. We embrace complexity, not as a barrier, but as a canvas.",
  "Our work is guided by intuition, shaped by research, and fueled by the belief that real impact comes from blending creativity with shaped by research, and fueled by the belief that real impact comes purpose. Whether we're building for today or dreaming for tomorrow, our commitment stays the same:",
  "We believe in the power of vision and change. Every idea is a spark waiting to ignite something great. Our work reflects creativity,shaped by research, and fueled by the belief that real impact comes purpose, and action—to design with meaning, move with intention, and always stay human in a digital world.",
];



const getAnimation = (lineIndex: number) => {
  switch (lineIndex) {
    case 0:
      return {
        hidden: {
          opacity: 0,
          x: -50,
          skewX: 5,
        },
        visible: (i: number): any => ({
          opacity: 1,
          x: 0,
          skewX: 0,
          transition: {
            delay: i * 0.07,
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.99],
          },
        }),
      };
    case 1:
      return {
        hidden: { opacity: 0 },
        visible: (i: number): any => ({
          opacity: [0, 1, 0.3, 1],
          transition: {
            delay: i * 0.1,
            duration: 1.5,
            ease: [0.42, 0, 0.58, 1],
          },
        }),
      };
    case 2:
    default:
      return {
        hidden: { opacity: 0 },
        visible: (i: number): any => ({
          opacity: 1,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1],
          },
        }),
      };
  }
};

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Change background every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (

    <>
            <Navbar />
          
    <main className="relative w-full mx-auto h-screen top-[80px] z-20 flex items-center justify-center bg-white py-10 overflow-hidden"> 
    
    <section className="relative flex w-[95vw] h-[97vh] md:w-[97vw] md:h-[95vh] items-center overflow-hidden">
      {/* Background Zoom Image */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`bg-${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          />
        ))}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Navbar */}
      <div className="hidden md:flex text-white z-20">
        <Navbar />
      </div>

      {/* Animated Text */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center h-full text-white  px-6">
        {paragraphLines.map((line, lineIndex) => {
          const words = line.split(" ");
          const animation = getAnimation(lineIndex);

          return (
            <motion.div
              key={lineIndex}
              className="text-xs md:text-lg  font-semibold mb-4 text-start text-gray-200"
            >
              {words.map((word, wordIndex) => (
                <motion.span
                  key={wordIndex}
                  custom={wordIndex}
                  initial="hidden"
                  animate="visible"
                  variants={animation}
                  className="inline-block mx-1 whitespace-nowrap"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
          );
        })}

        {/* =========socials links here ============ */}
        <div className="grid grid-cols-4 w-full list-none border-t pt-4 border-gray-500">
          <li><a href="#">Fb.</a></li>
          <li><a href="#">Tw.</a></li>
          <li><a href="#">In.</a></li>
          <li><a href="#">Lk.</a></li>
        </div>
      </div>
    </section>
    </main>

    </>
  );
};

export default About;
