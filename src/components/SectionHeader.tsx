import React from "react";

const SectionHeader = ({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow: string;
}) => {
  return (
    <>
      <div className="text-center">
        <h3 className="uppercase font-semibold tracking-widest inline-flex gradient-text">
          {eyebrow}
        </h3>
        <h1 className="font-serif mt-6 text-3xl md:text-5xl">{title}</h1>
        <p className="text-white/60 mt-4 mx-auto max-w-md md:text-lg lg:text-xl">
          {description}
        </p>
      </div>
    </>
  );
};

export default SectionHeader;
