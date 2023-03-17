import React from "react";

export default function Rice({ status }) {
  return (
    <div
      className={
        status === 3
          ? "bg-primary text-white md:pt-20 py-10 flex flex-col items-center"
          : "hidden"
      }
    >
      <h3 className="text-3xl xl:text-8xl font-black">HOW BANZA STACKS UP</h3>
      <h4 className="text-2xl xl:text-6xl font-black xl:my-10 my-5">
        BANZA VS AVERAGE RICE
      </h4>
      <div className="flex flex-col xl:flex-row xl:space-x-40 space-y-5">
        <div className="border-2 border-white rounded-full w-[200px] h-[200px] flex flex-col justify-center">
          <p className="text-8xl font-bold text-center">2X</p>
          <p className="uppercase font-medium text-xl text-center">protein</p>
        </div>
        <div className="border-2 border-white rounded-full w-[200px] h-[200px] flex flex-col justify-center">
          <p className="text-8xl font-bold text-center">5X</p>
          <p className="uppercase font-medium text-xl text-center">Fiber</p>
        </div>
        <div className="border-2 border-white rounded-full w-[200px] h-[200px] flex flex-col justify-center">
          <p className="text-8xl font-bold text-center">30%</p>
          <p className="uppercase font-medium text-xl text-center">
            Fewer net crabs
          </p>
        </div>
      </div>
      <button className="bg-white py-2 px-24 text-primary font-black my-10 uppercase hover:bg-red-700 hover:text-white hover:transition hover:ease-in-out hover:duration-300">
        Shop Now
      </button>
    </div>
  );
}
