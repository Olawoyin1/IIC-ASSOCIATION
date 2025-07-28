import Navbar from "../components/Navbar";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {  FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import { GrCheckmark } from "react-icons/gr";

const Main = () => {

     const images = [
    "../../Images/main-hero.jpeg",
    "../../Images/portfolio-c3.jpg",
    "../../Images/portfolio-c4.jpg",
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

  const testimonials = [
  {
    // name: "John Doe",
    quote: "This service exceeded my expectations in every way!",
  },
  {
    // name: "Jane Smith",
    quote: "Fantastic experience. Highly recommended!",
  },
  {
    // name: "Alex Johnson",
    quote: "Truly transformational. The team is amazing!",
  },
];


function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-0.5rem] md:left-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full "
    >
      <FaArrowLeftLong />
    </button>
  );
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-0.5rem] md:right-[-2.5rem] top-1/2 transform -translate-y-1/2 z-10  p-2 rounded-full "
    >
      <FaArrowRightLong />
    </button>
  );
}

  
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentSlide2, setCurrentSlide2] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
    const toggleAccordion = (index: number) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
    

  const settings2 = {
    dots: false,
    infinite: false, 
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
    beforeChange: (_: number, newIndex: number) => setCurrentSlide2(newIndex),
  };


  const settings = {
    centerMode: true,
    centerPadding: "10%", // shows 10% of previous and next slides
    slidesToShow: 1,
    infinite: false, // ✅ disables looping
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10px",
          slidesToShow: 1,
        },
      },
    ],
    
    beforeChange: (_: number, newIndex: number) => setCurrentSlide(newIndex),
  };


  return (

    <div>
        <Navbar />
      <section>
        {/* ===============HERO IMAGE ============== */}
        <div className=" mt-[80px] ">
            <div className="relative flex h-173 md:h-screen  items-center justify-center flex-col overflow-hidden">
          {/* Background Image */}
          <img
            src="../../Images/main-hero.jpeg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

          {/* Hero Content */}
          <h1 className="relative z-20 mt-0 mb-0 text-center transition-colors duration-300 inline-block box-border text-[93px] md:text-[103px] md:font-bold leading-[90.6px] md:leading-[123.6px] text-white whitespace-normal">
            Florida Condos
          </h1>
          </div>




        <section className="py-20 md:py-[100px]">
  <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-0 px-4 md:flex-row w-full">
    {/* Left Column */}
    <div className="w-full md:w-1/2 flex ">
      <div className="w-full flex flex-wrap items-start">
        <div className="w-full">
          <h3 className="text-[24px] leading-[28.8px] md:font-bold font-syne text-[#181B31] mb-3">
            Project Brief
          </h3>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full md:w-1/2 flex ">
      <div className="w-full flex flex-wrap items-start">
        <div className="w-full mb-5">
          <p className="text-[18px]  leading-[27px]  mb-[9px]">
            Since the 1980s, as the complexity of buildings began to increase, the field of architecture became multi-disciplinary with specializations.
          </p>
        </div>

        <div className="w-full mb-5">
          <p className="text-[18px] leading-[27px] text-black mb-[54px]">
            Through a unique combination of engineering, construction and design disciplines and expertise, Concor delivers world class infrastructure solutions to customers and stakeholders across a broad range of industry sectors.
          </p>
        </div>

        {/* Meta Info */}
        <div className="w-full">
          <div className="flex flex-wrap justify-between ">
            <div className="w-1/3 mb-4">
              <p className="opacity-35 leading-[26.4px]">Client</p>
              <p className="leading-[26.4px]">LiquidThemes</p>
            </div>

            <div className="w-1/3 mb-4">
              <p className="opacity-35 leading-[26.4px]">Role</p>
              <p className="leading-[26.4px]">
                Concept Design<br />
                Planning<br />
                Drawing Sketch<br />
                Construction
              </p>
            </div>

            <div className="w-1/3 mb-4">
              <p className="opacity-35 leading-[26.4px]">Date</p>
              <p className="leading-[26.4px]">2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
    <img src="../../Images/portfolio-c2.jpg" className=" md:h-140 w-full" alt="" />
</section>



<section className="py-[80px] md:py-[120px] relative">
  <div className="max-w-[1170px] mx-auto flex relative px-4">
    <div className="w-full flex flex-row flex-wrap">
      <div className="w-full md:px-[210px]">
        {/* Heading */}
        <div className="mb-5">
          <h3 className="text-[26px] md:font-bold leading-[31.2px] text-[#181B31] font-syne">
            Schematic Design
          </h3>
        </div>

        {/* Paragraph 1 */}
        <div className="mb-5">
          <p className="text-[18px] leading-[27px] ">
            Since the 1980s, as the complexity of buildings began to increase,
            the field of architecture became multi-disciplinary with
            specializations for each project type, technological expertise.
          </p>
        </div>

        {/* Paragraph 2 */}
        <div>
          <p className="text-[18px] leading-[27px] text-black">
            Through a unique combination of engineering, construction and
            design disciplines and expertise, Concor delivers world class
            infrastructure solutions to customers and stakeholders across a
            broad range of industry sectors.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



 <div className="relative w-full overflow-hidden">
  <div className="mb-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-10 border-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-50 md:h-170 object-cover border-0 shadow-md outline-none focus:outline-none"
            />
          </div>
        ))}
      </Slider>
      </div>


    </div>
      <div className="relative justify-center p-[10px] rounded-2xl px-3  left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-3">
                      {images.map((_, index) => {
                        const isActive = index === currentSlide;
                        return (
                          <motion.div
                            key={index}
                            className={`h-[6px] ${
                              isActive
                                ? "w-[24px] bg-black rounded-full"
                                : "w-[6px] bg-gray-900 rounded-full"
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






    <section className="py-20 md:py-[140px] relative">
  <div className="max-w-[1170px] mx-auto relative flex">
    <div className="w-full flex flex-row flex-nowrap items-stretch">
      <div className="w-full flex flex-wrap px-4 md:px-[210.599px]">
        {/* Heading */}
        <div className="w-full mb-5">
          <div>
            <div className="relative">
              <h3 className="mt-0 mb-[13px] align-middle text-[26px] leading-[31.2px] md:font-bold text-[#181B31]  inline-block transition-colors duration-300">
                The Solution
              </h3>
            </div>
          </div>
        </div>

        {/* Paragraph 1 */}
        <div className="w-full mb-5">
          <div>
            <div className="relative">
              <p className="mt-0 mb-[7.2px] text-[18px] leading-[27px] text-black inline-block transition-colors duration-300">
                It’s time to bring it all together. Nothing is more rewarding for me than making great work for clients with meaningful missions. Through a deep understanding of our audience’s makeup and motivations, we design digital experiences that connect with people.
              </p>
            </div>
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="w-full">
          <div>
            <div className="relative">
              <p className="mt-0 mb-[31.5px] text-[18px] leading-[27px] text-black inline-block transition-colors duration-300">
                We build and activate brands through cultural insight, strategic vision, and the power of emotion across every element of its expression
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>





<section>
  <div className="h-100 md:h-140 main-bg md:bg-cover bg-left  md:bg-center bg-no-repeat md:bg-fixed  ">
    
  </div>
</section>



<section className="block py-20 md:py-[140px] relative">
  <div className="max-w-[1170px] mx-auto flex relative">
    <div className="w-full flex relative min-h-[1px]">
      <div className="w-full px-4 md:px-[210.599px] flex flex-wrap relative transition-all duration-300">
        
        {/* Heading */}
        <div className="w-full mb-5 relative">
          <div className="transition-all duration-300">
            <div className="relative">
              <h3 className="inline-block text-[26px] leading-[31.2px] md:font-bold  text-[#181B31] mb-[26px]">
                Concept Design
              </h3>
            </div>
          </div>
        </div>

        {/* Paragraph 1 */}
        <div className="w-full mb-5 relative">
          <div className="transition-all duration-300">
            <div className="relative">
              <p className="inline-block text-[18px] leading-[27px] text-black mb-[18px]">
                Our eCommerce design starts and ends with a best-in-class experience strategy that builds brands and drives transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Paragraph 2 */}
        <div className="w-full relative">
          <div className="transition-all duration-300">
            <div className="relative">
              <p className="inline-block text-[18px] leading-[27px] text-black mb-[31.5px]">
                My job is to build your website so that it is functional and user friendly but at the same time attractive. My aim is to bring across your message and identity in the most creative way. It’s time to bring it all together. Nothing is more rewarding for me than making great work for clients with meaningful missions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>




<section>
    <img src="../../Images/slider1.jpg" className=" md:h-140 w-full" alt="" />
</section>




 <section className="w-full pt-16">
  <h2 className="mt-0 mb-6 text-center w-full inline-block text-[24px] leading-[28.8px]   font-bold text-[#181B31] transition-colors duration-300">
  Testimonials
</h2>

      <div className="max-w-4xl mx-auto px-6 relative">
        <Slider {...settings2}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="px-6">
              <div className="bg-white p-8  text-center">
                <p className="text-lg text-gray-700 italic mb-4">
                  “{testimonial.quote}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>


     <div className="relative justify-center p-[10px] rounded-2xl px-3  left-1/2 transform -translate-x-1/2 z-30 flex items-center gap-3">
                      {images.map((_, index) => {
                        const isActive = index === currentSlide2;
                        return (
                          <motion.div
                            key={index}
                            className={`h-[6px] ${
                              isActive
                                ? "w-[24px] bg-black rounded-full"
                                : "w-[6px] bg-gray-900 rounded-full"
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




<section className="max-w-4xl mx-auto py-17 px-4 md:px-0">
  <div>
    <h3 className="mt-0 mb-10 align-middle transition-colors duration-300 relative inline-block text-[25px] leading-[30px] font-syne font-bold text-[#181B31] whitespace-normal">
  Plan Benefits
</h3>
<div className="grid grid-cols-1 md:grid-cols-2">
  <ul className="p-0 m-0 list-none">
  {[
    "Global Data Analysis",
    "Immediate settlement",
    "Zero broker commission",
    "Guaranteed by the services",
    "Global Data Analysis",
    "Infrastructure solutions",
  ].map((text, idx) => (
    <li key={idx} className="w-full flex items-center relative mb-[15px]">
      <a
        href="#"
        className="w-full flex items-center text-[#383838] no-underline bg-transparent transition-colors duration-300"
      >
        <span className="me-3 flex items-center">
          <GrCheckmark />
        </span>
        {text}
      </a>
    </li>
  ))}
</ul>
  <ul className="p-0 m-0 list-none">
  {[
    "Global Data Analysis",
    "Immediate settlement",
    "Zero broker commission",
    "Guaranteed by the services",
    "Global Data Analysis",
    "Infrastructure solutions",
  ].map((text, idx) => (
    <li key={idx} className="w-full flex items-center relative mb-[15px]">
      <a
        href="#"
        className="w-full flex items-center text-[#383838] no-underline bg-transparent transition-colors duration-300"
      >
        <span className="me-3 flex items-center">
          <GrCheckmark />
        </span>
        {text}
      </a>
    </li>
  ))}
</ul>

</div>

  </div>
</section>











                    {/* =======ACCORDION HERE =========== */}
                                <div className="max-w-4xl mx-auto pb-17 flex px-4 md:px-0 flex-col gap-7 ">
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






<section className="px-4">
<div className="max-w-md mx-auto transition-all duration-300 bg-[#F7F8FA] rounded-[5px] p-[35px_20px] w-full flex flex-wrap content-start mb-[30px]  relative">
  {/* Heading */}
  <div className="w-full mb-[20px]">
    <h3 className="text-[19px] leading-[22.8px] text-[#181B31] font-syne font-bold whitespace-normal inline-block transition-colors duration-300">
      Send us a message
    </h3>
  </div>

  {/* Form */}
  <div className="w-full">
    <form action="#" method="post" noValidate className="w-full">
      <div className="space-y-[13px]">
        <input
          type="text"
          name="your-name"
          placeholder="Your name"
          required
          className="w-full h-[50px] px-7 rounded bg-white text-[#b7b9c4] text-[14px] leading-[21.92px] font-[din-2014] outline-none transition duration-300"
        />
        <input
          type="email"
          name="your-email"
          placeholder="Your email"
          required
          className="w-full h-[50px] px-7 rounded bg-white text-[#b7b9c4] text-[14px] leading-[21.92px] font-[din-2014] outline-none transition duration-300"
        />
        <textarea
          name="your-message"
          placeholder="Message"
          required
          className="w-full px-7 py-[14px] bg-white text-[#b7b9c4] text-[14px] leading-[21.92px] font-[din-2014] resize-vertical outline-none transition duration-300"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full h-[50px] mt-4 px-11 rounded border border-[#b99d7c] bg-[#b99d7c] text-white text-[16px] leading-[21.92px] font-[din-2014] flex items-center justify-center transition duration-300 hover:bg-opacity-90"
      >
        Send message
      </button>
    </form>
  </div>
</div>
</section>



        </div>
      </section>
    </div>
  );
};

export default Main;
