import React from "react";
import Card from "./Card";

const people = [
  {
    id: 1,
    name: "John Cooks",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi nesciunt exercitationem ab, minus expedita repellendus ",
  },
  {
    id: 2,
    name: "Food King",
    quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "CookBook",
    quote:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi nesciunt exercitationem ab.",
  },
];

export default function Testimonial() {
  return (
    <div className="bg-primary h-auto text-white py-10">
      <h2 className="uppercase text-4xl md:text-5xl font-bold text-center">
        What our fans say
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-center my-6 mx-5 md:space-x-10 gap-4">
        {people.map((item, index) => (
          <Card key={index} name={item.name} quote={item.quote} />
        ))}
      </div>
    </div>
  );
}
