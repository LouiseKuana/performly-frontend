import { useEffect, useRef } from "react";

export default function BackgroundGrid({ children }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 40;
      const y = (e.clientY / innerHeight) * 40;

      if (gridRef.current) {
        gridRef.current.style.backgroundPosition = `${x}px ${y}px, center`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={gridRef}
      className="background-stylized-grid min-h-screen w-full flex flex-col items-center justify-center"
    >
      {children}
    </div>
  );
}
