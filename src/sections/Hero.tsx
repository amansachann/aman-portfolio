import React from "react";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

const HeroSection = () => {
  return (
    <>
      <main className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        {/* Grain Pattern */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {/* Grain Pattern */}
        {/* Rings */}
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        {/* Rings */}
        <div className="container">
          <div className="flex flex-col items-center">
            <Image
              src={memojiImage}
              alt="Person peeking from behind laptop"
              className="size-[100px]"
            />
            <div className="bg-gray-950 border border-gray-800 py-1.5 px-4 rounded-lg inline-flex items-center gap-4">
              <div className="size-2.5 bg-green-500 rounded-full"></div>
              <div className="text-sm font-medium">
                Available for new projects
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-center mt-8 text-3xl md:text-5xl tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="text-white/60 text-center mt-4 md:text-lg">
              I specialize in transfroming designs into functional,
              high-performing web applications. Let&apos;s discuss your next
              project.
            </p>
          </div>

          <div className="flex flex-col items-center mt-8 gap-4 md:flex-row md:justify-center">
            <button className="inline-flex items-center bg-gray-900 border border-white/15 py-2.5 px-6 rounded-xl gap-2 text-md transition duration-300 hover:bg-white/20">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
            <button className="inline-flex items-center py-2.5 px-6 bg-white rounded-xl text-gray-900 gap-2 hover:bg-white/70 transition duration-300 border-white">
              <span>👋</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HeroSection;
