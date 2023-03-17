import React from "react";
import { useState } from "react";

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
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/ezgif.com-gif-maker_1_1_1200x.jpg?v=1605157750",
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/Banza_1110206763_1200x.jpg?v=1608581101",
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/Kale_Shroom_Ricotta_1200x.png?v=1602521749",
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/PlnSYF7E_1200x.jpg?v=1608572975",
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/Pesto_Arugula_1x1_9881662f-ab4d-44a2-91f6-e159ba8d11ae_1200x.png?v=1602521067",
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/Banza_1110200495_1200x.jpg?v=1608581598",
  "https://cdn.shopify.com/s/files/1/0611/1757/articles/Brussels_1x1_54cd2fca-4d1f-48ed-8407-88f31700f7a0_1200x.jpg?v=1602519851",
];

export default function Recipes() {
  const handleMouse = (e) => {
    setDisplay(e);
  };
  const [display, setDisplay] = useState(1);
  return (
    <div className="xl:flex justify-between h-full">
      <div className="border-2 border-r-primary border-b-primary w-full xl:w-[50%] xl:h-[980px] grow relative">
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
            key={index}
            onMouseOver={() => handleMouse(index)}
          >
            {recipe}
          </div>
        ))}
      </div>
    </div>
  );
}
