import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="max-w-[1020px]">
      <div>
        <h4 className="font-magilio text-6xl text-blackish">
          H<span className="italic">ey there,</span>
        </h4>
        <h1 className="font-magilio text-8xl text-blackish">
          I'm Ahmed Zrouqui!
        </h1>
      </div>
      <div className="font-poppins my-4 text-md leading-8">
        <p className="my-1">
          Frontend developer, React enthousiast and Javascript engineer…
        </p>
        <p className="my-1">
          I'm also a games lover{" "}
          <span className="italic text-sm">would love to work on these</span>,
          Guitar player, and I worship{" "}
          <a
            href="https://fr.wikipedia.org/wiki/Blues"
            className="p-1 bg-lighter cursor-pointer"
            target="_blank"
          >
            Blues
          </a>{" "}
          music.
        </p>
        <p className="my-1">
          Based in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Morocco"
            className="p-1 bg-lighter cursor-pointer"
            target="_blank"
          >
            Morocco
          </a>
          , exactly{" "}
          <a
            href="https://en.wikipedia.org/wiki/Casablanca"
            className="p-1 bg-lighter cursor-pointer"
            target="_blank"
          >
            Casablanca
          </a>
          , where I spent my whole life. Got my bachelor degree on Computer
          Science in 2019, and since then, I only have been working as a
          Frontend React developer on{" "}
          <a
            href="https://www.upwork.com/freelancers/~011cd94423f7fc78c5"
            className="p-1 bg-lighter cursor-pointer"
            target="_blank"
          >
            Upwork
          </a>
          .
        </p>
        <p className="my-1">
          <Link to="/contact" className="p-1 bg-lighter cursor-pointer">
            Contact me
          </Link>
          , Let's create some cool stuff!
        </p>
        <p className="mt-8 italic font-light mb-2">Learn more about me on</p>
        <div className="flex flex-wrap gap-4 text-xl">
          <a
            href="https://www.instagram.com/_itsahm3d/"
            className="cursor-pointer hover:text-primary duration-200 ease-in-out"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/itsahmed_dev"
            className="cursor-pointer hover:text-primary duration-200 ease-in-out"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/ahmedZrouqui"
            className="cursor-pointer hover:text-primary duration-200 ease-in-out"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>

        <a
          href="https://www.buymeacoffee.com/ahmed.dev"
          target="_blank"
          className="block mt-6 underline font-light text-primary"
        >
          Buy me a cup of coffee.
        </a>
      </div>
    </div>
  );
}

export default Home;
