"use client";

import { useEffect, useState } from "react";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">(
    "right"
  );
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setScrollDirection("right"); // Scrolling down
      } else {
        setScrollDirection("left"); // Scrolling up
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return scrollDirection;
};

const BackgroundPattern = () => {
  const scrollDirection = useScrollDirection();
  const [positionX, setPositionX] = useState(0);

  useEffect(() => {
    const main = document.getElementById("main");
    const handleBackgroundMovement = () => {
      const firstChild = document
        .getElementById("mainchild")!
        .getBoundingClientRect().y;
      console.log(firstChild, document.body.clientTop);
      const dir = scrollDirection === "left" ? -1 : 1;
      setPositionX(dir * firstChild); // Control movement speed
    };

    main!.addEventListener("scroll", handleBackgroundMovement);
    return () => window.removeEventListener("scroll", handleBackgroundMovement);
  }, [scrollDirection]);

  useEffect(() => {
    console.log(positionX);
    document.getElementById("bgDiv")!.style.left = `${positionX}px`;
  }, [positionX]);

  return null;
};

export default BackgroundPattern;
