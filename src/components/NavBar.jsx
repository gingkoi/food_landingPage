import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white h-[80px] flex justify-between text-primary font-poppin items-center border-b-primary border-b-4 top-0 fixed w-screen z-20">
      <div className="hidden md:block uppercase font-bold text-xl space-x-12 px-5">
        <a href="/" className=" hover:underline">
          Shop
        </a>
        <a href="/" className=" hover:underline">
          Recipes
        </a>
        <a href="/" className=" hover:underline">
          Where to buy
        </a>
      </div>
      <div>
        <h1 className="text-4xl font-black tracking-widest cursor-pointer mx-5">
          Cheelos
        </h1>
      </div>
      <div className="hidden md:flex items-center space-x-7 px-5">
        <a href="/" className="uppercase font-bold text-xl hover:underline">
          How-to
        </a>
        <a href="/" className="uppercase font-bold text-xl hover:underline">
          About
        </a>
        <a href="/" className="uppercase font-bold text-xl hover:underline">
          FAQs
        </a>
        <AiOutlineUser size={25} className="cursor-pointer" />
        <FiShoppingBag size={25} className="cursor-pointer" />
      </div>
      <div className="block md:hidden cursor-pointer mx-5" onClick={handleNav}>
        <GiHamburgerMenu size={30} />
      </div>
      <div
        className={
          nav
            ? "absolute z-10 top-0 bg-primary text-white h-[600px] w-full rounded-b-3xl flex flex-col justify-between items-center border-4 border-white ease-in-out duration-75"
            : "hidden"
        }
      >
        <div className="flex flex-col uppercase font-bold text-3xl items-center space-y-8 mt-10">
          <a href="/" className=" hover:underline">
            Shop
          </a>
          <a href="/" className=" hover:underline">
            Recipes
          </a>
          <a href="/" className=" hover:underline">
            Where to buy
          </a>
          <a href="/" className=" hover:underline">
            How-to
          </a>
          <a href="/" className=" hover:underline">
            About
          </a>
          <a href="/" className=" hover:underline">
            FAQs
          </a>
        </div>
        <IoIosCloseCircle size={55} className="my-10" onClick={handleNav} />
      </div>
    </div>
  );
}
