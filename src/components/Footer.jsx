import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="bg-primary text-white md:flex justify-between py-16 px-20">
      <div className="order-first md:order-last">
        <h3 className="text-white md:text-6xl text-3xl font-black">
          CHICKPEAS MAKE DELICIOUS EMAILS
        </h3>
        <input
          type="text"
          className="border-2 border-white bg-primary text-white placeholder-white font-bold py-2 px-2 w-full my-5"
          placeholder="YOUR EMAIL"
        />
        <div className="md:flex justify-between">
          <div className="flex items-center space-x-5">
            <AiOutlineInstagram size={40} className="cursor-pointer" />
            <AiOutlineTwitter size={40} className="cursor-pointer" />
            <AiFillFacebook size={40} className="cursor-pointer" />
            <p className="font-light text-xl">2023 ALL RIGHTS RESERVED</p>
          </div>
          <button className="bg-white text-primary py-2 px-5 rounded-lg text-xl font-bold hover:bg-red-700 hover:text-white hover:transition hover:ease-in-out hover:duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <div className="mt-3">
        <div className="bg-white h-1 w-full mb-3"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex flex-col space-y-1 font-medium text-xl">
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Pasta
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Pizza
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Mac & Cheese
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Rice
            </a>
          </div>
          <div className="flex flex-col space-y-1 order-first md:order-none font-medium text-xl">
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Recipes
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Where to buy
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Cooking tips
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Recyclabilty
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Contact us
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Faq
            </a>
          </div>
          <div className="flex flex-col space-y-1 font-medium text-xl">
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Careers
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Press
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Privacy Policy
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Term and conditions
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              Term and service
            </a>
            <a
              href="/"
              className="uppercase hover:underline hover:transition hover:text-yellow-300 hover:duration-300 "
            >
              CCPA Compliance
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
