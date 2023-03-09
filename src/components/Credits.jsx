import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHappyHeartEyes } from "react-icons/bi";
import { GiStrong } from "react-icons/gi";
export default function Credits() {
  return (
    <div className="bg-primary text-white py-12">
      <h2 className="text-2xl md:text-8xl font-black text-center">
        WHAT MAKES BANZA BETTER?
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-10 my-16">
        <div className=" text-center flex flex-col items-center">
          <AiOutlineHeart size={100} />
          <p className="text-2xl font-medium">MADE FROM</p>
          <p className="font-black text-6xl">CHICKPEAS</p>
          <p className="md:text-3xl text-2xl font-light">
            Better for your taste buds. And the <br /> planet. And, well...you!
          </p>
        </div>
        <div className="text-center flex flex-col items-center">
          <GiStrong size={100} />
          <p className="text-2xl font-medium">FULL OF</p>
          <p className="font-black md:text-6xl text-5xl">THE GOOD STUFF</p>
          <p className="md:text-3xl text-xl font-light">
            Protein? Tons. Fiber? Yup. Carbs? Less. <br /> Gluten? Nope.
          </p>
        </div>
        <div className=" text-center flex flex-col items-center">
          <BiHappyHeartEyes size={100} />
          <p className="text-2xl font-medium">MOST IMPORTANTLY…</p>
          <p className="font-black text-6xl">DELICIOUS</p>
          <p className="md:text-3xl text-2xl font-light">
            5 stars x 1000+ reviews = <br /> A lot of satisfied Banza-eaters.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-white border-4 border-primary text-primary py-2 px-24 font-bold uppercase text-xl hover:shadow-xl hover:bg-primary hover:text-white hover:transition hover:ease-in-out hover:duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
