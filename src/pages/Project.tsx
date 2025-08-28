import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const images = [
  "/Images/sticky1.jpg",
  "/Images/sticky2.jpg",
  "/Images/sticky3.jpg",
  "/Images/sticky4.jpg",
];

const Project = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);



  useEffect(() => {
  if (selectedIndex !== null) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [selectedIndex]);



  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openViewer = (index: number) => setSelectedIndex(index);
  const closeViewer = () => setSelectedIndex(null);

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev! - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="relative w-full bg-white">
      <Navbar />

      {/* Custom Cursor */}
      {cursorVisible && isDesktop && (
        <div
          ref={cursorRef}
          className="fixed z-[999] pointer-events-none flex items-center justify-center w-16 h-16 rounded-full bg-white text-black text-xs font-semibold tracking-wide transition-transform duration-150 ease-linear will-change-transform -translate-x-1/2 -translate-y-1/2"
        >
          Explore
        </div>
      )}

      <div className="flex absolute top-25  flex-col lg:flex-row  ">
        {/* Left column - Images */}
        <div className="w-full lg:w-5/12 flex flex-col gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden cursor-pointer"
              onMouseEnter={() => setCursorVisible(true)}
              onMouseLeave={() => setCursorVisible(false)}
              onClick={() => openViewer(index)}
            >
              <img
                src={src}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right column - Sticky Text */}
        <div className="w-full lg:w-7/12 mt-20 md:mt-40 px-4">
          <div className="sticky top-20">
            <div className="max-w-xl mx-auto">
              <h6 className="text-[15px] font-medium text-[#7e7e7e] mb-2">
                Photography
              </h6>
              <h1 className="text-[52px] leading-[62px] font-bold text-[#181b31] mb-4">
                Brooklyn Residence
              </h1>
              <p className="text-[18px] leading-[27px] text-black mb-6">
                Interior design is the art and science of enhancing the
                interiors, sometimes including the exterior, of a space or
                building, to achieve a healthier and more aesthetically pleasing
                environment.
              </p>
              <div className="grid grid-cols-2 gap-y-6 text-black">
                <div>
                  <p className="opacity-35">Partner</p>
                  <p>LiquidThemes</p>
                </div>
                <div>
                  <p className="opacity-35">Role</p>
                  <p>Architect</p>
                </div>
                <div>
                  <p className="opacity-35">Date</p>
                  <p>June 2022</p>
                </div>
                <div>
                  <p className="opacity-35">Deliverables</p>
                  <p>Concept Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeViewer}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            <IoClose />
          </button>

          {/* Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-[44%] md:top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            <IoChevronBack />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-[44%] md:top-1/2 transform -translate-y-1/2 text-white text-3xl"
          >
            <IoChevronForward />
          </button>

          {/* Main Image */}
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="max-w-[90%] max-h-[70vh] object-contain "
          />

          {/* Index */}
          <p className="absolute bottom-10 md:bottom-30 right-4 bg-black text-gray-300 p-1 rounded-3xl mt-4 text-xs px-2">
            {selectedIndex + 1} / {images.length}
          </p>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-4 overflow-x-auto px-4">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setSelectedIndex(idx)}
                className={`w-24 h-20 object-cover  cursor-pointer border-2 ${
                  idx === selectedIndex ? "border-white" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;
