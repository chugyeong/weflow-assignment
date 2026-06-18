import { useEffect, useRef } from "react";

const useSpotlightEffect = (selector = "[data-process-box]") => {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSpotlight = (event) => {
      const container = containerRef.current;
      if (!container) return;

      const targets = container.querySelectorAll(selector);

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();

        target.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
        target.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
      });
    };

    window.addEventListener("mousemove", updateSpotlight);

    return () => {
      window.removeEventListener("mousemove", updateSpotlight);
    };
  }, [selector]);

  return containerRef;
};

export default useSpotlightEffect;
