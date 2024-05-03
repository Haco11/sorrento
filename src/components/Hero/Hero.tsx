import React from "react";
import pizza from "@/../public/assets/Pizzabg.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Foodora from "@/../public/assets/foodora.svg";
import Ubereats from "@/../public/assets/ubereats.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="relative h-[80vh]">
      <div className="absolute w-full h-full">
        <Image
          src={pizza}
          alt="pizza-img"
          priority={true}
          className=" object-cover w-full h-[80vh] "
        />
        <div className="absolute inset-0 bg-[#ffecca] opacity-30"></div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-center mb-4">
          Pizzaria Sorrento
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Online bästtlningar</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-center">
                Online bästtlningar
              </DialogTitle>
              <DialogDescription className="text-center">
                Du kan välja mellan Foodora eller Uber eats för online
                bästtlningar. Eller så kan du ringa oss på 08-646-30-40 för att
                hämra uppden själv.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-between items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.foodora.se/restaurant/v6sj/pizzeria-sorrento">
                <Image
                  alt="Foodora icon"
                  src={Foodora}
                  width={150}
                  height={50}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.ubereats.com/se/store/pizzeria-sorrento/L1faXXpDRuyHK7b3j993wQ">
                <Image
                  src={Ubereats}
                  alt="Ubereats icon"
                  width={80}
                  height={50}
                  className="dark:bg-white"
                />
              </a>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};
export default Hero;
