import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion"; // 👈 import framer-motion

const images = [
  {
    src: "../../Images/Image-2.jpg",
    title: "Modern Architecture",
    description: "Digital Design",
  },
  {
    src: "../../Images/Image-1.jpg",
    title: "Case Study",
    description: "Digital Design",
  },
  {
    src: "../../Images/Image.jpg",
    title: "Modern Architecture",
    description: "Digital Design",
  },
];

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [activeIndex, setActiveIndex] = useState(0);
  const cursorRef = useRef<HTMLDivElement | null>(null);
    

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return images.length - 1;
      if (next >= images.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    if (hovered && isDesktop) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovered, isDesktop]);

 

  return (
    <section className="relative w-full mx-auto h-screen z-20 flex items-center justify-center bg-white py-10 md:overflow-hidden">
      <div className="md:hidden border-2 z-50 bg-[#040404]">
        <Navbar />
      </div>

      {/* Desktop View - Show 3 Images */}
      {isDesktop ? (
        <div className="relative flex w-[97vw] h-[95vh] items-center overflow-hidden">
          <div className="text-white">
            <Navbar />
          </div>

          {images.map((image, index) => (
            <Link
              to={`/image/${index}`}
              key={index}
              className="w-1/3 h-full overflow-hidden relative group cursor-none block"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img
                src={image.src}
                alt={`image-${index}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <div className="absolute bottom-10 left-16 z-20 text-white">
                <h2 className="text-xl font-bold mb-1">{image.title}</h2>
                <p className="text-sm max-w-xs">{image.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        // Mobile View - Show One Image at a Time
        <section className="relative top-[80px] w-full mx-auto h-screen z-20 flex items-center justify-center py-10 bglack overflow-hidden md:hidden">
          <div className="relative flex w-[95vw] h-[97vh] items-center bg-black overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full h-full bg-black"
              >
                <Link
                  to={`/image/${activeIndex}`}
                  className="w-full h-full overflow-hidden relative block"
                >
                  <img
                    src={images[activeIndex].src}
                    alt={`image-${activeIndex}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <div className="absolute bottom-16 left-5 z-20 text-white">
                    <h2 className="text-xl font-bold mb-1">
                      {images[activeIndex].title}
                    </h2>
                    <p className="text-sm max-w-xs">
                      {images[activeIndex].description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => paginate(-1)}
              className="absolute left-4 z-30 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <IoIosArrowRoundBack size={34} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-4 z-30 bg-white/80 p-2 rounded-full hover:bg-white"
            >
              <IoIosArrowRoundForward size={34} />
            </button>
          </div>
        </section>
      )}

      {/* Custom Cursor - Only on Desktop */}
      {hovered && isDesktop && (
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-[999] w-16 h-16 flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        >
          Explore
        </div>
      )}
    </section>
  );
};

export default Hero;
