import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div className="">
      <div className="title mb-24">
        <h1 className="font-magilio text-6xl text-blackish">Projects 📦</h1>
        <div className="my-4 text-lg">
          <p className="my-1">
            I have mentioned some of the projects I worked on, however, most of
            my experiences are private, so I cannot share here!
          </p>
          <p className="my-1">
            You also can have a look at my{" "}
            <a
              href="https://github.com/ahmedZrouqui"
              className="cursor-pointer underline hover:text-primary duration-200 ease-in-out"
              target="_blank"
            >
              Github profile
            </a>
            .
          </p>
        </div>
      </div>
      <div className="project flex justify-between mb-24">
        <div className="">
          <a
            className="font-magilio text-6xl text-blackish mb-8 relative hover:underline"
            href="/"
            rel="nereferrer"
          >
            1 - Personal Portfolio (This website)
            <span className="top-[10px] right-[-30px] absolute hidden lg:block">
              <FaExternalLinkAlt className="text-lg" />
            </span>
          </a>
          <div className="font-poppins text-lg">
            <p className="my-1">
              This portfolio is itself a considerable project.
            </p>
            <p className="my-1">Technologies:</p>
            <ul className="list-disc ml-4 gap-1 flex flex-col">
              <li>React</li>
              <li>Typescript</li>
              <li>HTML5</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project flex justify-between mb-24">
        <div className="">
          <a
            className="font-magilio text-6xl text-blackish mb-8 relative hover:underline"
            href="https://Getmyphoenix.com"
            target="_blank"
            rel="nereferrer"
          >
            2 - Phoenix - Ecommerce
            <span className="top-[10px] right-[-30px] absolute hidden lg:block">
              <FaExternalLinkAlt className="text-lg" />
            </span>
          </a>
          <div className="font-poppins text-lg">
            <p className="my-1">
              This project is the biggest project I have worked on.
            </p>
            <p className="my-1">
              It's an Ecommerce website to promote a specific product.
            </p>
            <p className="my-1">Technologies:</p>
            <ul className="list-disc ml-4 gap-1 flex flex-col">
              <li>React - NextJS</li>
              <li>Redux</li>
              <li>Rest API</li>
              <li>Javascript</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project flex justify-between mb-24">
        <div className="">
          <a
            className="font-magilio text-6xl text-blackish mb-8 relative hover:underline"
            href="https://superb-gnome-c7d83b.netlify.app/"
            target="_blank"
            rel="nereferrer"
          >
            3 - Discord Landing Page Clone
            <span className="top-[10px] right-[-30px] absolute hidden lg:block">
              <FaExternalLinkAlt className="text-lg" />
            </span>
          </a>
          <div className="font-poppins text-lg">
            <p className="my-1">
              In this project, I cloned the original{" "}
              <a
                href="https://discord.com"
                className="p-1 bg-lighter cursor-pointer"
                target="_blank"
              >
                Discord
              </a>{" "}
              landing page.
            </p>
            <p className="my-1">Technologies:</p>
            <ul className="list-disc ml-4 gap-1 flex flex-col">
              <li>React</li>
              <li>Typescript</li>
              <li>HTML5</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="project flex justify-between">
        <div className="">
          <a
            className="font-magilio text-6xl text-blackish mb-8 relative hover:underline"
            href="https://suspicious-turing-38678b.netlify.app/"
            target="_blank"
            rel="nereferrer"
          >
            4 - Personal Card Website
            <span className="top-[10px] right-[-30px] absolute hidden lg:block">
              <FaExternalLinkAlt className="text-lg" />
            </span>
          </a>
          <div className="font-poppins text-lg">
            <p className="my-1">
              I have built this simple project for a client, it's a personal
              card for contact inquiries.
            </p>
            <p className="my-1">Technologies:</p>
            <ul className="list-disc ml-4 gap-1 flex flex-col">
              <li>React</li>
              <li>Javascript</li>
              <li>GSAP</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
