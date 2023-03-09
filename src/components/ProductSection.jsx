import React from "react";
import productGif from "../assets/product.gif";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";

export default function ProductSection() {
  return (
    <div className="bg-[#f6f2eb]">
      <div className="flex flex-col items-center md:flex-row md:justify-between px-20">
        <div className="md:grow flex flex-col items-center mt-10 md:mt-0 md:items-start">
          <p className="uppercase font-bold text-3xl text-primary tracking-wider">
            Introduction
          </p>
          <h3 className="md:text-8xl text-4xl text-center md:text-left font-black md:w-[600px] w-[300px] my-2 text-primary">
            MICROWAVABLE MAC & CHEESE
          </h3>
          <h4 className="md:w-[800px] w-[300px] md:text-lg text-justify text-primary">
            This delicious cup of golden goodness satisfies a craving only a
            microwavable mac is capable of. Cheesy? Check. Rich? Oh yeah. Quick?
            Your microwave just beeped. For when you’re simply too hungry to
            cook, or when you’ve got precisely 2 minutes before your next
            ~virtual~ meeting. Tell your pantry and microwave they’re about to
            get a whole lot more cheesy chickpea action.
          </h4>
          <div className="my-5 md:my-12 space-x-3 flex flex-col md:flex-row px-10 md:px-0 gap-3">
            <button className="bg-primary text-white py-3 md:px-24 font-bold uppercase text-xl hover:shadow-xl hover:opacity-75 hover:transition hover:ease-in-out hover:duration-300">
              Shop Pizza
            </button>
            <button className="bg-white border-4 border-primary text-primary py-2 px-24 font-bold uppercase text-xl hover:shadow-xl hover:bg-primary hover:text-white hover:transition hover:ease-in-out hover:duration-300">
              Find Store
            </button>
          </div>
        </div>
        <div className="md:w-[800px] w-screen">
          <img src={productGif} className="bg-cover" alt="gif" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex flex-col items-center grow py-10 border-2 border-primary">
          <h1 className="uppercase font-black text-primary text-5xl">Pasta</h1>
          <img
            src={product1}
            className="w-[450px] my-5 hover:scale-105 hover:transform hover:ease-out hover:duration-300"
            alt="pasta"
          />
          <button className="bg-primary text-white py-3 md:px-24 px-10 font-bold uppercase text-xl hover:shadow-xl hover:opacity-75 hover:transition hover:ease-in-out hover:duration-300">
            Shop Pasta
          </button>
        </div>
        <div className="flex flex-col items-center grow py-10 border-2 border-primary">
          <h1 className="uppercase font-black text-primary text-5xl">Pizza</h1>
          <img
            src={product2}
            className="w-[400px] my-5 hover:scale-105 hover:transform hover:ease-out hover:duration-300"
            alt="pizza"
          />
          <button className="bg-primary text-white py-3 md:px-24 px-10 font-bold uppercase text-xl hover:shadow-xl hover:opacity-75 hover:transition hover:ease-in-out hover:duration-300">
            Shop Pizza
          </button>
        </div>
        <div className="flex flex-col items-center grow py-10 border-2  border-primary">
          <h1 className="uppercase font-black text-primary text-5xl">
            Mac and cheese
          </h1>
          <img
            src={product3}
            className="w-[400px] my-5 hover:scale-105 hover:transform hover:ease-out hover:duration-300"
            alt="mac"
          />
          <button className="bg-primary text-white py-3 md:px-24 px-10 font-bold uppercase text-xl hover:shadow-xl hover:opacity-75 hover:transition hover:ease-in-out hover:duration-300">
            Shop Mac and cheese
          </button>
        </div>
        <div className="flex flex-col items-center grow py-10 border-2 border-primary">
          <h1 className="uppercase font-black text-primary text-5xl">Rice</h1>
          <img
            src={product4}
            className="w-[400px] my-5 hover:scale-105 hover:transform hover:ease-out hover:duration-300"
            alt="rice"
          />
          <button className="bg-primary text-white py-3 md:px-24 px-10 font-bold uppercase text-xl hover:shadow-xl hover:opacity-75 hover:transition hover:ease-in-out hover:duration-300">
            Shop Rice
          </button>
        </div>
      </div>
    </div>
  );
}
