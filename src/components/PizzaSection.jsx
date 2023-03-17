import React from "react";
import PizzaBottom from "./PizzaUI/PizzaBottom";
import PizzaTop from "./PizzaUI/PizzaTop";

export default function PizzaSection() {
  return (
    <div className="flex bg-[#f6f2eb] h-auto justify-center py-10">
      <div className="xl:flex">
        <div className="xl:mr-32">
          <PizzaTop />
          <PizzaBottom />
        </div>
        <div className="flex flex-col items-center xl:items-start xl:pt-20">
          <p className="uppercase font-bold text-primary">Introduction</p>
          <h3 className="xl:text-8xl text-4xl text-center xl:text-left font-black xl:w-[500px] my-2 text-primary">
            THE PIZZA MADE FROM CHICKPEAS.
          </h3>
          <h4 className="md:w-[500px] w-[300px] md:text-lg text-justify text-primary">
            Chickpeas. Pizza. Together at last. Just like our pasta, each one of
            our new crispy, doughy, delicious pizzas is packed with protein and
            fiber… and goes easier on the carbs. It’s everything you crave in a
            pizza, with everything you need in a dinner. So pizza night can now
            be every night.
          </h4>
          <div className="my-5 xl:my-12 space-x-3 flex flex-col xl:flex-row px-10 xl:px-0 gap-3">
            <button className="bg-primary text-white py-3 xl:px-24 font-bold uppercase text-xl hover:shadow-xl hover:opacity-75 hover:transition hover:ease-in-out hover:duration-300">
              Shop Pizza
            </button>
            <button className="bg-white border-4 border-primary text-primary py-2 px-24 font-bold uppercase text-xl hover:shadow-xl hover:bg-primary hover:text-white hover:transition hover:ease-in-out hover:duration-300">
              Find Store
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
