import { useTheme } from "@/context/ThemeContext";
import { Moon, Sliders, Sun } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

const IconBox = ({ children }: { children?: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group bg-white border-2 rounded-xl text-slate-800 h-[60px] w-[60px] md:w-[60px] md:h-[60px]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        className="absolute bottom-[110%] rounded-xl overflow-hidden left-0 w-full bg-red-200"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "6.5rem" : 0 }} // Adjust height as needed
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col w-full h-full gap-2 p-2 justify-end items-center">
          <div
            onClick={() => setTheme("light")}
            className={`h-10 w-10  shrink-0 rounded-full bg-pink-400 grid place-items-center cursor-pointer ${
              theme === "light" ? "border border-dashed" : "border-none"
            }`}
          >
            <Sun weight="regular" size={"50%"} />
          </div>
          <div
            onClick={() => setTheme("dark")}
            className={`h-10 w-10  shrink-0 rounded-full bg-purple-400 grid place-items-center cursor-pointer ${
              theme === "dark" ? "border border-dashed" : "border-none"
            }`}
          >
            <Moon weight="regular" size={"50%"} />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute left-[110%] rounded-xl h-full bg-red-200 flex gap-2"
        initial={{ width: 0 }}
        animate={{ width: isOpen ? "9.5rem" : 0 }} // Adjust height as needed
        transition={{ duration: 0.3 }}
      >
        <div className="flex w-full h-full gap-2 p-2 justify-start items-center">
          <div className="h-10 w-10 rounded-full bg-pink-400"></div>
          <div className="h-10 w-10 rounded-full bg-purple-400"></div>
          <div className="h-10 w-10 rounded-full bg-cyan-200"></div>
        </div>
      </motion.div>
      <div className="grid place-items-center w-full h-full">
        <Sliders weight="regular" size={"50%"} />
      </div>
    </div>
  );
};

export default IconBox;
