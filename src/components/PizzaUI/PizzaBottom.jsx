import React from "react";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import pizza4 from "../../assets/pizza4.png";
import pizza5 from "../../assets/pizza5.png";
import pizza6 from "../../assets/pizza6.png";

export default function PizzaBottom() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mb-10 mt-5">
      <div className="flex flex-col items-center">
        <img
          src={pizza1}
          alt="roasted-veggie"
          className="w-[120px] hover:scale-105 cursor-pointer  hover:transform hover:ease-out hover:duration-300 "
        />
        <p className="text-primary font-bold uppercase mt-1">Roasted Veggie</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pizza2}
          alt="Italian-special"
          className="w-[120px] hover:scale-105 cursor-pointer hover:transform hover:ease-out hover:duration-300"
        />
        <p className="text-primary font-bold uppercase mt-1">Italian Special</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pizza3}
          alt="chese-pepperoni"
          className="w-[120px] hover:scale-105 cursor-pointer hover:transform hover:ease-out hover:duration-300"
        />
        <p className="text-primary font-bold uppercase mt-1">
          Cheese Pepperoni
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pizza4}
          alt="chicken-magrinate"
          className="w-[120px] hover:scale-105 cursor-pointer hover:transform hover:ease-out hover:duration-300"
        />
        <p className="text-primary font-bold uppercase mt-1">
          Chicken Magrinate
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pizza5}
          alt="pepperoni-bomb"
          className="w-[120px] hover:scale-105 cursor-pointer hover:transform hover:ease-out hover:duration-300"
        />
        <p className="text-primary font-bold uppercase mt-1">Pepperoni Bomb</p>
      </div>
      <div className="flex flex-col items-center">
        <img
          src={pizza6}
          alt="classic-pepperoni"
          className="w-[120px] hover:scale-105 cursor-pointer hover:transform hover:ease-out hover:duration-300"
        />
        <p className="text-primary font-bold uppercase mt-1">
          Classic Pepperoni
        </p>
      </div>
    </div>
  );
}
