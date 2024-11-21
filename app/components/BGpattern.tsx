"use client";

import { useEffect } from "react";
import useScrollDirection from "../../hooks/useScrollDirection";

const BackgroundPattern = () => {
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const patternElement = document.querySelector(".bg-pattern") as HTMLElement;
    if (patternElement) {
      patternElement.style.animationDirection =
        scrollDirection === "right" ? "normal" : "reverse";
    }
  }, [scrollDirection]);

  return (
    <svg className="bg-pattern">
      <defs>
        <pattern
          id="pattern"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <rect width="50" height="50" fill="#b3cde0" />
          <circle cx="25" cy="25" r="10" fill="#6497b1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern)" />
    </svg>
  );
};

export default BackgroundPattern;
