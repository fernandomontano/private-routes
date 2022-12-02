import React from "react";
import img from "../assets/3d-casual-life-girl-working-working-on-computer.png";

export default function Home() {
  return (
    <div className="mt-14 lg:mt-36 flex flex-wrap justify-center xl:gap-40  items-center">
      <div className="text-4xl xl:text-6xl font-bold text-center md:text-left my-3 lg:mb-10 order-2 md:order-1 ">
        <div>Be Organized.</div>
        <div className="text-6xl xl:text-8xl">Everywhere.</div>
        <div className="text-base xl:text-lg py-3 text-gray-400">
          <div>"Say Goodbye to old paper and start a</div>
          <div>new life using Todos."</div>
        </div>
        <div className="order-3 flex items-center justify-center md:justify-start">
          <div className="text-base lg:text-lg py-3 text-gray-900 bg-orange-200/40 rounded p-4  font-bold">
            - Montano
          </div>
        </div>
      </div>
      <div className="order-1 mb-4 md:order-2">
        <img src={img} />
      </div>
    </div>
  );
}
