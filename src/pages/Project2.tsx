import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../components/Navbar";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { GrCheckmark } from "react-icons/gr";


const sliderImages = [
  "/Images/sticky1.jpg",
  "/Images/sticky2.jpg",
  "/Images/sticky3.jpg",
  "/Images/sticky4.jpg",
];

const accordionData = [
  {
    title: "Accordion Item One",
    content:
      "This is the content for the first accordion item. It's hidden by default and slides down smoothly when opened.",
  },
  {
    title: "Accordion Item Two",
    content:
      "Second accordion item content. You can put anything you want here, including links, images, or components.",
  },
  {
    title: "Accordion Item Three",
    content:
      "Third item. Make sure the transition is smooth and text readable when expanded.",
  },
];

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3  shadow-md hover:bg-gray-200"
      onClick={onClick}
    >
      <MdArrowForwardIos className="text-black" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-3 shadow-md hover:bg-gray-200"
      onClick={onClick}
    >
      <MdArrowBackIos className="text-black" />
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const Project2: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className=" max-w-6xl  mx-auto mt-[90px]  px-4">
        {/* Slider */}
        <div className="relative w-full overflow-hidden  mb-10">
          <Slider {...settings}>
            {sliderImages.map((src, idx) => (
              <div key={idx} className="w-full h-[300px] md:h-[80vh]">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Sidebar + Main */}
        <div className="flex flex-col-reverse md:flex-row w-full gap-14 pb-20">
          {/* Sidebar */}
          <div className="w-full md:w-1/4  text-black  rounded-xl">
            <div className="transition-all duration-300 box-border p-9 flex relative w-full flex-wrap items-start rounded-[5px] bg-[#f7f8fa]">
              {/* Heading Section */}
              <div className="mb-5 w-full">
                <div className="transition-all duration-300">
                  <div className="relative box-border">
                    <h3 className="mt-0 mb-5 inline-block text-[19px] font-bold leading-[22.8px] text-[#181b31] font-syne whitespace-normal transition-colors duration-300">
                      Project Details
                    </h3>
                  </div>
                </div>
              </div>

              {/* Metadata Section */}
              <div className="relative w-full">
                <div className="transition-all duration-300">
                  <div className="flex flex-wrap justify-between box-border">
                    {/* Client */}
                    <div className="mb-4 text-black flex justify-between items-center w-full">
                      <p className="opacity-35 leading-[26.4px] m-0">Client</p>
                      <p className="leading-[26.4px] m-0">Liquid Themes</p>
                    </div>
                    {/* Date */}
                    <div className="mb-4 text-black flex justify-between items-center w-full">
                      <p className="opacity-35 leading-[26.4px] m-0">Date</p>
                      <p className="leading-[26.4px] m-0">2022</p>
                    </div>
                    {/* Project */}
                    <div className="mb-4 text-black flex justify-between items-center w-full">
                      <p className="opacity-35 leading-[26.4px] m-0">Project</p>
                      <p className="leading-[26.4px] m-0">Interior Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main */}
          <div className="md:w-3/4 text-black ">
            <h3 className="mt-0 mb-[25px] align-middle transition-colors duration-300 relative inline-block text-[25px] font-bold leading-[30px] text-[#181b31] whitespace-normal font-syne">
              Influential and Impactful
            </h3>

            <p className="text-sm md:text-base mt-0 mb-4 align-middle inline-block relative whitespace-normal transition-colors duration-300">
              Take advantage of the experiential-learning opportunities built into many programs. You can work in labs on and off campus or even spend semesters overseas. One Construction employs over 3 000 employees, the majority of whom are based on project sites.
            </p>
            <p className="text-sm md:text-base mt-0 mb-4 align-middle inline-block relative whitespace-normal transition-colors duration-300">
              We embrace holistic development and support for employees with the
              aim of being a first-choice employer within our sectors. Through a
              unique combination of engineering, construction and design
              disciplines and expertise.
            </p>



            {/* ===========FLEX BORDER CARD HERE======================== */}

            <div className="flex flex-col md:flex-row my-9">
            <div className="transition-all duration-300 box-border p-7 flex relative w-full flex-wrap items-start border border-[#ebebeb] flex-3/5">
              {/* Heading */}
              <div className="mb-5 w-full relative">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <h3 className="mt-0 mb-[18.75px] align-middle transition-colors duration-300 relative inline-block text-[25px] font-bold leading-[30px] text-[#181b31] whitespace-normal font-syne">
                      Award-Winning Architecture
                    </h3>
                  </div>
                </div>
              </div>

              {/* Paragraph */}
              <div className="mb-5 w-full relative">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <p className="mt-0 mb-8 align-middle transition-colors duration-300 relative inline-block whitespace-normal text-sm md:text-base text-[#181b31]">
                      Through a unique combination of engineering, construction
                      and design disciplines and expertise, Concor delivers
                      world class infrastructure solutions. We embrace holistic
                      development and support for employees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="w-full relative text-left">
                <div className="transition-all duration-300">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center px-[31.5px] py-[17.25px] bg-[#2e2e2e] text-white text-[15px] leading-[21.92px] font-medium rounded-[5px] whitespace-nowrap transition-all duration-300 relative overflow-hidden no-underline hover:bg-black"
                    style={{ height: "52px" }}
                  >
                    <span className="relative z-10 block">Get in Touch</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="transition-all border-r duration-300 box-border p-8 flex relative w-full flex-wrap items-center content-center border-x md:border-x-0 border-y  border-[#ebebeb] flex-2/5">
              <div className="w-full relative">
                <div className="min-h-[1px] transition-all duration-300">
                  <div className="relative transition-opacity duration-300">
                    <ul className="p-0 m-0 list-none">
                      {[
                        "Global Data Analysis",
                        "Immediate settlement",
                        "Zero broker commission",
                        "Guaranteed by the services",
                        "Global Data Analysis",
                        "Infrastructure solutions",
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center w-full relative mb-[15px] flex-wrap"
                        >
                          <a
                            href="#"
                            className="flex items-center w-full relative no-underline text-[#363636] bg-transparent transition-colors duration-300"
                          >
                            <span className="me-3 flex items-center text-[#525252]">
                              {/* Replace this <i> with your icon if needed */}
                             <GrCheckmark />
                            </span>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* =======ACCORDION HERE =========== */}
            <div className="w-full flex flex-col gap-7 ">
              {accordionData.map((item, index) => {
                const isOpen = index === activeIndex;
                return (
                  <div key={index} className="">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full text-left px-5 py-4 flex items-center justify-between transition-colors rounded-lg cursor-pointer duration-300 ${
                        isOpen ? "bg-black text-white" : "bg-gray-100 text-black"
                      }`}
                    >
                      <span className="text-lg font-medium">{item.title}</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden px-5"
                        >
                          <div className="py-4 text-sm text-gray-700">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
