import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-background px-6 py-4 border-t mt-4 flex flex-col">
      <div className="container mx-auto flex-grow flex flex-col justify-between md:flex-row">
        <div className="flex flex-col md:flex-row justify-between items-start  md:space-x-10 w-full">
          <div>
            <h1 className="text-2xl font-bold">Pizzaria Sorrento</h1>
            <p>Störtloppsvägen 26, 129 47 Hägersten</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-4">Öppettider</h2>
            <p>Mån–Tor: 10:30–21:30</p>
            <p>Fredag: 10:30–22</p>
            <p>Lör: 11–22</p>
            <p>Sön: 11–21:30</p>
          </div>
        </div>
      </div>
      <div className="mt-4 container ">
        <p>
          &copy; {new Date().getFullYear()} Pizzaria Sorrento. Alla rättigheter
          reserverade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
