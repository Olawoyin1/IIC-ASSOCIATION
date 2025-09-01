

const Footer = () => {
  return (
    <section 
//   className="fixed w-full z-10 block py-24 text-white/60 bg-no-repeat transition-all duration-300 bg-[#121B1D] " 
 className="fixed bottom-0 left-0 w-full z-0 block py-24 text-white/60 bg-no-repeat transition-all duration-300 bg-[#121B1D]"
//   style="background-image: url('https://staging-arc.liquid-themes.com/dark/wp-content/uploads/2022/03/logo-shape-1.svg'); background-position: 106% 170%;"
>
  <div className=" grid grid-cols-1 md:grid-cols-2 max-w-[1140px] gap-8 mx-auto">
    
    {/* <!-- Left Column --> */}
    <div className="transition-all duration-300  flex relative w-full flex-wrap content-start">
  {/* <!-- Heading --> */}
  <div className="relative w-full mb-5">
    <h2 className="text-[31px] leading-[37px] tracking-[0.31px] text-white font-syne font-bold inline-block relative mb-[46.5px]">
      We’d love to cooperate <br />
      to build amazing 
      <span className="inline-block relative whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.86,0,0.07,1)]">
        building
      </span>
    </h2>
  </div>

  {/* <!-- Subtext --> */}
  <div className="relative w-full mb-5">
    <p className="text-lg leading-7  inline-block relative">
      Through a unique combination of engineering, construction and design disciplines and expertise.
    </p>
  </div>

  {/* <!-- Contact Section --> */}
  <section className="w-full relative mt-[70px]">
    <div className="relative flex max-w-[1140px] mx-auto">
      
      {/* <!-- Call Office --> */}
      <div className="w-1/2 relative flex min-h-[1px]">
        <div className="flex flex-col w-full">
          <p className="uppercase text-[11px] font-bold leading-[22px] tracking-[1.35px] text-white/50 mb-4">
            Call our office
          </p>
          <p className="text-lg text-white mb-2.5">+(1) 123 256 7890</p>
        </div>
      </div>

      {/* <!-- Send Message --> */}
      <div className="w-1/2 relative flex min-h-[1px]">
        <div className="flex flex-col w-full">
          <p className="uppercase text-[11px] font-bold leading-[22px] tracking-[1.35px] text-white/50 mb-4">
            Send a message
          </p>
          <p className="text-lg text-white mb-2.5">architecture@hub.com</p>
        </div>
      </div>
    </div>
  </section>
</div>


    {/* <!-- Right Column --> */}
    <div className="relative flex  min-h-[1px] px-2">
      <div className="relative flex w-full flex-wrap">
        <div className="transition-all duration-300  flex relative w-full flex-wrap content-start">
  <section className="w-full relative">
    <div className="flex max-w-[1140px] mx-auto relative">

      {/* <!-- Left Column --> */}
      <div className="w-1/2 flex min-h-[1px] relative">
        <div className="flex flex-col w-full relative">

          {/* <!-- Company Heading --> */}
          <div className="w-full mb-5 relative">
            <h5 className="text-[11px] font-bold uppercase leading-[22px] tracking-[1.35px] text-white font-syne inline-block mb-[33px] transition-colors duration-300">
              Company
            </h5>
          </div>

          {/* <!-- Company Menu --> */}
          <ul className="m-0 p-0 list-none">
            <li className="mb-4 flex items-center w-full">
              <a href="https://portfolioboxes.liquid-themes.com/about/"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Company
              </a>
            </li>
            <li className="mb-4 flex items-center w-full">
              <a href="https://portfolioboxes.liquid-themes.com/about/"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Careers
                <span className="ml-3 px-[10.8px] py-[7.2px] rounded-full text-[12px] leading-[12px] text-[#AC8C66]">
                  2
                </span>
              </a>
            </li>
            <li className="mb-4 flex items-center w-full">
              <a href="https://portfolioboxes.liquid-themes.com/contact"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Press Media
              </a>
            </li>
            <li className="mb-4 flex items-center w-full">
              <a href="https://portfolioboxes.liquid-themes.com/services"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Services
              </a>
            </li>
            <li className="flex items-center w-full">
              <a href="https://portfolioboxes.liquid-themes.com/portfolio/services/"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Projects
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Right Column --> */}
      <div className="w-1/2 flex min-h-[1px] relative">
        <div className="flex flex-col w-full relative">

          {/* <!-- Follow Us Heading --> */}
          <div className="w-full mb-5 relative">
            <h5 className="text-[11px] font-bold uppercase leading-[22px] tracking-[1.35px] text-white font-syne inline-block mb-[33px] transition-colors duration-300">
              Follow Us
            </h5>
          </div>

          {/* <!-- Social Menu --> */}
          <ul className="m-0 p-0 list-none">
            <li className="mb-4 flex items-center w-full">
              <a href="#"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Pinterest
              </a>
            </li>
            <li className="mb-4 flex items-center w-full">
              <a href="#"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Twitter
              </a>
            </li>
            <li className="mb-4 flex items-center w-full">
              <a href="#"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Medium
              </a>
            </li>
            <li className="flex items-center w-full">
              <a href="#"
                 className="text-white/70 text-base flex items-center w-full transition-colors duration-300 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</div>

      </div>
    </div>

  </div>
</section>

  )
}

export default Footer
