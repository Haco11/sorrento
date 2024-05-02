"use client";
import React, { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type Props = {};

const Navbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (show) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-5  fixed w-full transition-colors duration-300 ${
        isScrolled ? "bg-background border-b" : "bg-transparent border-none"
      } `}>
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-s font-medium sm:text-2xl">Pizzaria Sorrento</h2>
        <div className="flex items-center gap-2">
          <Phone className="size-5 hidden sm:block" />
          <a href="tel:08-646-30-40" className="ml-2">
            08-646-30-40
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
