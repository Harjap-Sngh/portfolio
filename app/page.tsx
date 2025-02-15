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
    <div className="min-h-screen bg-[#101828] ">
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f12]/80 backdrop-blur-sm z-50 border-b border-[#1f1f23]">
        <Header />
      </header>
      <main className="pt-24 px-4 pb-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 grid-rows-[auto,auto,1fr] gap-6 md:gap-0 md:space-x-6">
          {/* Hi There */}
          <section className="col-span-12 md:col-span-6 lg:col-span-3 row-start-1 row-end-1 mb-6">
            <section className="col-span-12 md:col-span-3 row-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col text-left p-4 w-fit rounded bg-[#1E2433] border border-[#2E3447]"
              >
                <FadeText
                  className="text-4xl font-bold text-white"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text="Hi,"
                />
                <FadeText
                  className="text-4xl font-bold text-white"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.4 } },
                  }}
                  text="there!"
                />
              </motion.div>
            </section>
          </section>
          {/* About me */}
          <section className="col-span-12 md:col-span-4 row-span-1 row-start-1 row-end-1 mb-6 text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="h-full p-4 rounded-xl bg-[#1E2433] border border-[#2E3447]"
            >
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
            </motion.div>
          </section>
          {/* Contact me */}
          <section className="col-span-12 md:col-span-3 row-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-[#1E2433] border border-[#2E3447] flex flex-col justify-between"
            >
              <div className="p-5 bg-brownShade h-60 rounded-2xl flex flex-col justify-between font-sans text-textColor">
                <div className="flex justify-between">
                  <span className="text-xs font-light">
                    Have some
                    <br />
                    questions?
                  </span>
                  <div className="text-3xl animate-movement pr-2">↗</div>
                </div>
                <div className="text-3xl font-bold">
                  Contact <span className="italic">me</span>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 border-2 rounded-md p-2 text-sm">
                <CopyButton
                  content="singhharjap705@gmail.com"
                  copyMessage="Email-ID copied to clipboard!"
                />
                <span>singhharjap705@gmail.com</span>
              </div>
              <Toaster />
            </motion.div>
          </section>
          {/* Globe */}
          <section className="col-span-12 md:col-span-3 row-span-2">
            <div className="h-full rounded-xl bg-[#1E2433] border border-[#2E3447] p-4">
              <Globe />
              <div className="h-full flex items-center justify-center text-white/50"></div>
            </div>
          </section>
          {/* Icon Cloud */}
          <div className="col-span-12 md:col-span-3 row-span-2 rounded-xl bg-[#1E2433] border border-[#2E3447] overflow-hidden row-start-1">
            <IconCloud images={images} />
          </div>
          {/* Projects */}
          <section className="row-span-3 row-start-1 col-span-4 space-y-6 text-white">
            <ScrollArea className="h-[100%] w-[100%] rounded-md border p-4">
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
          <section className="col-span-12 lg:col-span-4 row-start-3 row-end-3 mb-4 text-white">
            <SocialLinks
              socials={[
                { name: "Twitter", image: "/twitter.svg" },
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
