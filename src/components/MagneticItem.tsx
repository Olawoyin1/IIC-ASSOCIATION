// import { useRef } from "react";
// import { motion, useMotionValue, useSpring } from "framer-motion";

// export default function MagneticItem({ children }: { children: React.ReactNode }) {
//   const ref = useRef<HTMLDivElement>(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { stiffness: 300, damping: 20 });
//   const springY = useSpring(y, { stiffness: 300, damping: 20 });

//   const handleMouseMove = (e: React.MouseEvent) => {
//     const rect = ref.current?.getBoundingClientRect();
//     if (!rect) return;

//     const offsetX = e.clientX - rect.left - rect.width / 2;
//     const offsetY = e.clientY - rect.top - rect.height / 2;
//     x.set(offsetX * 0.3);
//     y.set(offsetY * 0.3);
//   };

//   const handleMouseLeave = () => {
//     x.set(0);
//     y.set(0);
//   };

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{ x: springX, y: springY }}
//       className="inline-block"
//     >
//       {children}
//     </motion.div>
//   );
// }
