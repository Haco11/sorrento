import React from "react";
import pizza from "@/../public/assets/Pizzabg.jpg";
import Image from "next/image";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <div className="absolute w-full z-[-1] ">
        <Image
          src={pizza}
          alt="pizza-img"
          className=" object-cover w-full h-[80vh] z-[-1]"
        />
        <div className="absolute inset-0 bg-background opacity-30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-center">Pizzaria Sorrento</h1>
          <p className="text-xl text-center">The best pizza in town</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
