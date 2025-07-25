// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <div className="md:hidden z-50 bg-[#040404]">
        <Navbar />
      </div>

      <main className="relative w-full mx-auto h-screen top-[89px] md:top-0 z-20 flex items-center justify-center bg-white py-10 overflow-hidden">
        <section className="relative flex w-[95vw] h-screen overflow-auto md:w-[97vw] md:h-[95vh] items-center bg-[#C1C2C4]">
          {/* Navbar */}
          <div className="hidden md:flex text-white z-20">
            <Navbar textColor="text-white" backgroundColor="bg-transparent" />
          </div>

          <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl items-center justify-between mx-auto p-3 lg:p-0 overflow-auto">
            {/* ======================== LEFT SIDE ====================== */}
            <div>
              <div className="transition-all  w-full flex flex-wrap relative">
                {/* Divider Pattern */}
                <div className="w-full mb-5 relative">
                  <div className="flex py-6 relative">
                    <span className="w-40 min-h-[12px] bg-black mask-repeat-x mask-size-[12px_100%] mask-[url('data:image/svg+xml,%3Csvg xmlns=...')]" />
                  </div>
                </div>

                {/* Heading Block */}
                <div className="w-full  relative">
                  <div className="transition-al">
                    <div className="relative">
                      <div className="text-3xl md:text-[58px]  md:leading-[58px] font-bold  inline-block md:mb-[29px] transition-colors">
                        <h4>Collaboration,</h4>
                        <h4>work enquiries </h4>
                        <h4>
                          or just say{" "}
                          <span className="inline-block relative whitespace-nowrap transition-[width] duration-[0.8s] ease-[cubic-bezier(0.86,0,0.07,1)] will-change-[width]">
                            {/* Text Rotator */}
                            <span className="absolute top-0 left-0 right-0 opacity-0 animate-[lqdKeywordSlideOut_0.8s]">
                              hello
                            </span>
                            <span className="absolute top-0 left-0 right-0 opacity-0 animate-[lqdKeywordSlideOut_0.8s]">
                              hola
                            </span>
                            <span className="relative opacity-100 animate-[lqdKeywordSlideIn_0.8s]">
                              hallo
                            </span>
                          </span>
                        </h4>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section */}
                <section className="w-full relative block">
                  <div className="max-w-[1140px] mx-auto flex flex-wrap relative">
                    {/* Left Column - Address */}
                    <div className="w-1/2 relative flex min-h-[1px]">
                      <div className="transition-all p-2.5 w-full flex flex-wrap relative">
                        {/* Subheading */}
                        <div className="w-full mb-5 relative">
                          <div className="transition-all">
                            <div className="relative">
                              <p className="text-[13px] leading-[18px] inline-block mb-[26px] transition-colors">
                                Find Us
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Address */}
                        <div className="w-full relative">
                          <div className="transition-all">
                            <div className="relative">
                              <p className="text-[13px] leading-5 mb-[6.5px] inline-block transition-colors ">
                                290 Maryam Springs 260,
                                <br />
                                Courbevoie, Paris, France
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Social */}
                    <div className="w-1/2 relative flex min-h-[1px]">
                      <div className="transition-all p-2.5 w-full flex flex-wrap relative">
                        {/* Subheading */}
                        <div className="w-full mb-5 relative">
                          <div className="transition-all">
                            <div className="relative">
                              <p className="text-[13px] leading-[18px] inline-block mb-[26px] transition-colors">
                                Social
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Social Links */}
                        <div className="w-full relative">
                          <div className="transition-all">
                            <ul className="list-none p-0 m-0">
                              {["Pinterest", "Medium", "Instagram"].map(
                                (platform) => (
                                  <li
                                    key={platform}
                                    className="flex items-center text-[16px] relative"
                                  >
                                    <span className="text-[13px] leading-5">
                                      {platform}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* ============RIGHT SIDE ================== */}
            <div>
              <section className="w-full relative p-10 pt-10 pb-5 bg-[#FFE5C7] shadow-[0_0_60px_rgba(0,0,0,0.05)] transition-all rounded-lg">
                <div className="max-w-[1140px] mx-auto flex relative">
                  <div className="w-full flex flex-col min-h-[1px]">
                    <div className="w-full p-2.5 flex flex-wrap items-start">
                      <div className="w-full mb-5 relative">
                        <h2 className="text-4xl md:text-[32px] font-bold font-syne leading-[32px] text-[#181B30] inline-block mb-8">
                          Collaboration, work <br />
                          enquires or just say hello.
                        </h2>
                      </div>

                      {/* Contact Section */}
                      <section className="w-full relative block">
                        <div className="max-w-[1140px] mx-auto flex flex-col md:flex-row relative">
                          {/* Phone Button */}
                          <div className="w-full md:w-1/2 flex items-center justify-start p-0">
                            <a
                              href="#"
                              className="px-6 py-4 bg-[#242424] text-white text-[16px] font-medium rounded-full inline-flex items-center justify-center transition-all duration-300"
                            >
                              <span className="z-[3] relative">
                                12 236 7890
                              </span>
                              <span className="ml-4 flex items-center justify-center z-[3] relative">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="15"
                                  height="15"
                                  viewBox="0 0 15 15"
                                  className="w-[1em] max-h-4 fill-white"
                                >
                                  <path
                                    d="M6.68-4.57a.815.815,0,0,1,.566.234A.764.764,0,0,1,7.5-3.75V-.82a.784.784,0,0,1-.254.566A.784.784,0,0,1,6.68,0,13.943,13.943,0,0,1-.449-1.895,13.992,13.992,0,0,1-5.605-7.051,13.943,13.943,0,0,1-7.5-14.18a.784.784,0,0,1,.254-.566A.784.784,0,0,1-6.68-15h2.93a.764.764,0,0,1,.586.254.815.815,0,0,1,.234.566,9.326,9.326,0,0,0,.469,2.969.8.8,0,0,1-.2.859L-4.492-8.516A12.255,12.255,0,0,0,1.016-3.008L2.852-4.844a.8.8,0,0,1,.859-.2A9.326,9.326,0,0,0,6.68-4.57ZM5.82-7.5a5.612,5.612,0,0,0-1.7-4.121A5.612,5.612,0,0,0,0-13.32V-15a7.233,7.233,0,0,1,5.313,2.188A7.233,7.233,0,0,1,7.5-7.5ZM2.5-7.5a2.416,2.416,0,0,0-.723-1.777A2.416,2.416,0,0,0,0-10v-1.68a4.023,4.023,0,0,1,2.949,1.23A4.023,4.023,0,0,1,4.18-7.5Z"
                                    transform="translate(7.5 15)"
                                    fill="#fff"
                                  />
                                </svg>
                              </span>
                            </a>
                          </div>

                          {/* Address */}
                          <div className="w-full md:w-1/2 flex items-center justify-start p-0">
                            <p className="text-[13px] leading-5 mb-1.5">
                              290 Maryam Springs 260,
                              <br />
                              Courbevoie, Paris, France
                            </p>
                          </div>
                        </div>
                      </section>

                      {/* Footer Note */}
                      <div className="w-full mt-2.5">
                        <p className="text-[9px] italic text-black/30">
                          Interior design is the art and science of enhancing
                          the interiors.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
