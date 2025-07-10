import { useEffect, useState } from "react";

const PLANE_IMG =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwOg1fkMkqizvuYId2UkxTaVx2kkBbCzvKcA&s";

export const PlaneBackground = () => {
  const [planes, setPlanes] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Function to check theme and update show state
    const checkTheme = () => {
      setShow(!document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    // Listen for theme changes in other tabs
    window.addEventListener("storage", checkTheme);

    // Listen for theme changes in this tab
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Generate planes on mount and on resize
    const handleResize = () => generatePlanes();
    generatePlanes();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("storage", checkTheme);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  const generatePlanes = () => {
    const numberOfPlanes = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newPlanes = [];
    for (let i = 0; i < numberOfPlanes; i++) {
      newPlanes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 32 + 24,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setPlanes(newPlanes);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {planes.map((plane) => (
        <img
          key={plane.id}
          src={PLANE_IMG}
          alt="plane"
          className="plane animate-fly"
          style={{
            width: `${plane.size}px`,
            height: "auto",
            left: `${plane.x}%`,
            top: `${plane.y}%`,
            opacity: plane.opacity,
            animationDuration: `${plane.animationDuration}s`,
            position: "absolute",
            pointerEvents: "none",
            userSelect: "none",
          }}
          draggable={false}
        />
      ))}
    </div>
  );
};