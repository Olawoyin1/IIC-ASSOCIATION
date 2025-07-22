// AnimatedRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// import PageWrapper from "../components/PageWrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Direct imports (no lazy loading)
import Home from "../pages/Home";
import CustomCursor from "../utils/CustomCursor";
import PageWrapper from "../components/PageWrapper";
import About from "../pages/About";
import Services from "../pages/Services";
import Project from "../pages/Project";


export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
    <CustomCursor />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Home />
            </motion.div>
          }
        />

        <Route
          path="/about"
          element={<PageWrapper><About /></PageWrapper>}
        />


        <Route
          path="/services"
          element={<PageWrapper><Services /></PageWrapper>}
        />

        <Route
          path="/project"
          element={<PageWrapper><Project /></PageWrapper>}
        />
        {/* <Route
          path="/journey"
          element={<PageWrapper><Journey /></PageWrapper>}
        />
        <Route
          path="/purpose"
          element={<PageWrapper><Purpose /></PageWrapper>}
        />
        <Route
          path="/last-generation"
          element={<PageWrapper><Generation /></PageWrapper>}
        />
        <Route
          path="/filosofi"
          element={<PageWrapper><Filosofi /></PageWrapper>}
        />
        <Route
          path="/socioloji"
          element={<PageWrapper><Socioloji /></PageWrapper>}
        />
        <Route
          path="/connect"
          element={<PageWrapper><Connect /></PageWrapper>}
        /> */}
      </Routes>
    </AnimatePresence>
    </>
  );
}
