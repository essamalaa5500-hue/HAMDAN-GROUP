import { useEffect, useRef, useState } from "react";

const variantClasses = {
  up: "opacity-0 translate-y-6",
  down: "opacity-0 -translate-y-6",
  fade: "opacity-0",
  zoom: "opacity-0 scale-95",
};

const activeVariantClasses = {
  up: "opacity-100 translate-y-0",
  down: "opacity-100 translate-y-0",
  fade: "opacity-100",
  zoom: "opacity-100 scale-100",
};

const getInitialReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const Reveal = ({
  children,
  variant = "up",
  delay = 0,
  duration = 650,
  threshold = 0.05,
  className = "",
  once = true,
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(getInitialReducedMotion);

  useEffect(() => {
    if (isVisible && once) return;

    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, threshold, isVisible]);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
      className={`transform transition-all ease-out will-change-transform ${
        isVisible
          ? activeVariantClasses[variant] || activeVariantClasses.up
          : variantClasses[variant] || variantClasses.up
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
