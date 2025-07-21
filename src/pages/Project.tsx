import Navbar from "../components/Navbar";


const images = [
  "/Images/sticky1.jpg",
  "/Images/sticky2.jpg",
  "/Images/sticky3.jpg",
  "/Images/sticky4.jpg",
];

const Project = () => {
  return (
    <section className="w-full bg-white py-20">
        <Navbar />
      <div className="mx-auto flex flex-col lg:flex-row g">
        {/* Left column - Images */}
        <div className="w-full lg:w-5/12 flex flex-col gap-6">
          {images.map((src, index) => (
            <div key={index} className="w-full overflow-hidden">
              <img
                src={src}
                alt={`Project image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right column - Sticky Text */}
        <div className="w-full lg:w-7/12 mt-30">
          <div className="sticky top-20">
            <div className="max-w-xl mx-auto">
              {/* Category */}
              <h6 className="text-[15px] font-medium text-[#7e7e7e] font-[Syne] mb-2">
                Photography
              </h6>

              {/* Title */}
              <h1 className="text-[52px] leading-[62px] font-bold text-[#181b31] font-[Syne] mb-4">
                Brooklyn Residence
              </h1>

              {/* Description */}
              <p className="text-[18px] leading-[27px] text-black mb-6">
                Interior design is the art and science of enhancing the
                interiors, sometimes including the exterior, of a space or
                building, to achieve a healthier and more aesthetically pleasing
                environment.
              </p>

              {/* Meta Info */}
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
    </section>
  );
};

export default Project;
