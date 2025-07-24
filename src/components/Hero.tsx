// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import Slider from "react-slick";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// const images = [
//   {
//     src: "../../Images/Image-2.jpg",
//     title: "Modern Architecture",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image-1.jpg",
//     title: "Case Study",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image.jpg",
//     title: "Modern Architecture",
//     description: "Digital Design",
//   },
// ];

// const Hero = () => {
//   const [hovered, setHovered] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
//   const cursorRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX}px`;
//         cursorRef.current.style.top = `${e.clientY}px`;
//       }
//     };

//     if (hovered && isDesktop) {
//       window.addEventListener("mousemove", handleMouseMove);
//     } else {
//       window.removeEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [hovered, isDesktop]);

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   return (
//     <section className="relative w-full mx-auto h-screen z-20 flex items-center justify-center bg-white py-10 md:overflow-hidden">
//       <div className="md:hidden z-50 bg-[#040404]">
//         <Navbar />
//       </div>

//       {isDesktop ? (
//         <div className="relative flex w-[97vw] h-[95vh] items-center overflow-hidden">
//           <div className="">
//             <Navbar  backgroundColor="bg-transparent" textColor="text-white"/>
//           </div>

//           {images.map((image, index) => (
//             <Link
//               to={`/image/${index}`}
//               key={index}
//               className="w-1/3 h-full overflow-hidden relative group cursor-none block"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//             >
//               <img
//                 src={image.src}
//                 alt={`image-${index}`}
//                 className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
//               <div className="absolute bottom-10 left-16 z-20 text-white">
//                 <h2 className="text-xl font-bold mb-1">{image.title}</h2>
//                 <p className="text-sm max-w-xs">{image.description}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       ) : (
//         <section className="relative top-[80px]  w-full mx-auto h-screen z-20 flex items-center justify-center py-10 bg-white md:hidden overflow-hidden">
//           <div className="relative w-[95vw] h-[97vh] overflow-hidden [&_.slick-dots]:hidden">
//             <Slider {...sliderSettings}>
//               {images.map((image, index) => (
//                 <Link
//                   to={`/image/${index}`}
//                   key={index}
//                   className="w-full  h-[97vh]  flex-shrink-0 relative block"
//                 >
//                   <img
//                     src={image.src}
//                     alt={`image-${index}`}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
// <div className="absolute bottom-16 left-5 z-20 text-white">
//   <h2 className="text-xl font-bold mb-1">{image.title}</h2>
//   <p className="text-sm max-w-xs">{image.description}</p>
// </div>
//                 </Link>
//               ))}
//             </Slider>
//           </div>
//         </section>
//       )}

//       {hovered && isDesktop && (
//         <div
//           ref={cursorRef}
//           className="fixed pointer-events-none z-[9999] w-16 h-16 flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
//         >
//           Explore
//         </div>
//       )}
//     </section>
//   );
// };

// // Custom Arrow Components
// const PrevArrow = (props: any) => (
//   <div
//     className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white cursor-pointer"
//     onClick={props.onClick}
//   >
//     <IoIosArrowRoundBack size={34} />
//   </div>
// );

// const NextArrow = (props: any) => (
//   <div
//     className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white cursor-pointer"
//     onClick={props.onClick}
//   >
//     <IoIosArrowRoundForward size={34} />
//   </div>
// );

// export default Hero;

// import { useEffect, useRef, useState } from "react";
// import Navbar from "./Navbar";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// // Images
// const images = [
//   {
//     src: "../../Images/Image-2.jpg",
//     title: "Modern Architecture",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image-1.jpg",
//     title: "Case Study",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image.jpg",
//     title: "Modern Architecture",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image-2.jpg",
//     title: "Modern Architecture",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image-1.jpg",
//     title: "Case Study",
//     description: "Digital Design",
//   },
//   {
//     src: "../../Images/Image.jpg",
//     title: "Modern Architecture",
//     description: "Digital Design",
//   },
// ];

// const Hero = () => {
//   const [hovered, setHovered] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
//   const cursorRef = useRef<HTMLDivElement | null>(null);
//   const dragStartX = useRef<number | null>(null);

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Move cursor
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (cursorRef.current) {
//         cursorRef.current.style.left = `${e.clientX}px`;
//         cursorRef.current.style.top = `${e.clientY}px`;
//       }
//     };

//     if (hovered && isDesktop) {
//       window.addEventListener("mousemove", handleMouseMove);
//     } else {
//       window.removeEventListener("mousemove", handleMouseMove);
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [hovered, isDesktop]);

//   // Detect live drag
//   useEffect(() => {
//     const handleMouseDown = (e: MouseEvent) => {
//       dragStartX.current = e.clientX;
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (dragStartX.current !== null) {
//         const distance = Math.abs(e.clientX - dragStartX.current);
//         if (distance > 5) {
//           setIsDragging(true);
//         }
//       }
//     };

//     const handleMouseUp = () => {
//       dragStartX.current = null;
//       setIsDragging(false);
//     };

//     if (isDesktop) {
//       window.addEventListener("mousedown", handleMouseDown);
//       window.addEventListener("mousemove", handleMouseMove);
//       window.addEventListener("mouseup", handleMouseUp);
//     }

//     return () => {
//       window.removeEventListener("mousedown", handleMouseDown);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, [isDesktop]);

//   // Slider settings
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 800,
//     // cssEase: "ease",
//     cssEase: "cubic-bezier(0.65, 0, 0.35, 1)",
//     slidesToShow: isDesktop ? 3 : 1,
//     slidesToScroll: 1,
//     arrows: !isDesktop,
//     draggable: true,
//     swipeToSlide: true,
//     afterChange: (index: number) => setCurrentSlide(index),
//     nextArrow: !isDesktop ? <NextArrow /> : undefined,
//     prevArrow: !isDesktop ? <PrevArrow /> : undefined,

//     beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
//   };

//   return (
//     <section>
//       {/* Navbar */}
//       <div className="md:hidden z-50">
//         <Navbar backgroundColor="bg-transparent" textColor="text-white" />
//       </div>
//       <div className="relative w-full mx-auto h-screen top-[80px] md:top-0 z-20 flex items-center justify-center bg-white py-10 overflow-hidden">
//         <section className="relative flex w-[97vw] h-[97vh] md:h-[95vh] items-center overflow-hidden">
//           {/* Navbar */}
//           <div className="hidden md:flex absolute top-0 left-0 w-full z-50">
//             <Navbar backgroundColor="bg-transparent" textColor="text-white" />
//           </div>

//           {/* Slider */}
//           <div className="relative w-full h-screen ">
//             <Slider {...sliderSettings}>
//               {images.map((image, index) => (
//                 <div
//                   key={index}
//                   className="w-full h-[97vh] cursor-none"
//                   onMouseEnter={() => setHovered(true)}
//                   onMouseLeave={() => setHovered(false)}
//                 >
//                   <div className="relative w-full h-full overflow-hidden group">
//                     <img
//                       src={image.src}
//                       alt={`image-${index}`}
//                       // className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 pointer-events-none"
//                       className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-none"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
//                     <div className="absolute bottom-16 left-8 md:left-16 z-20 text-white  transition-opacity duration-500 pointer-events-none">
//                       <h2 className="text-xl font-bold mb-1">{image.title}</h2>
//                       <p className="text-sm max-w-xs">{image.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div>

//           {/* Custom Cursor */}
//           {hovered && isDesktop && (
//             <div
//               ref={cursorRef}
//               className="fixed pointer-events-none z-[9999] w-16 h-16 flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
//             >
//               {isDragging ? "Drag" : "Explore"}
//             </div>
//           )}
//         </section>
//       </div>
//       {!isDesktop && (
//         <div className="absolute bg-white/30 p-[10px] rounded-2xl px-3 -bottom-9 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-3">
//           {images.map((_, index) => {
//             const isActive = index === currentSlide;
//             return (
//               <motion.div
//                 key={index}
//                 className={`h-[6px] ${
//                   isActive
//                     ? "w-[24px] bg-black rounded-full"
//                     : "w-[6px] bg-white/50 rounded-full"
//                 }`}
//                 animate={{
//                   width: isActive ? 24 : 6,
//                   height: 6,
//                   opacity: isActive ? 1 : 0.6,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 260,
//                   damping: 20,
//                 }}
//               />
//             );
//           })}
//         </div>
//       )}
//     </section>
//   );
// };

// // Arrows for mobile
// const PrevArrow = (props: any) => (
//   <div
//     className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white cursor-pointer"
//     onClick={props.onClick}
//   >
//     <IoIosArrowRoundBack size={34} />
//   </div>
// );

// const NextArrow = (props: any) => (
//   <div
//     className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white cursor-pointer"
//     onClick={props.onClick}
//   >
//     <IoIosArrowRoundForward size={34} />
//   </div>
// );

// export default Hero;

import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

// Images
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
  const [isDragging, setIsDragging] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number | null>(null);

  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);


  

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move cursor
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

  // Detect live drag
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      dragStartX.current = e.clientX;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (dragStartX.current !== null) {
        const distance = Math.abs(e.clientX - dragStartX.current);
        if (distance > 5) setIsDragging(true);
      }
    };

    const handleMouseUp = () => {
      dragStartX.current = null;
      setTimeout(() => setIsDragging(false), 50); // prevent click after drag
    };

    const handleTouchStart = (e: TouchEvent) => {
      dragStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (dragStartX.current !== null) {
        const distance = Math.abs(e.touches[0].clientX - dragStartX.current);
        if (distance > 5) setIsDragging(true);
      }
    };

    const handleTouchEnd = () => {
      dragStartX.current = null;
      setTimeout(() => setIsDragging(false), 50);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    cssEase: "cubic-bezier(0.65, 0, 0.35, 1)",
    slidesToShow: isDesktop ? 3 : 1,
    slidesToScroll: 1,
    arrows: !isDesktop,
    draggable: true,
    swipeThreshold: 9,
    swipeToSlide: true,
    afterChange: (index: number) => setCurrentSlide(index),
    nextArrow: !isDesktop ? <NextArrow /> : undefined,
    prevArrow: !isDesktop ? <PrevArrow /> : undefined,
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
  };





  return (
    <section>
      {/* Navbar */}
      <div className="md:hidden z-50">
        <Navbar backgroundColor="bg-transparent" textColor="text-white" />
      </div>

      <div className="relative w-full mx-auto h-screen top-[80px] md:top-0 z-20 flex items-center justify-center bg-white py-10 overflow-hidden">
        <section className="relative flex w-[97vw] h-[97vh] md:h-[95vh] items-center overflow-hidden">
          {/* Desktop Navbar */}
          <div className="hidden md:flex absolute top-0 left-0 w-full z-50">
            <Navbar backgroundColor="bg-transparent" textColor="text-white" />
          </div>

          {/* Slider */}
          <div className="relative w-full h-full ">
            <Slider {...sliderSettings}>
              {/* {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full h-[97vh] cursor-none"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onClick={handleClick}
                >
                  <div
                    className="relative w-full h-full overflow-hidden group"
                    
                  >
                    <img
                      src={image.src}
                      alt={`image-${index}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    <div className="absolute bottom-16 left-5 z-20 text-white">
                    <h2 className="text-xl font-bold mb-1">{image.title}</h2>
                    <p className="text-sm max-w-xs">{image.description}</p>
                  </div>
                  </div>
                </div>
              ))} */}
              {images.map((image, index) => {
                const handleClick = () => {
                  if (!isDragging) {
                    navigate(
                      `/project/${image.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    ); // or use image.slug
                  }
                };

                return (
                  <div
                    key={index}
                    className="w-full h-[97vh] cursor-pointer"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    onClick={handleClick}
                  >
                    <div className="relative w-full h-full overflow-hidden group">
                      <img
                        src={image.src}
                        alt={`image-${index}`}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] "
                        style={{ willChange: "transform" }}

                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <div className="absolute bottom-16 left-15 z-20 text-white">
                        <h2 className="text-xl font-bold mb-1">
                          {image.title}
                        </h2>
                        <p className="text-sm max-w-xs">{image.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            {/* Mobile Pagination */}
            {!isDesktop && (
              <div className="absolute bg-white/30 p-[10px] rounded-2xl px-3 bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-3">
                {images.map((_, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <motion.div
                      key={index}
                      className={`h-[6px] ${
                        isActive
                          ? "w-[24px] bg-black rounded-full"
                          : "w-[6px] bg-white/50 rounded-full"
                      }`}
                      animate={{
                        width: isActive ? 24 : 6,
                        height: 6,
                        opacity: isActive ? 1 : 0.6,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Custom Cursor */}
          {hovered && isDesktop && (
            <div
              ref={cursorRef}
              className="fixed pointer-events-none z-[9999] w-16 h-16 flex items-center justify-center rounded-full bg-white text-black font-semibold text-xs transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
            >
              {isDragging ? "Drag" : "Explore"}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

// Arrows for mobile
const PrevArrow = (props: any) => (
  <div
    className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white cursor-pointer"
    onClick={props.onClick}
  >
    <IoIosArrowRoundBack size={34} />
  </div>
);

const NextArrow = (props: any) => (
  <div
    className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 p-2 rounded-full hover:bg-white cursor-pointer"
    onClick={props.onClick}
  >
    <IoIosArrowRoundForward size={34} />
  </div>
);

export default Hero;
