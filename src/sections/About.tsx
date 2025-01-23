'use client'
import { SectionHeader } from "@/components/sectionHeader";
import { Cards } from "@/components/Cards";
import BookImage from "@/assets/images/book-cover.png";
import MapImage from "@/assets/images/map.png";
import SmileMemoji from "@/assets/images/memoji-smile.png";
import Image from "next/image";
import JSIcon from "@/assets/icons/square-js.svg";
import Html5Icon from "@/assets/icons/html5.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JSIcon,
  },
  {
    title: "HTML",
    iconType: Html5Icon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Reading",
    emoji: "📕",
    left: "45%",
    top: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♀️",
    left: "5%",
    top: "65%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse into my World"
          description="Learn  more about Who I am, What I do, What Inspires me"
        ></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Cards className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="mx-auto mt-2 w-40 md:mt-0">
                <Image src={BookImage} alt="Book Cover" />
              </div>
            </Cards>
            <Cards className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Tool Box"
                description="Explore the technologies and tools i used to craft exceptional digital experriences."
                className=""
              />
              <ToolBoxItems
                Items={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                Items={toolBoxItems}
                className="mt-6 "
                itemsWrapperClassName=" animate-move-right [animation-duration:20s]"
              />
            </Cards>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Cards className="h-[320px]  flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1 " ref={constraintRef}>
                {hobbies.map((hobby) => (
                  
                  <motion.div
                    key={hobby.title}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints= {constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Cards>
            <Cards className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="Map Image"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full inset-0 -z-20 animate-ping-large"></div>
                <div className="absolute bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full inset-0 -z-10"></div>
                <Image
                  src={SmileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Cards>
          </div>
        </div>
      </div>
    </section>
  );
};
