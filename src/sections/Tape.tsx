import React from "react";
import StarIcon from "@/assets/icons/star.svg";

const myQualities = [
  "INNOVATIVE",
  "RELIABLE",
  "PASSIONATE",
  "PROBLEM-SOLVER",
  "DETAIL-ORIENTED",
  "EFFICIENT",
  "COLLABORATIVE",
  "ADAPTABLE",
  "FOCUSED",
  "VERSATILE",
  "RESOURCEFUL",
  "DEDICATED",
  "RESULT-DRIVEN",
  "STRATEGIC",
  "TECH-SAVVY",
];

const TapeSection = () => {
  return (
    <>
      <section className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 uppercase font-extrabold  text-sm -rotate-3 -mx-1">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3">
              {myQualities.map((word) => (
                <div key={word} className="inline-flex gap-4 items-center">
                  <span>{word}</span>
                  <StarIcon className="size-6 -rotate-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TapeSection;
