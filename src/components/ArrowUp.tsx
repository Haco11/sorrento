"use client";

import { useState, useEffect } from "react";
import arrowUp from "../../public/assets/up-arrow.svg";
import Image from "next/image";

const ArrowUp = () => {
  const [showArrow, setShowArrow] = useState(false);
console.log(arrowUp)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 200;

      setShowArrow(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-10 transition-opacity duration-400 ${
        showArrow ? "opacity-100" : "opacity-0"
      }`}
    >
      <a
        href="#top"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#000000] shadow-md"
      >
        <Image src={arrowUp} alt="up arrow" className="w-5 h-7 text-white" />
      </a>
    </div>
  );
};

export default ArrowUp;
