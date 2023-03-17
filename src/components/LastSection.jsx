import React from "react";
export default function LastSection() {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:py-10 py-8 px-20 bg-[#f6f2eb] space-y-10">
      <div className="pr-10">
        <p className="text-primary xl:text-7xl text-5xl font-bold leading-10 text-center cursor-pointer hover:opacity-80">
          <span className="uppercase text-primary text-xl font-bold">
            Tag us on social
          </span>
          <br />@<span className="uppercase underline">Cheelos</span>
        </p>
      </div>
      <div className="flex xl:space-x-16 justify-center">
        <div className="border-2 border-primary w-[300px] h-[300px] hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0611/1757/files/banza-instagram-1_500x.jpg?v=1614347488"
            alt="pic1"
            className="object-fill w-full h-full"
          />
        </div>
        <div className="hidden xl:block border-2 border-primary w-[300px] h-[300px] mt-10 hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0611/1757/files/banza-instagram-2_500x.jpg?v=1614347488"
            alt="pic2"
            className="object-fill w-full h-full"
          />
        </div>
        <div className="hidden xl:block border-2 border-primary w-[300px] h-[300px] hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0611/1757/files/banza-instagram-3_500x.jpg?v=1614347488"
            alt="pic3"
            className="object-fill w-full h-full"
          />
        </div>
        <div className="hidden xl:block border-2 border-primary w-[300px] h-[300px] mt-10 hover:transform hover:scale-105 hover:ease-out hover:duration-300 cursor-pointer">
          <img
            src="https://cdn.shopify.com/s/files/1/0611/1757/files/banza-instagram-4_500x.jpg?v=1614347488"
            alt="pic4"
            className="object-fill w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
