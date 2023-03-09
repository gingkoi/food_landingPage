import React from "react";
import last1 from "../assets/last/last1.png";
import last2 from "../assets/last/last2.png";
import last3 from "../assets/last/last3.png";
import last4 from "../assets/last/last4.png";

export default function LastSection() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:py-20 py-8 px-20 bg-[#f6f2eb] space-y-10">
      <div className="pr-10">
        <p className="text-primary md:text-7xl text-5xl font-bold leading-10 text-center cursor-pointer hover:opacity-80">
          <span className="uppercase text-primary text-xl font-bold">
            Tag us on social
          </span>
          <br />@<span className="uppercase underline">Cheelos</span>
        </p>
      </div>
      <div className="flex space-x-16">
        <div className="border-2 border-primary w-[300px] h-[300px] hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img src={last1} alt="" className="object-fill w-full h-full" />
        </div>
        <div className="hidden md:block border-2 border-primary w-[300px] h-[300px] mt-10 hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img src={last2} alt="" className="object-fill w-full h-full" />
        </div>
        <div className="hidden md:block border-2 border-primary w-[300px] h-[300px] hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img src={last3} alt="" className="object-fill w-full h-full" />
        </div>
        <div className="hidden md:block border-2 border-primary w-[300px] h-[300px] mt-10 hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img src={last4} alt="" className="object-fill w-full h-full" />
        </div>
      </div>
    </div>
  );
}
