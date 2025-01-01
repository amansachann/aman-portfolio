import Link from "next/link";
import React from "react";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Youtube",
    href: "#",
  },
  {
    title: "Twitter",
    href: "#",
  },
  {
    title: "Instagram",
    href: "#",
  },
  {
    title: "LinkedIn",
    href: "#",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/10 py-6 text-center flex flex-col gap-8 md:flex-row md:justify-between">
          <p className="text-white/40 text-sm">
            &copy; {currentYear}. All rights reserved.
          </p>
          <nav className="font-semibold text-sm flex flex-col gap-8 md:flex-row">
            {footerLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className="inline-flex items-center gap-2 hover:opacity-70 transition"
              >
                <span>{link.title}</span>
                <span>
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
