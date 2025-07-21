import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

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
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    if (hovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovered]);

  return (
    <section className="relative w-full mx-auto h-screen  z-20 flex items-center justify-center bg-white py-10 overflow-hidden">
      <div className="relative flex w-[97vw] h-[95vh] items-center overflow-hidden">
        <div className="text-white">

      <Navbar />
        </div>
        {images.map((image, index) => (
          <Link
            to={`/image/${index}`}
            key={index}
            className="w-1/3 h-screen overflow-hidden relative group cursor-none block"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              src={image.src}
              alt={`image-${index}`}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark overlay only on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

            {/* Title + paragraph always visible */}
            <div className="absolute bottom-16 left-16 z-20 text-white">
              <h2 className="text-xl font-bold mb-1">{image.title}</h2>
              <p className="text-sm max-w-xs">{image.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Custom Cursor */}
      {hovered && (
        <div
          ref={cursorRef}
          className="fixed pointer-events-none z-50 w-16 h-16 flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          //  className="fixed pointer-events-none z-50 w-16 h-16 flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-100"

        >
          Explore
        </div>
      )}
    </section>
  );
};

export default Hero;
