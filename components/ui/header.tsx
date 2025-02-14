import React from "react";
import { Download, Github, Linkedin, Mail, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnet from "./magnet";
import ShinyText from "./shinytext";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold font-montserrat text-[#e2dfd8]">
          Harjap Singh
        </h1>
        <div className="flex items-center gap-4">
          <Link href="./Harjap Resume.pdf" download>
            <Magnet padding={20} magnetStrength={10} className="">
              <div className="flex items-center gap-2 bg-[#0f0f12] text-[#e2dfd8] border-2 p-2 rounded-lg border-[#b5b5b5a4] px-4 hover:bg-zinc-800">
                <Download className="mr-2 h-4 w-4" />
                <ShinyText text="Download Resume" />
              </div>
            </Magnet>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
