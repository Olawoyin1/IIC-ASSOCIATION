import Navbar from "../components/Navbar";

const Services = () => {
  const careerItems = [
    "2020 — Senior Designer — Liquid Themes",
    "2019 — Product Designer — Apple",
    "2018 — Junior Designer — Google",
    "2015 — Graduated from Yale",
    "2011 — Graduated from High School",
  ];
  return (
    <>
      {/* Header */}
      <div className="">
        <Navbar backgroundColor="bg-[#EDEDED]" />
      </div>
      <section className="relative top-[80px]  w-full bg-[#EDEDED] flex flex-col">
        {/* Grid Layout */}
        <div className="flex-1 grid grid-rows-2 border-t border-l border-[#d3d4d6]">
          {/* First Row: Three Columns */}
          <div className="grid grid-cols-1  md:grid-cols-3 border-b border-[#d3d4d6]">
            {/*FITST COLUMN RIGHT HERE  */}
            <div className="border-r border-[#d3d4d6] p-7 md:p-1 ">
              <div className="transition-all box-border flex relative w-full flex-wrap content-start rounded-none border-t border-[#d3d4d6] md:p-16">
                {/* Heading */}
                <div className="box-border mb-5 relative w-full flex flex-row flex-nowrap justify-start items-stretch content-normal gap-0 basis-auto grow-0 shrink min-w-0 order-0 self-auto">
                  <div className="box-border transition-all">
                    <div className="relative box-border">
                      <h2 className="mt-0 mb-11 align-middle transition-colors relative inline-block box-border text-[22px] font-syne font-bold leading-[26.4px] text-[#181b31] whitespace-normal">
                        About Me
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Paragraph */}
                <div className="box-border relative w-full flex flex-row flex-nowrap justify-start items-stretch content-normal gap-0 basis-auto grow-0 shrink min-w-0 order-0 self-auto">
                  <div className="box-border transition-all">
                    <div className="relative box-border">
                      <p className="mt-0 mb-12 align-middle font-semibold transition-colors relative inline-block box-border leading-[26.88px] whitespace-normal text-[14.6px]">
                        My name is Roberto, I’m a freelance Branding & Digital Designer based by the valley in New York. I currently work at Liquid. I create brand identities, digital experiences, and print materials that communicate clearly achieve marketing goals, and look fantastic. beauty and technical performance. Our design starts and ends best-in-class experience strategy that builds brands.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECOND COLUMN RIGH HERE */}
            <div className=" md:border-r border-[#d3d4d6] p-7 md:p-1 flex flex-col">
              <div className="relative flex w-full flex-wrap content-start border-none md:p-16 transition-all">
                {/* Animated Border Frames */}
                

                {/* Heading */}
                <div className="relative w-full mb-5 flex flex-row flex-nowrap justify-start items-stretch content-normal gap-0 basis-auto grow-0 shrink min-w-0 order-0 self-auto">
                  <div className="transition-all box-border">
                    <div className="relative box-border">
                      <h2 className="mt-0 mb-11 align-middle transition-colors relative inline-block text-[22px] font-syne font-bold leading-[26.4px] text-[#181b31] whitespace-normal">
                        Experience
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative w-full flex flex-row flex-nowrap justify-start items-stretch content-normal gap-0 basis-auto grow-0 shrink min-w-0 order-0 self-auto">
                  <div className="transition-all box-border">
                    <div className="relative box-border">
                      <p className="mt-0 mb-12 align-middle transition-colors relative inline-block leading-[26.88px] whitespace-normal text-[14.6px] font-semibold">
                        I worked with{" "}
                        <u className="box-border mb-0">
                          Vodafone, Apple, Google, Amazon
                        </u>{" "}
                        and many more startups in San Francisco.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            {/* THIRD COLUMN RIGH HERE */}
            <div className="border-t md:border-t-0 border-[#d3d4d6] p-7 md:p-1 flex flex-col">
              <div className="relative flex w-full flex-wrap content-start  border-[#d3d4d6] md:p-16 transition-all">
                {/* Heading */}
                <div className="relative w-full mb-5 flex flex-row flex-nowrap justify-start items-stretch content-normal gap-0 basis-auto grow-0 shrink min-w-0 order-0 self-auto">
                  <div className="transition-all box-border">
                    <div className="relative box-border">
                      <h2 className="mt-0 mb-11 align-middle transition-colors relative inline-block text-[22px] font-syne font-bold leading-[26.4px] text-[#181b31] whitespace-normal">
                        Career
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Career List */}
                <div className="relative w-full flex flex-row flex-nowrap justify-start items-stretch content-normal gap-0 basis-auto grow-0 shrink min-w-0 order-0 self-auto">
                  <div className="min-h-[1px] transition-all box-border w-full">
                    <div className="relative transition-opacity box-border">
                      <ul className="m-0 p-0 list-none">
                        {careerItems.map((item, index) => (
                          <li
                            key={index}
                            className={`relative flex w-full flex-wrap text-[14.6px] font-semibold items-center box-border ${
                              index < careerItems.length - 1 ? "mb-7.5" : ""
                            }`} // mb-30px
                          >
                            <a
                              href="#"
                              className="relative flex w-full items-center text-[rgba(0,0,0,0.7)] no-underline transition-all"
                            >
                              {/* Span Placeholder if needed in future */}
                              <span className="mr-3 hidden items-center"></span>
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

          {/* Second Row: Two Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" md:border-r border-[#d3d4d6] p-7 md:p-1 flex flex-col justify-center">
              <div className="relative flex w-full flex-wrap content-start  border-[#d3d4d6] md:p-16 transition-all">
                {/* Decorative Borders */}

                {/* Section Title */}
                <div className="relative mb-5 w-full">
                  <div>
                    <div className="relative">
                      <h2 className="text-[22px] font-syne font-bold leading-[26.4px] text-[#181B31] mb-8">
                        Skills
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-3">
                  {/* Menu Column 1 */}
                  <div className="relative mb-0 w-full max-w-full pl-5 pb-[14px] border-l border-dashed border-[#bbb]">
                    <ul className="m-0 list-none p-0">
                      {[
                        "Brand Guide",
                        "Flayer Design",
                        "Video Production",
                        "Web Advertising",
                        "Illustrations",
                      ].map((item) => (
                        <li
                          key={item}
                          className="mb-[10px] text- flex w-full flex-wrap items-center"
                        >
                          <a
                            href="#"
                            className="flex text-sm font-semibold w-full items-center text-[rgba(0,0,0,0.7)] no-underline transition-all duration-300"
                          >
                            <span className="me-3 hidden"></span>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Menu Column 2 */}
                  <div className="relative mb-0 w-full max-w-full pl-5 pb-[30px] border-l border-dashed border-[#bbb]">
                    <ul className="m-0 list-none p-0">
                      {[
                        "Art Direction",
                        "Brand Strategy",
                        "Communication",
                        "Graphic Design",
                        "Print Design",
                        "Motion Graphics",
                      ].map((item) => (
                        <li
                          key={item}
                          className="mb-[10px] text-sm flex w-full flex-wrap items-center"
                        >
                          <a
                            href="#"
                            className="text-sm font-semibold flex w-full items-center text-[rgba(0,0,0,0.7)] no-underline transition-all duration-300"
                          >
                            <span className="me-3 hidden"></span>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Menu Column 3 */}
                  <div className="relative w-full max-w-full pl-5 pb-[30px] border-l border-dashed border-[#bbb]">
                    <ul className="m-0 list-none p-0">
                      {[
                        "Graphic Design",
                        "Print Design",
                        "Motion Graphics",
                      ].map((item) => (
                        <li
                          key={item}
                          className="mb-[10px] text-sm font-semibold flex w-full flex-wrap items-center"
                        >
                          <a
                            href="#"
                            className="flex w-full items-center text-[rgba(0,0,0,0.7)] no-underline transition-all duration-300"
                          >
                            <span className="me-3 hidden"></span>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl text-center font-semibold mb-2">
                image here
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
