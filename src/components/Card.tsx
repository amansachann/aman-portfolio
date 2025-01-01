import React, { PropsWithChildren } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

const Card = ({
  children,
   className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <div
        className={twMerge(
          "bg-gray-800 after:content-[''] after:absolute after:inset-0  after:rounded-3xl after:z-10 after:outline-2 after:outline after:-outline-offset-2 rounded-3xl relative bg-white/5 z-0 overflow-hidden after:outline-white/20 after:pointer-events-none",
          className
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default Card;
