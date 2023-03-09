import React from "react";
import Pasta from "./MidSection/Pasta";
import Mac from "./MidSection/Mac";
import { useState } from "react";
import Rice from "./MidSection/Rice";
import Pizza from "./MidSection/Pizza";

export default function MidSection() {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <div>
      <Pasta status={toggle === 1 ? 1 : 0} />
      <Mac status={toggle === 2 ? 2 : 0} />
      <Rice status={toggle === 3 ? 3 : 0} />
      <Pizza status={toggle === 4 ? 4 : 0} />
      <div className="bg-primary text-white pb-10 md:flex md:justify-around grid grid-cols-2 text-center gap-3">
        <div
          className={
            toggle === 1
              ? "underline font-black uppercase text-4xl cursor-pointer text-[#fadf31] hover:underline"
              : "font-black uppercase text-4xl cursor-pointer hover:text-neutral-200 hover:underline"
          }
          onClick={() => toggleTab(1)}
        >
          Pasta
        </div>
        <div
          className={
            toggle === 2
              ? "underline font-black uppercase text-4xl cursor-pointer text-[#fadf31] hover:underline"
              : "font-black uppercase text-4xl cursor-pointer hover:text-neutral-200 hover:underline"
          }
          onClick={() => toggleTab(2)}
        >
          Mac
        </div>
        <div
          className={
            toggle === 3
              ? "underline font-black uppercase text-4xl cursor-pointer text-[#fadf31] hover:underline"
              : "font-black uppercase text-4xl cursor-pointer hover:text-neutral-200 hover:underline"
          }
          onClick={() => toggleTab(3)}
        >
          Rice
        </div>
        <div
          className={
            toggle === 4
              ? "underline font-black uppercase text-4xl cursor-pointer text-[#fadf31] hover:underline"
              : "font-black uppercase text-4xl cursor-pointer hover:text-neutral-200 hover:underline"
          }
          onClick={() => toggleTab(4)}
        >
          Pizza
        </div>
      </div>
    </div>
  );
}
