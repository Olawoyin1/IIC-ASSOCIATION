import Navbar from "../components/Navbar";
import Slider from "react-slick";

const Main = () => {

     const images = [
    "../../Images/portfolio-c2.jpg",
    "../../Images/portfolio-c3.jpg",
    "../../Images/portfolio-c4.jpg",
    "../../Images/portfolio-c6.jpg",
  ];


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
  };


  return (
    <div>
        <Navbar />
      <section>
        {/* ===============HERO IMAGE ============== */}
        <div className=" mt-[80px] ">
            <div className="relative flex h-screen  items-center justify-center flex-col overflow-hidden">
          {/* Background Image */}
          <img
            src="../../Images/main-hero.jpeg"
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          {/* Dark Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

          {/* Hero Content */}
          <h1 className="relative z-20 mt-0 mb-0 text-center transition-colors duration-300 inline-block box-border text-[93px] md:text-[103px] font-syne font-bold leading-[100.6px] md:leading-[123.6px] text-white whitespace-normal">
            Florida Condos
          </h1>
          </div>




        <section className="py-20 md:py-[100px]">
  <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-0 px-4 md:flex-row w-full">
    {/* Left Column */}
    <div className="w-full md:w-1/2 flex ">
      <div className="w-full flex flex-wrap items-start">
        <div className="w-full">
          <h3 className="text-[24px] leading-[28.8px] font-bold font-syne text-[#181B31] mb-3">
            Project Brief
          </h3>
        </div>
      </div>
    </div>

    {/* Right Column */}
    <div className="w-full md:w-1/2 flex ">
      <div className="w-full flex flex-wrap items-start">
        <div className="w-full mb-5">
          <p className="text-[18px] leading-[27px] text-black mb-[9px]">
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
          <div className="flex flex-wrap justify-between text-black">
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
    <img src="../../Images/portfolio-c2.jpg" className="h-140 w-full" alt="" />
</section>



<section className="py-[110px] md:py-[120px] relative">
  <div className="max-w-[1170px] mx-auto flex relative px-4">
    <div className="w-full flex flex-row flex-wrap">
      <div className="w-full px-4 md:px-[210px]">
        {/* Heading */}
        <div className="mb-5">
          <h3 className="text-[26px] font-bold leading-[31.2px] text-[#181B31] font-syne">
            Schematic Design
          </h3>
        </div>

        {/* Paragraph 1 */}
        <div className="mb-5">
          <p className="text-[18px] leading-[27px] text-black">
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



 <div className="w-full overflow-x-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-10 border-0">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full md:h-170 object-cover border-0 shadow-md outline-none focus:outline-none"
            />
          </div>
        ))}
      </Slider>
    </div>






    <section className="py-[140px] relative">
  <div className="max-w-[1170px] mx-auto relative flex">
    <div className="w-full flex flex-row flex-nowrap items-stretch">
      <div className="w-full flex flex-wrap px-4 md:px-[210.599px]">
        {/* Heading */}
        <div className="w-full mb-5">
          <div>
            <div className="relative">
              <h3 className="mt-0 mb-[13px] align-middle text-[26px] leading-[31.2px] font-bold text-[#181B31] font-syne inline-block transition-colors duration-300">
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




        </div>
      </section>
    </div>
  );
};

export default Main;
