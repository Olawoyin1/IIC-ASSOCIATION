import { GrCheckmark } from "react-icons/gr";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../components/Footer";

const New = () => {
  const accordionData = [
    {
      title: "Guanrateed by the trusted architecture services",
      content:
        "We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise.",
    },
    {
      title: "Accordion Item Two",
      content:
        "We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise.",
    },
    {
      title: "Accordion Item Three",
      content:
        "We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="relative w-full z-10 bg-white ">
      <div className=" max-w-6xl mb-160  mx-auto mt-[140px]  px-4">
        {/* Sidebar + Main */}
        <div className="flex flex-col-reverse md:flex-row w-full gap-14 pb-20">
          {/* Sidebar */}

          <div className="w-full md:w-sm  text-black  rounded-xl">
            {/* <!-- Sticky Sidebar --> */}
            <div className="sticky top-20 w-full flex flex-wrap items-start transition-all duration-300">
              {/* <!-- Menu --> */}
              <div className="w-full mb-5">
                <ul className="m-0 p-0 list-none">
                  <li className="mb-1">
                    <a
                      href="#"
                      className="flex items-center w-full p-[15px_24px] text-[15px] text-black bg-[#f7f8fa] transition-colors duration-300"
                    >
                      Research and Development
                      <span className="ml-auto flex items-center">
                        <i className="text-[15px]"></i>
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="flex items-center w-full p-[15px_24px] text-[15px] text-black bg-[#f7f8fa] transition-colors duration-300"
                    >
                      3D Models
                      <span className="ml-auto flex items-center">
                        <i className="text-[15px]"></i>
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="flex items-center w-full p-[15px_24px] text-[15px] text-black bg-[#f7f8fa] transition-colors duration-300"
                    >
                      Interior Design
                      <span className="ml-auto flex items-center">
                        <i className="text-[15px]"></i>
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="flex items-center w-full p-[15px_24px] text-[15px] text-black bg-[#f7f8fa] transition-colors duration-300"
                    >
                      Influential Architecture
                      <span className="ml-auto flex items-center">
                        <i className="text-[15px]"></i>
                      </span>
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="flex items-center w-full p-[15px_24px] text-[15px] text-black bg-[#f7f8fa] transition-colors duration-300"
                    >
                      Innovative Buildings
                      <span className="ml-auto flex items-center">
                        <i className="text-[15px]"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-[15px_24px] text-[15px] text-black bg-[#f7f8fa] transition-colors duration-300"
                    >
                      Scalable Projects
                      <span className="ml-auto flex items-center">
                        <i className="text-[15px]"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Quote Form --> */}
              <section className="w-full mt-[45px]">
                <div className="max-w-[1140px] mx-auto relative">
                  <div className="w-full p-[35px_20px] bg-[#f7f8fa] rounded-md mb-8">
                    {/* <!-- Heading --> */}
                    <h3 className="text-[19px] font-bold text-[#181b31] mb-3">
                      Get a Free Quote
                    </h3>

                    {/* <!-- Form --> */}
                    <form className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full h-[50px] rounded-md px-7 text-[14px] text-gray-400 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition"
                      />
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full h-[50px] rounded-md px-7 text-[14px] text-gray-400 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition"
                      />
                      <textarea
                        placeholder="Message"
                        className="w-full rounded-md px-7 py-3 text-[14px] text-gray-400 bg-white border border-gray-200 focus:outline-none focus:border-gray-400 transition resize-y"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full h-[50px] rounded-md bg-[#b99d7c] text-white text-[16px] font-medium transition hover:bg-[#a38768]"
                      >
                        Send message
                      </button>
                    </form>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Main */}
          <div className="md:w-3/4 text-black ">
            <div className="flex flex-wrap items-start w-full relative  transition duration-300">
              {/* <!-- Card Section --> */}
              <div className="w-full mb-5 relative">
                <div className="mb-16 relative transition duration-300">
                  <div className="relative pt-[443px] perspective-[1200px]">
                    {/* <!-- Image Wrapper --> */}
                    <div className="absolute inset-0 md:h-[443px] w-full transition-none">
                      <div className="absolute inset-0 h-[443px] w-full overflow-hidden rounded transition duration-700">
                        <figure className="md:h-[443px] w-full bg-cover bg-center">
                          <img
                            src="https://portfolioboxes.liquid-themes.com/wp-content/uploads/2022/02/portfolio-c8.jpeg"
                            className="w-full h-[443px] object-cover transition-transform duration-300 scale-[1.01]"
                          />
                        </figure>
                        {/* <!-- Gradient overlay --> */}
                        <div className="absolute inset-0 h-[553px] bg-gradient-to-b from-transparent to-[#181b31]"></div>
                      </div>

                      {/* <!-- Card Content --> */}
                      <div className="absolute inset-0 flex h-[443px] w-full items-end overflow-hidden rounded">
                        <div className="flex flex-col justify-between h-[443px] w-full p-8">
                          <div>
                            <h6 className="text-white text-[14px] font-bold leading-[21px] pb-3">
                              Interior Design
                            </h6>
                          </div>
                          <div>
                            <h2 className="text-[31px] font-semibold leading-[40px] text-white transition-colors duration-300">
                              Modern Architecture
                            </h2>
                            <p className="text-[16px] leading-[24px] text-white/55">
                              Through a unique combination of engineering,
                              construction and design disciplines and expertise.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Heading --> */}
              <div className="w-full mb-5 relative">
                <h3 className="text-[25px] font-bold leading-[30px] text-[#181b31] mb-6">
                  Data Analysis
                </h3>
              </div>

              {/* <!-- Paragraph --> */}
              <div className="w-full mb-5 relative">
                <p className="mb-4">
                  Take advantage of the experiential-learning opportunities
                  built into many programs. You can work in labs on and off
                  campus or even spend semesters overseas. One Construction
                  employs over 3,000 employees, the majority of whom are based
                  on project sites.
                </p>
              </div>

              {/* <!-- Paragraph --> */}
              <div className="w-full mb-5 relative">
                <p className="mb-4">
                  We embrace holistic development and support for employees with
                  the aim of being a first-choice employer within our sectors.
                  Through a unique combination of engineering, construction and
                  design disciplines and expertise.
                </p>
              </div>

              {/* <!-- Divider --> */}
              <div className="w-full my-5">
                <div className="flex py-4">
                  <span className="w-full border-t border-black/10"></span>
                </div>
              </div>

              {/* <!-- Another Heading --> */}
              <div className="w-full mb-5 relative">
                <h3 className="text-[25px] font-bold leading-[30px] text-[#181b31] mb-6">
                  Plan Benefits
                </h3>
              </div>

              {/* <!-- List Section --> */}

              <div className="grid grid-cols-1 md:grid-cols-2 w-full border-b border-gray-200 pb-2">
                <div className="transition-all border-r duration-300 box-border  flex relative w-full flex-wrap items-center content-center border-x md:border-x-0   border-[#ebebeb] flex-2/5">
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

                <div className="transition-all border-r duration-300 box-border flex relative w-full flex-wrap items-center content-center border-x md:border-x-0   border-[#ebebeb] flex-2/5">
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
            </div>

            {/* =======ACCORDION HERE =========== */}
            <div className="w-full flex flex-col gap-7 mt-10">
              <h3
                className="
                mt-0 mb-[12.5px] 
                align-middle 
                transition-colors duration-300 
                relative inline-block 
                text-[25px] leading-[30px] font-syne font-bold 
                text-[#181B31] 
                whitespace-normal
              "
              >
                Questions? You’re covered.
              </h3>

              {accordionData.map((item, index) => {
                const isOpen = index === activeIndex;
                return (
                  <div key={index} className="">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className={`w-full text-left px-5 py-4 flex items-center justify-between transition-colors rounded-sm cursor-pointer duration-300 ${
                        isOpen
                          ? "bg-[#2e2e2e] text-white"
                          : "bg-gray-100 text-black"
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
                          className="overflow-hidden "
                        >
                          <div className="py-4 text-[14.7px] font-semibold text-gray-700">
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
      <Footer />
    </div>
  );
};

export default New;
