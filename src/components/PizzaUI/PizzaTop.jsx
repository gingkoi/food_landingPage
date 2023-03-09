import React from "react";
import mainPizza from "../../assets/main_pizza.png";

export default function PizzaTop() {
  return (
    <div>
      <img
        src={mainPizza}
        alt="every-pizza"
        className="rotate-pizza md:w-[500px]"
      />
    </div>
  );
}
