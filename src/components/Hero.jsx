import React from "react";

export default function Hero() {
  return (
    <div className="xl:flex bg-[#f6f2eb]">
      <div>
        <img
          src="https://images.pexels.com/photos/4773769/pexels-photo-4773769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="object-cover object-center md:h-[700px] md:border-r-4 border-b-4 border-primary"
          alt="pizza"
        />
      </div>
      <div className="grow flex flex-col items-center justify-center border-b-4 border-primary h-[350px] sm:h-auto">
        <h1 className=" text-primary font-black md:text-8xl md:tracking-widest text-5xl text-center sm:w-[700px] pt-5">
          DELICIOUS MEALS MADE EASY. AND CHICKPEAS’Y.
        </h1>
        <button className="bg-primary text-white py-6 px-7 my-5 text-2xl font-bold rounded-xl font-poppin hover:bg-white hover:text-primary hover:border-2 hover:border-primary animate-bounce hover:transition hover:ease-in-out hover:duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}
