import { useState, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FaPinterestP, FaXTwitter, FaInstagram } from "react-icons/fa6";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.7 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};

const navItems = [
  { name: "HOME", key: "" },
  { name: "ABOUT", key: "about" },
  { name: "SERVICES", key: "services" },
  { name: "PROJECT 1", key: "project" },
  { name: "PROJECT 2", key: "project-2" },
  { name: "PROJECT 3", key: "project-3" },
];

const rightGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.8,
    },
  },
};

const rightGridItemVariant: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null!);
  const menuRef = useRef<HTMLDivElement>(null!);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLangToggle = () => setLangOpen((prev) => !prev);

  const handleMagnetic = (
    e: React.MouseEvent,
    ref: React.RefObject<HTMLDivElement>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const resetMagnetic = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <div className="absolute border-b md:border-b-0  border-gray-300 top-0 left-0 z-40 w-full h-[80px] flex justify-between items-center px-4 md:px-9">
      {/* Logo */}
      <Link className="text-lg font-bold" to="/">
        IIC ASSC
      </Link>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Menu Icon */}
        <div
          ref={menuRef}
          onMouseMove={(e) => handleMagnetic(e, menuRef)}
          onMouseLeave={() => resetMagnetic(menuRef)}
          style={{ cursor: "pointer" }}
          className="rotate-90 md:p-1"
          onClick={() => setMenuOpen(true)}
        >
          <IoMenu size={33} />
        </div>

        {/* Language Selector */}
        <div
          ref={langRef}
          className="relative hidden md:flex"
          onClick={handleLangToggle}
          style={{ cursor: "pointer" }}
        >
          <span
            onMouseMove={(e) => handleMagnetic(e, langRef)}
            onMouseLeave={() => resetMagnetic(langRef)}
            className="text-sm flex items-center p-4 gap-0 text-white rounded-full h-12 w-12 justify-center bg-[#262626] font-medium"
          >
            En <MdKeyboardArrowDown size={18} className="shrink-0"/>
          </span>

          {/* Dropdown */}
          <div
            className={`absolute right-0 top-full mt-3 w-40 list-none bg-white text-black shadow-md z-50 overflow-hidden transition-all duration-700 ease-in-out ${
              langOpen
                ? "max-h-40 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
          >
            <ul className="flex flex-col gap-2 p-4">
              <li className="text-sm hover:underline transition-all">French</li>
              <li className="text-sm hover:underline transition-all">
                Spanish
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed h-screen inset-0 bg-[#171616] pt-17 overflow-auto bgnav z-40 flex md:items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Close Icon */}
            <div
              className="absolute top-5 right-5 text-4xl cursor-pointer z-50"
              onClick={() => setMenuOpen(false)}
            >
              <GrClose color="#ffffff" />
            </div>

            <div className="absolute hidden md:block  border-t border-gray-600 pt-9 list-none bottom-10 left-0 w-full  ">
              <div className="max-w-5xl mx-auto flex-col md:flex-row gap-3 flex justify-between items-center">
              <div className="flex text-white gap-3 ">
                  <li className="w-12 h-12  transition rounded-full border border-gray-600 hover:border-gray-100"><a className="w-full h-full flex items-center justify-center " href=""><FaPinterestP /> </a></li>
                  <li className="w-12 h-12  transition rounded-full border border-gray-600 hover:border-gray-100"><a className="w-full h-full flex items-center justify-center " href=""><FaXTwitter /> </a></li>
                  <li className="w-12 h-12  transition rounded-full border border-gray-600 hover:border-gray-100"><a className="w-full h-full flex items-center justify-center " href=""><FaInstagram /> </a></li>
              </div>
              <p className="text-gray-200">Available for new projects in August 2021.</p>
              </div>
            </div>


            <div>
            <div className="max-w-5xl  w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-7 sm:px-2 md:gap-0 items-center">
              <div>
                {/* Nav Items */}
                <motion.ul
                  className="w-full text-xl sm:text-3xl space-y-5 font-light "
                  variants={containerVariant}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {navItems.map((item, index) => (
                    <motion.li key={item.key} variants={itemVariant}>
                      <Link
                        to={`/${item.key}`}
                        onClick={() => setMenuOpen(false)}
                        className={`hover:text-blue-400 tracking-[3px] cursor-pointer text-white transition ${
                          index === 0
                            ? "text-xl font-light"
                            : "text-xl font-light"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* =========RIGHT SIDE========= */}
              <div>
                <div className="flex flex-wrap items-center justify-center  w-full transition-all duration-300 relative">
                  <section className="w-full relative block">
                    <motion.div
                      className="flex flex-wrap relative"
                      variants={rightGridVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* <!-- Column 1 --> */}
                      <motion.div
                        variants={rightGridItemVariant}
                        className="w-1/2 relative flex min-h-[1px]"
                      >
                        <div className="flex flex-wrap w-full  relative transition-all duration-300">
                          <div className="w-full relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white/20 mb-[26px] leading-[18px] transition-colors duration-300">
                                  London
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-5 relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white mb-[6.5px] leading-[20px] transition-colors duration-300">
                                  +) 22 256 7890
                                  <br />
                                  architecture@hub.com
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-5 relative">
                            <div>
                              <div className="sm:h-10"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* <!-- Column 2 --> */}
                      <motion.div
                        variants={rightGridItemVariant}
                        className="w-1/2 relative flex min-h-[1px]"
                      >
                        <div className="flex flex-wrap w-full  relative transition-all duration-300">
                          <div className="w-full relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white/20 mb-[26px] leading-[18px] transition-colors duration-300">
                                  Info
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-5 relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white mb-[6.5px] leading-[20px] transition-colors duration-300">
                                  +) 22 256 7890
                                  <br />
                                  architecture@hub.com
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-5 relative">
                            <div>
                              <div className="sm:h-10"></div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* <!-- Column 3 --> */}
                      <motion.div
                        variants={rightGridItemVariant}
                        className="w-1/2 relative flex min-h-[1px]"
                      >
                        <div className="flex flex-wrap w-full relative transition-all duration-300">
                          <div className="w-full relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white/20 mb-[26px] leading-[18px] transition-colors duration-300">
                                  Find Us
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full mb-5 relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white mb-[6.5px] leading-[20px] transition-colors duration-300">
                                  290 Maryam Springs 260,
                                  <br />
                                  Courbevoie, Paris, France
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* <!-- Column 4 --> */}
                      <motion.div
                        variants={rightGridItemVariant}
                        className="w-1/2 relative flex min-h-[1px]"
                      >
                        <div className="flex flex-wrap w-full relative transition-all duration-300">
                          <div className="w-full relative">
                            <div>
                              <div className="relative">
                                <p className="text-xs text-white/20 mb-[26px] leading-[18px] transition-colors duration-300">
                                  Social
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="w-full relative">
                            <div>
                              <ul className="list-none m-0 p-0">
                                <li className="flex items-center text-base m-0 p-0 relative">
                                  <span className="text-xs leading-5 text-white">
                                    Pinterest
                                  </span>
                                </li>
                                <li className="flex items-center text-base m-0 p-0 relative">
                                  <span className="text-xs leading-5 text-white">
                                    Medium
                                  </span>
                                </li>
                                <li className="flex items-center text-base m-0 p-0 relative">
                                  <span className="text-xs leading-5 text-white">
                                    Instagram
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </section>

                </div>
              </div>
            </div>
            
            </div>
          </motion.div>
                
        )}

      </AnimatePresence>
    </div>
  );
};

export default Navbar;
