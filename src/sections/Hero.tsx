import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import Stars from "@/assets/icons/star.svg";
import Sparkle from "@/assets/icons/sparkle.svg";

import { HeroOrbit } from "@/components/HeroOrbit";
export const HeroSection = () => {
  return (
    <div id="hero" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip ">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="hero-ring size-[620px] "></div>
        <div className="hero-ring size-[820px] "></div>
        <div className="hero-ring size-[1020px] "></div>
        <div className="hero-ring size-[1220px] "></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <HeroOrbit
            size={430}
            rotation={-14}
            shouldOrbit
            orbitDuration="30s"
            shouldStar
            starDuration="10s"
          >
            <Sparkle className="size-8 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="34s">
            <Sparkle className="size-5 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="36s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="28s">
            <Sparkle className="size-10 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="30s">
            <Stars className="size-12 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="41s">
            <Stars className="size-8 text-emerald-300" />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="25s">
            <div className="size-2 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="35s">
            <Sparkle className="size-14 text-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="34s">
            <div className="size-3 rounded-full bg-emerald-300/20" />
          </HeroOrbit>
          <HeroOrbit
            size={800}
            rotation={-70}
            shouldOrbit
            orbitDuration="40s"
            shouldStar
            starDuration="5s"
          >
            <Stars className="size-28 text-emerald-300" />
          </HeroOrbit>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Memoji on computer"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 inset-0 rounded-full absolute animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for Projects</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional Projects
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialized in transforming designs into functional,
            high-performing web applications. Let's discuss your next project.
          </p>
        </div>

        <div className="flex flex-col justify-center md:flex-row items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
            <span className="font-semibold">Explore my Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
