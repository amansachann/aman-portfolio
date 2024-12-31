import React from "react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import grainImage from "@/assets/images/grain.jpg";
import Link from "next/link";
import Image from "next/image";
import CheckCircle from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

const ProjectsSection = () => {
  return (
    <>
      <section className="pb-16 lg:py-24">
        <div className="container">
          <div className="text-center">
            <h3 className="uppercase font-semibold tracking-widest inline-flex gradient-text">
              Real-World Results
            </h3>
            <h1 className="font-serif mt-6 text-3xl md:text-5xl">
              Featured Projects
            </h1>
            <p className="text-white/60 mt-4 mx-auto max-w-md md:text-lg lg:text-xl">
              See how I transformed my concepts into engaging digital
              experiences.
            </p>
          </div>
          <div className="flex flex-col gap-20 mt-10 md:mt-20">
            {portfolioProjects.map((project) => (
              <div
                className="bg-gray-800 after:content-[''] after:absolute after:inset-0  after:rounded-3xl after:z-10 after:outline-2 after:outline after:-outline-offset-2 rounded-3xl relative bg-white/5 z-0 overflow-hidden after:outline-white/20 px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20"
                key={project.title}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{
                    backgroundImage: `url(${grainImage.src})`,
                  }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="inline-flex items-baseline gap-2 gradient-text uppercase font-bold tracking-widest text-sm">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="text-white/50  flex flex-col gap-4 mt-4">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex items-center gap-2 text-sm md:text-base"
                        >
                          <CheckCircle className="size-5 md:size-6" />
                          <span className="">{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={project.link}>
                      <button className="inline-flex items-center py-2.5 bg-white rounded-xl text-gray-900 gap-2 hover:bg-white/70 transition duration-300 border-white w-full md:w-auto md:px-6 justify-center mt-8">
                        <span className="font-semibold">View Live Site</span>
                        <ArrowUpRight className="size-4" />
                      </button>
                    </Link>
                  </div>
                  <div className="relative">
                    <Image
                      alt={project.title}
                      src={project.image}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
