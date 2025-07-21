


import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);

  // const requestRef = useRef<number>();
  const requestRef = useRef<number>(0); // preferred

  const mouse = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const lastMoveTime = useRef(Date.now());

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      lastMoveTime.current = Date.now();
    };

    const animate = () => {
      const distX = mouse.current.x - circlePos.current.x;
      const distY = mouse.current.y - circlePos.current.y;

      circlePos.current.x += distX * 0.15;
      circlePos.current.y += distY * 0.15;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${circlePos.current.x - 20}px, ${circlePos.current.y - 20}px)`;
      }

      const timeSinceMove = Date.now() - lastMoveTime.current;

      if (dotRef.current) {
        if (timeSinceMove < 500) {
          const angle = Math.atan2(distY, distX);
          const orbitX = Math.cos(angle) * 2;
          const orbitY = Math.sin(angle) * 2;
          dotRef.current.style.transform = `translate(${mouse.current.x + orbitX}px, ${mouse.current.y + orbitY}px)`;
        } else {
          const centerX = circlePos.current.x;
          const centerY = circlePos.current.y;
          dotRef.current.style.transform = `translate(${centerX}px, ${centerY}px)`;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-[#f4a46ba1] rounded-full pointer-events-none z-30"
        style={{ transition: "transform 0.1s ease-out" }}
      />
      <div
        ref={dotRef}
        className="fixed -top-1 -left-1 w-[8px] h-[8px] bg-[#f4a46ba1] rounded-full pointer-events-none z-40"
        style={{ transition: "transform 0.2s ease-out" }}
      />
    </>
  );
};

export default CustomCursor;
