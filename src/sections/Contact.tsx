import React from "react";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const ContactSection = () => {
  return (
    <>
      <section className="py-16 pt-12 lg:py-24 lg:pt-20">
        <div className="container">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center relative z-0">
            {/* grain */}
            <div
              className="absolute inset-0 rounded-3xl opacity-5  -z-10"
              style={{
                backgroundImage: `url(${grainImage.src})`,
              }}
            ></div>
            {/* grain */}
            <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row ">
              <div className="md:text-left">
                <h2 className="font-serif text-2xl md:text-3xl">
                  Let&apos;s create something amazing together
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  Ready to bring next project to life? Let&apos;s connect and
                  discuss how I can help you achieve your goals.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="bg-gray-900 text-white inline-flex items-center gap-2 px-6 h-12 rounded-xl border border-gray-900">
                  <span className="font-semibold">Contact Me</span>
                  <span className="size-4">
                    <ArrowUpRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
