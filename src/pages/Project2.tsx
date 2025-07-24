import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";

const sliderImages = [
  "/Images/sticky1.jpg",
  "/Images/sticky2.jpg",
  "/Images/sticky3.jpg",
  "/Images/sticky4.jpg",
];

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      onClick={onClick}
    >
      <FaArrowRight className="text-black" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
      onClick={onClick}
    >
      <FaArrowLeft className="text-black" />
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
  return (
    <div className="w-full  bg-gray-100">
    <Navbar />
      <div className="relative max-w-6xl  mx-auto top-[80px]  px-4">
        {/* Slider */}
        <div className="relative w-full overflow-hidden  mb-10">
          <Slider {...settings}>
            {sliderImages.map((src, idx) => (
              <div key={idx} className="w-full h-[80vh]">
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
        <div className="flex w-full gap-6">
          {/* Sidebar */}
          <div className="w-1/4 bg-white text-black p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Sidebar</h2>
            <ul className="space-y-2">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>

          {/* Main */}
          <div className="w-3/4 text-black p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Main Content</h2>
            <p>
              This is the main content section. You can add more here, such as project details,
              galleries, descriptions, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
