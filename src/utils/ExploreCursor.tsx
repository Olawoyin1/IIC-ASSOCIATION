// import { useEffect, useState } from "react";

// const ExploreCursor = ({ visible }: { visible: boolean }) => {
//   const [pos, setPos] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className="custom-cursor z-50"
//       style={{
//         left: `${pos.x}px`,
//         top: `${pos.y}px`,
//         opacity: visible ? 1 : 0,
//       }}
//     >
//       Explore
//     </div>
//   );
// };

// export default ExploreCursor;


// components/CustomCursor.tsx
import { useEffect, useState } from "react";

const ExploreCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoveringImage, setHoveringImage] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleEnter = () => setHoveringImage(true);
    const handleLeave = () => setHoveringImage(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll(".hover-image").forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll(".hover-image").forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-[9999] transition-transform duration-100 ease-out`}
      style={{
        transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
      }}
    >
      <div
        className={`w-[100px] h-[100px] rounded-full bg-white border border-black flex items-center justify-center text-black text-sm font-medium transition-opacity duration-300 ${
          hoveringImage ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
      >
        Explore
      </div>
    </div>
  );
};

export default ExploreCursor;
