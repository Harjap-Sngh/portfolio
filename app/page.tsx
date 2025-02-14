"use client";

import { SocialLinks } from "@/components/ui/social-links";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useState } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Globe } from "@/components/ui/globe";
import { CopyButton } from "@/components/ui/copy-button";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index); // Toggle visibility
  };
  return (
    <div>
      {/* Scroll Area */}
      <section className="">
        <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
          {/* Project 1 */}
          <div
            className={`border-b-2 border-brownShade mb-3 ${
              activeIndex === 0
                ? "animate-borderExpand"
                : "animate-borderContract"
            }`}
            onClick={() => {
              toggleContent(0);
            }}
          >
            <div className="flex justify-between">
              <span className="">Project 1</span>
              <span>↗</span>
            </div>
            <Link href="/">
              <div
                className={`${
                  activeIndex === 0 ? "" : "hidden"
                }flex justify-center items-center`}
              >
                {activeIndex === 0 && (
                  <Image
                    crossOrigin="anonymous"
                    alt="project1"
                    src={"./github.svg"}
                    width={200}
                    height={0}
                    className="rounded-2xl hover:scale-150 animate-fadeIn"
                  />
                )}
              </div>
            </Link>
          </div>
          {/* Project 2 */}
          <div
            className={`border-b-2 border-brownShade mb-3 ${
              activeIndex === 1
                ? "animate-borderExpand"
                : "animate-borderContract"
            }`}
            onClick={() => {
              toggleContent(1);
            }}
          >
            <div className="flex justify-between">
              <span className="">Project 2</span>
              <span>↗</span>
            </div>
            <Link href="/">
              <div
                className={`${
                  activeIndex === 1 ? "" : "hidden"
                } flex justify-center items-center`}
              >
                {activeIndex === 1 && (
                  <Image
                    crossOrigin="anonymous"
                    alt="project2"
                    src={"./images/css.svg"}
                    width={200}
                    height={0}
                    className="rounded-2xl hover:scale-150 animate-fadeIn"
                  />
                )}
              </div>
            </Link>
          </div>
        </ScrollArea>
      </section>
      {/* Social Links */}
      <section className=" border-4 border-gray-200 p-4 w-fit rounded">
        <SocialLinks
          socials={[
            { name: "Twitter", image: "/twitter.svg" },
            { name: "GitHub", image: "/github.svg" },
            { name: "LinkedIn", image: "/linkedin.svg" },
            { name: "Instagram", image: "/instagram.svg" },
          ]}
        />
      </section>
      {/* Icon Cloud */}
      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
      {/* Globe */}
      {/* <section className="border-4 border-gray-200 p-4 w-fit rounded">
        <Globe />
      </section> */}
      {/* Contact me */}
      <section className="border-4 border-gray-200 p-4 w-fit rounded bg-black">
        <CopyButton
          content="This is a very serious and important message. Thanks for copying it!"
          copyMessage="Copied very important message to clipboard!"
        />
      </section>
    </div>
  );
}
