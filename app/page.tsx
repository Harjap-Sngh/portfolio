"use client";
import Header from "@/components/ui/header";
import { SocialLinks } from "@/components/ui/social-links";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { useState } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { Globe } from "@/components/ui/globe";
import { CopyButton } from "@/components/ui/copy-button";
import { Toaster } from "@/components/ui/sonner";
import DecryptedText from "@/components/ui/decryptedText";
import { FadeText } from "@/components/ui/fade-text";

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
      <section className="border-4 border-gray-200 p-4 rounded">
        <Header />
      </section>
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
      <section className="border-4 border-gray-200 p-4 w-fit rounded">
        <Globe />
      </section>
      {/* Contact me */}
      <section className="border-4 border-gray-200 p-4 w-fit rounded bg-black">
        <CopyButton
          content="API_KEY_123456"
          copyMessage="API key copied to clipboard!"
        />
        <Toaster />
      </section>
      {/* About me */}
      <section className="border-4 border-gray-200 p-4 w-fit rounded bg-black text-white">
        <DecryptedText
          text=" A passionate software developer with over "
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
          sequential={true}
        />
        <br />
        <DecryptedText
          text=" 5 years of experience in
          building modern web applications. "
          speed={100}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
          sequential={true}
        />
        <br />
        <DecryptedText
          text="Specializing in React, Next.js, and
          full-stack development."
          speed={25}
          maxIterations={20}
          characters="ABCD1234!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
          sequential={true}
        />
      </section>

      <section>
        <div className="flex flex-col space-y-8 text-center">
          <FadeText
            className="text-4xl font-bold text-black dark:text-white"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.2 } },
            }}
            text="Hi, There!"
          />
        </div>
      </section>
    </div>
  );
}
