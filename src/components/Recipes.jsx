import React from "react";
import { useState } from "react";
import recipe1 from "../assets/recipes/recipe1.jpg";
import recipe2 from "../assets/recipes/recipe2.png";
import recipe3 from "../assets/recipes/recipe3.png";
import recipe4 from "../assets/recipes/recipe4.png";
import recipe5 from "../assets/recipes/recipe5.png";
import recipe6 from "../assets/recipes/recipe6.png";
import recipe7 from "../assets/recipes/recipe7.png";

const recipes = [
  "Red Sauce & Pesto Pizza with fresh mozzarella",
  "One pot creamy spinach & artichokes",
  "Kale, mushroom & ricotta pizza",
  "Spaghetti with marbled vodka sauce",
  "Pesto pizza with arugula, balsamic, and pine nuts",
  "Creamy vegan butternut squash shells",
  "White pizza with brussels sprouts, sage, & hot honey",
];

const pictures = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
];

export default function Recipes() {
  const handleMouse = (e) => {
    setDisplay(e);
  };
  const [display, setDisplay] = useState(1);
  return (
    <div className="md:flex justify-between h-full">
      <div className="border-2 border-r-primary border-b-primary w-full md:w-[50%] md:h-[980px] grow relative">
        <div className="h-full brightness-50 ">
          <img
            src={pictures[display]}
            alt=""
            className=" object-fill h-full w-full"
          />
        </div>
        <div className="absolute z-6 text-3xl md:text-6xl font-black top-10 left-5 text-white font-poppin">
          <p>EASY-TO-MAKE RECIPESS</p>
          <p>EASY-TO-EAT RESULT</p>
        </div>
      </div>
      <div className="grow flex flex-col">
        {recipes.map((recipe, index) => (
          <div
            className="bg-[#f6f2eb] uppercase text-primary font-black text-4xl py-12 text-center border-2 border-b-primary cursor-pointer hover:bg-primary hover:text-white hover:transition hover:ease-in-out hover:duration-300"
            id={index}
            onMouseOver={() => handleMouse(index)}
          >
            {recipe}
          </div>
        ))}
      </div>
    </div>
  );
}
