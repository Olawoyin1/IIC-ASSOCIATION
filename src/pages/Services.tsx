import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <section className="min-h-screen w-full bg-[#EDEDED] flex flex-col">
      {/* Header */}
      <div className="py-10">
        <Navbar />
      </div>

      {/* Grid Layout */}
      <div className="flex-1 grid grid-rows-2 border-t border-l border-[#d3d4d6]">
        {/* First Row: Three Columns */}
        <div className="grid grid-cols-3 border-b border-[#d3d4d6]">
          <div className="border-r border-[#d3d4d6] p-12 ">
            <div className="w-full flex flex-wrap items-start  transition-all duration-300">
              {/* Heading Block */}
              <div className="w-full">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <h2 className="text-[22px] font-bold text-[#181B31] leading-[26.4px] mb-8 inline-block font-syne">
                      About Me
                    </h2>
                  </div>
                </div>
              </div>

              {/* Paragraph Block */}
              <div className="w-full">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <p className="inline-block leading-[26.88px] text-[#181B31]">
                      My name is Roberto, I’m a freelance Branding & Digital
                      Designer based by the valley in New York. I currently work
                      at Liquid. I create brand identities, digital experiences,
                      and print materials that communicate clearly, achieve
                      marketing goals, and look fantastic. Beauty and technical
                      performance. Our design starts and ends with a
                      best-in-class experience strategy that builds brands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-r border-[#d3d4d6] p-12 flex flex-col">
            <div className="w-full flex flex-wrap items-start  transition-all duration-300">
              {/* Heading Block */}
              <div className="w-full">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <h2 className="text-[22px] font-bold text-[#181B31] leading-[26.4px] mb-8 inline-block font-syne">
                      Experience
                    </h2>
                  </div>
                </div>
              </div>

              {/* Paragraph Block */}
              <div className="w-full">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <p className="inline-block leading-[26.88px] text-[#181B31]">
                      I worked with Vodafone, Apple, Google, Amazon and many
                      more startups in San Francisco.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 flex flex-col">
            <div className="w-full flex flex-wrap items-start transition-all duration-300">
              {/* Heading */}
              <div className="w-full mb-5 relative">
                <div className="transition-all duration-300">
                  <div className="relative">
                    <h2 className="text-[22px] font-bold text-[#181B31] leading-[26.4px] mb-4 inline-block font-syne">
                      Career
                    </h2>
                  </div>
                </div>
              </div>

              {/* Career List */}
              <div className="w-full  relative">
                <div className="transition-all duration-300 min-h-[1px]">
                  <div className="relative transition-opacity duration-300">
                    <ul className="list-none m-0 p-0">
                      {[
                        "2020 — Senior Designer — Liquid Themes",
                        "2019 — Product Designer — Apple",
                        "2018 — Junior Designer — Google",
                        "2015 — Graduated from Yale",
                        "2011 — Graduated from High School",
                      ].map((item, i) => (
                        <li
                          key={i}
                          className="w-full flex items-center mb-[18px] relative"
                        >
                          <a
                            href="#"
                            className="w-full flex items-center text-[rgba(0,0,0,0.7)] no-underline bg-transparent shadow-none transition-all duration-300"
                          >
                            {/* Placeholder span if needed later */}
                            <span className="me-3 hidden items-center" />
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
        <div className="grid grid-cols-2">
          <div className="border-r border-[#d3d4d6] p-12 flex flex-col justify-center">
            <div className="relative flex w-full flex-wrap items-start  transition-all duration-300">
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
                        className="mb-[10px] flex w-full flex-wrap items-center"
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
                        className="mb-[10px] flex w-full flex-wrap items-center"
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

                {/* Menu Column 3 */}
                <div className="relative w-full max-w-full pl-5 pb-[30px] border-l border-dashed border-[#bbb]">
                  <ul className="m-0 list-none p-0">
                    {["Graphic Design", "Print Design", "Motion Graphics"].map(
                      (item) => (
                        <li
                          key={item}
                          className="mb-[10px] flex w-full flex-wrap items-center"
                        >
                          <a
                            href="#"
                            className="flex w-full items-center text-[rgba(0,0,0,0.7)] no-underline transition-all duration-300"
                          >
                            <span className="me-3 hidden"></span>
                            {item}
                          </a>
                        </li>
                      )
                    )}
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
  );
};

export default Services;
