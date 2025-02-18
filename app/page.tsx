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
import { motion } from "framer-motion";
import Aurora from "@/components/ui/aurora";

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

const techUsed = ["Next.js", "React", "TypeScript", "Dart", "Java", "Flutter"];

const images = slugs.map(
  (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
);

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleContent = (index: number) => {
    setActiveIndex(activeIndex === index ? 0 : index); // Toggle visibility
  };
  return (
    <div className="min-h-screen bg-[rgb(16,24,40)] ">
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0 opacity-35 h-screen">
        <Aurora colorStops={["#3A29FF", "#FF94B4", "#FF3232"]} speed={0.5} />
      </div>
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f12]/80 backdrop-blur-sm z-50 border-b border-[#1f1f23]">
        <Header />
      </header>
      <main className="pt-24 px-4 pb-8 mx-auto z-40">
        <div className="grid grid-cols-12 grid-rows-[350px,auto,auto] gap-4">
          {/* About me */}
          <section className="col-span-12 md:col-span-2 row-start-1 row-end-1 flex flex-row text-left rounded bg-[rgb(30,36,51)] border border-[#2E3447] w-[100%] h-[100%] p-7 gap-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              A passionate software developer with over 5 years of experience in
              building modern web applications. Specializing in React, Next.js,
              and full-stack development.
              {/* <DecryptedText
                text=" A passionate software developer with over "
                speed={100}
                maxIterations={20}
                characters="ABCD"
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
                text="Specializing in React, Next.js, and full-stack development."
                speed={25}
                maxIterations={20}
                characters="ABCD12"
                className="revealed"
                parentClassName="all-letters"
                encryptedClassName="encrypted"
                animateOn="view"
                sequential={true}
              /> */}
            </motion.div>
          </section>
          {/* Hi there */}
          <section className="col-span-12 md:col-span-3 row-start-1 flex flex-col text-left rounded bg-[rgb(30,36,51)] border border-[#2E3447] w-[100%] h-[100%] p-7 gap-7">
            <span className="text-7xl animate-wave transform-origin-[70-70] inline-flex">
              👋🏼
            </span>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <FadeText
                className="text-7xl font-bold text-white"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.2 } },
                }}
                text="Hi,"
              />
              <FadeText
                className="text-7xl font-bold text-white"
                direction="up"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text="there!"
              />
            </motion.div>
          </section>
          {/* Globe */}
          <section className="col-span-12 md:col-span-3 row-span-2 row-start-2">
            <div className="h-full rounded-xl bg-[#1E2433] border border-[#2E3447] p-4">
              <Globe />
            </div>
          </section>
          {/* Contact me */}
          <section className="col-span-12 md:col-span-2 row-span-2 row-start-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className=" h-[100%] rounded-xl bg-[#1E2433] border flex flex-col justify-between pt-6 pb-6"
            >
              <div className="bg-brownShade h-full rounded-2xl flex flex-col justify-between font-sans text-textColor">
                <div className="flex justify-between pl-6 pr-6">
                  <span className="text-xs font-light">
                    Have some
                    <br />
                    questions?
                  </span>
                  <div className="text-3xl animate-movement pr-2">↗</div>
                </div>
                <div className="text-3xl font-bold pl-6 pr-6">
                  Contact <span className="italic">me</span>
                </div>
              </div>
              <div className="flex mt-4 rounded-md p-2 text-sm gap-2">
                <CopyButton
                  content="singhharjap705@gmail.com"
                  copyMessage="Email-ID copied to clipboard!"
                />
                <span>singhharjap705@gmail.com</span>
              </div>
              <Toaster />
            </motion.div>
          </section>
          {/* Icon Cloud */}
          <div className="col-span-12 md:col-span-3 row-span-3 row-start-1 overflow-hidden h-full rounded-xl bg-[#1E2433] border border-[#2E3447] p-4">
            <IconCloud images={images} />
          </div>
          {/* Projects */}
          <section className="col-span-12 md:col-span-4 row-start-1 row-span-2 rounded bg-[rgb(30,36,51)] border border-[#2E3447] p-7">
            <ScrollArea className="h-[100%] w-[100%] rounded-md p-4">
              <div className="text-3xl font-bold mb-6">Projects</div>
              {/* Project 1 */}
              <div
                className={`border-b-2 border-brownShade ${
                  activeIndex === 0
                    ? "animate-borderExpand mb-20"
                    : "animate-borderContract mb-3"
                }`}
                onClick={() => {
                  toggleContent(0);
                }}
              >
                <div className="flex justify-between mb-5">
                  <span className="">Car Rental</span>
                  <span>↗</span>
                </div>
                <Link href="/">
                  <div
                    className={`${
                      activeIndex === 0 ? "" : "hidden"
                    } flex justify-center items-center flex-col h-fit`}
                  >
                    {activeIndex === 0 && (
                      <Image
                        crossOrigin="anonymous"
                        alt="project1"
                        src={"/car-rental.png"}
                        width={200}
                        height={0}
                        className="rounded-2xl hover:scale-120 animate-fadeIn w-full mb-3 "
                      />
                    )}
                    {activeIndex === 0 && (
                      <div className="animate-fadeIn">
                        {techUsed.map((tech) => (
                          <div
                            key={tech}
                            className="inline-block bg-[#8f2a1b] rounded-full px-2 py-1 text-xs font-semibold text-white mr-2 mb-2"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
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
          <section className="col-span-12 md:col-span-4 row-start-3 flex justify-around rounded bg-[rgb(30,36,51)] border border-[#2E3447] w-[100%] h-[100%] p-7">
            <SocialLinks
              socials={[
                { name: "GitHub", image: "/github.svg" },
                { name: "LinkedIn", image: "/linkedin.svg" },
                { name: "Instagram", image: "/instagram.svg" },
              ]}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
