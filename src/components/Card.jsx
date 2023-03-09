import React from "react";

export default function Card({ name, quote }) {
  return (
    <div className="bg-white text-primary h-[400px] w-[300px] rounded-3xl border-2 border-white py-3 px-5 flex flex-col justify-center hover:scale-105">
      <p className="text-center text-lg">{quote}</p>
      <h3 className="text-center font-bold text-4xl mt-5">{name}</h3>
    </div>
  );
}
