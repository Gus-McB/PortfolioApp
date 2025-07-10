import { useEffect, useState } from "react";
import plane from "../assets/plane.png";

const PLANE_IMG = plane;

export const PlaneBackground = () => {
  const [planes, setPlanes] = useState([]);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setShow(!document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    window.addEventListener("storage", checkTheme);

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

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
    const numberOfPlanes = 2;
    const newPlanes = [];
    for (let i = 0; i < numberOfPlanes; i++) {
      const direction = Math.random() < 0.5 ? "left-to-right" : "right-to-left";
      newPlanes.push({
        id: i,
        direction,
        y: Math.random() * 80,
        size: 120,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setPlanes(newPlanes);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {planes.map((plane) => {
        const isLeftToRight = plane.direction === "left-to-right";
        return (
          <img
            key={plane.id}
            src={PLANE_IMG}
            alt="plane"
            className={`plane ${isLeftToRight ? "animate-fly" : "animate-fly-reverse"}`}
            style={{
              width: `${plane.size}px`,
              height: "auto",
              left: 0,
              top: `${plane.y}%`,
              opacity: plane.opacity,
              animationDuration: `${plane.animationDuration}s`,
              position: "absolute",
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />
        );
      })}
    </div>
  );
};