import React from "react";
import img from "../assets/3d-casual-life-girl-working-working-on-computer.png";
import { BsMouse, BsPencil } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="lg:px-40 px-12">
      <article className="h-screen">
        <section className="flex flex-wrap md:justify-between justify-center items-center h-screen">
          <div className="text-4xl xl:text-6xl font-bold text-center md:text-left order-2 md:order-1 ">
            <div>Be Organized.</div>
            <div className="text-6xl xl:text-8xl">Everywhere.</div>
            <div className="text-base xl:text-lg py-3 text-gray-400">
              <div>"Say Goodbye to old paper and start a</div>
              <div>new life using Todos."</div>
            </div>
            <div className="order-3 flex items-center justify-center md:justify-start">
              <div className="text-base lg:text-lg py-3 text-gray-900 bg-orange-200/40 rounded p-4 font-bold">
                - Montano
              </div>
            </div>
          </div>
          <div className="order-1 mb-4 md:order-2 my-24 xl:my-0">
            <img src={img} className="lg:w-80" />
          </div>
        </section>
        <section className="hidden md:block">
          <div className="absolute left-1/2 bottom-0 text-4xl w-24 pb-20 motion-safe:animate-bounce">
            <BsMouse />
          </div>
        </section>
      </article>
      <article className="mt-4 h-screen">
        <div className="text-center lg:textl-left text-5xl xl:text-6xl font-bold">
          Key Functions
        </div>
        <section className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-orange-200/40 rounded-md relative flex flex-col items-center justify-center">
            <div className="absolute text-3xl bg-orange-200 rounded-full -top-5">
              <div className="p-2">
                <BsPencil className="p-1" />
              </div>
            </div>
            <div className="text-xl">Versatility</div>
          </div>
          <div className="bg-orange-200/40 rounded-md relative flex flex-col items-center justify-center">
            <div className="absolute text-3xl bg-orange-200 rounded-full -top-5">
              <div className="p-2">
                <BsPencil className="p-1" />
              </div>
            </div>
            <div className="text-xl">Versatility</div>
          </div>
          <div className="bg-orange-200/40 rounded-md relative flex flex-col items-center justify-center">
            <div className="absolute text-3xl bg-orange-200 rounded-full -top-5">
              <div className="p-2">
                <BsPencil className="p-1" />
              </div>
            </div>
            <div className="text-xl">Versatility</div>
          </div>
        </section>
      </article>
    </div>
  );
}
