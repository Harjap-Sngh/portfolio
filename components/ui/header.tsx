import React from "react";
import { Download, Github, Linkedin, Mail, Code, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold font-montserrat text-[#2a2826] dark:text-[#e2dfd8]">
          Harjap Singh
        </h1>
        <div className="flex items-center gap-4">
          <a href="./Harjap Resume.pdf" download>
            <Button className="bg-[#2a2826] hover:bg-[#1f1f23] dark:bg-[#e2dfd8] dark:hover:bg-[#ffffff] dark:text-[#0f0f12] text-white transition-colors">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
