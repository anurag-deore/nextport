"use client";
import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  ThreadsLogo,
  Moon,
  PaperPlaneRight,
  CardsThree,
  Sun,
} from "@phosphor-icons/react";
import Image from "next/image";
import BackgroundPattern from "../hooks/useScrollDirection";
import RetroGrid from "@/components/ui/retro-grid";
import { FlickeringGrid } from "@/components/ui/flickergrid";
import GridPattern from "@/components/ui/animated-grid-pattern";
import { Bricolage_Grotesque } from "next/font/google";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { DotPattern } from "@/components/ui/dot-pattern";
import localFont from "next/font/local";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import ThemeWrapper from "./components/ThemeWrapper";
import IconBox from "@/components/Icon-box";
import IconLink from "@/components/Icon-link";

const bricolageFont = Bricolage_Grotesque({ subsets: ["latin"] });
const fungisFont = localFont({ src: "./fonts/FUNGIS Regular.woff" });
const bilmaFont = localFont({ src: "./fonts/Bilma.ttf" });

const pastelColors = [
  "#FFB3BA", // Light Pink
  "#FFDFBA", // Light Peach
  "#FFFFBA", // Light Yellow
  "#BAFFC9", // Light Mint
  "#BAE1FF", // Light Blue
  "#FFC3A0", // Light Coral
  "#FF677D", // Light Rose
  "#D4A5A5", // Light Mauve
  "#392F5A", // Light Purple
  "#6A0572", // Light Violet
];

export default function Home() {
  const squares = Array.from({ length: 20 }); // Create an array with 9 elements
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = (): void => {
    console.log("handleToggleTheme");
    toggleTheme();
  };

  return (
    <main
      className={`h-dvh max-h-screen w-screen relative overflow-hidden dark:bg-zinc-900 bg-zinc-50`}
      style={
        {
          // background: "linear-gradient(45deg, #c33764, #1d2671)",
          // backgroundImage:
          //   "url('https://img.freepik.com/premium-photo/twilight-sky-transitioning-into-deep-indigo_1230717-199464.jpg')",
          // backgroundSize: "cover",
          // backgroundPosition: "center bottom",
        }
      }
    >
      {/* <DotPattern className="fixed top-0 h-full w-screen" /> */}
      <div className="flex flex-col h-full gap-2 pt-2">
        <div className="fixed top-0 z-20 h-fit p-2 bg-white md:bg-transparent flex w-full gap-2">
          <IconLink href="https://github.com/anurag007y">
            <GithubLogo weight="regular" size={"50%"} />
          </IconLink>
          <div className="grow"></div>
          <IconLink href="https://www.linkedin.com/in/anurag-kumar-yadav-007/">
            <LinkedinLogo weight="regular" size={"50%"} />
          </IconLink>
        </div>
        <div
          id="main"
          className="flex flex-col gap-4 grow h-full relative overflow-x-auto md:overflow-y-auto pb-20 my-0 md:my-[70px]"
        >
          <div className="h-max max-w-full w-full gap-4 font-normal px-2 dark:text-zinc-50 text-zinc-800 shrink-0 grow-0 flex flex-col items-center">
            <div className="md:hidden sticky shrink-0 top-0 h-[60px] md:h-[80px] z-30 bg-slate-100 rounded-lg w-[calc(100vw-155px)] md:max-w-[50%] md:w-[calc(100vw-200px)] grid place-items-center text-3xl">
              Halo !
            </div>
            <div
              style={
                {
                  // background: "linear-gradient(45deg, #c33764, #1d2671)",
                  // backgroundImage: "url('/assets/bbgg2.png')",
                  // backgroundSize: "cover",
                  // backgroundPosition: "bottom center",
                }
              }
              className="w-full flex box-border items-center md:items-start grow gap-4"
            >
              <div className="sticky dark:bg-zinc-800 bg-white border-2 top-0 h-[100vh] rounded-xl px-10 md:h-[calc(100vh-160px)] w-full md:w-[70%] flex justify-center flex-col leading-tight">
                <span
                  className={clsx(
                    "text-rose-500 text-[3.5rem] md:text-[5rem] xl:text-[7rem] 2xl:text-[7rem] tracking-normal",
                    bilmaFont.className
                  )}
                  // style={{
                  //   fontFamily: "Bilma",
                  // }}
                >
                  Hi, I&apos;m Anurag
                </span>
                <span className="text-[2.5rem] md:text-[3rem] xl:text-[2rem] 2xl:text-[3rem]">
                  is a Software Engineer, a designer and a Tech Enthusiast.
                </span>
              </div>
              <div className="dark:bg-zinc-800 bg-white w-full rounded-lg md:w-[40%] hidden md:block md:h-[calc(100vh-160px)] overflow-hidden">
                <div className="relative boxes flex flex-wrap gap-4 w-full max-h-full justify-center items-center overflow-hidden">
                  <Image
                    src={"/assets/bgcut.png"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="absolute bottom-0 z-10 left-0 w-full h-fit object-contain grayscale"
                  />
                  {squares.map((_, index) => (
                    <div
                      key={index}
                      className="relative p-2 flex-1 max-h-[30%] min-w-[30%] shrink-0 overflow-hidden bg-rose-100 dark:bg-zinc-600 flex justify-center items-end animate-morph aspect-square"
                      // className="flex w-[30%] h-[30%] items-center justify-center bg-gradient-to-br from-blue-200 to-green-200 animate-morph aspect-square"
                    >
                      {index === 2 && (
                        <Image
                          src={"/assets/codecoffee.gif"}
                          alt="logo"
                          className="aspect-square h-full rounded-lg"
                          width={1000}
                          height={1000}
                        />
                      )}
                      {index === 4 && (
                        <Image
                          src={"/assets/music2.gif"}
                          alt="logo"
                          className="w-[90%] h-[80%] absolute bottom-2 left-2 rounded-lg"
                          width={1000}
                          height={1000}
                        />
                      )}
                      {index === 3 && (
                        <Image
                          src={"/assets/sds.gif"}
                          alt="logo"
                          className="w-[90%] h-[90%] opacity-100 absolute bottom-2 left-2 rounded-lg"
                          width={1000}
                          height={1000}
                        />
                      )}
                      {index === 1 && (
                        <Image
                          src={"/assets/design.gif"}
                          alt="logo"
                          className="w-[90%] h-[90%] absolute bottom-2 left-2 rounded-lg"
                          width={1000}
                          height={1000}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="h-max max-w-full w-full gap-2 font-normal px-2 text-zinc-800 shrink-0  grow-0 flex flex-col items-center">
            <div className="md:hidden dark:bg-zinc-800 sticky top-0 h-[68px] z-30 bg-teal-200 rounded-lg w-[58vw]  grid place-items-center text-3xl text-white">
              About
            </div>
            <div className="w-full flex items-center md:items-start grow gap-4 rounded-lg text-[10vw] md:text-[5rem] xl:text-[5rem]">
              <div className="border-2 rounded-xl sticky top-0 h-full md:h-[calc(100vh-160px)] px-10 bg-teal-50 text-teal-800 w-fit flex justify-center flex-col leading-tight">
                Projects
              </div>
              <div className="border-2 rounded-xl grow h-full p-3 text-teal-800 bg-teal-50">
                <div className="w-full h-[200vh] rounded-lg"></div>
              </div>
            </div>
          </div>
          <div className="h-full max-w-full w-full gap-2 font-normal px-2 text-zinc-800 shrink-0  grow-0 flex flex-col items-center">
            <div className="md:hidden sticky top-0 h-[68px] z-30 bg-pink-200 rounded-lg w-[58vw]  grid place-items-center text-3xl text-white">
              Work
            </div>
            <div className="leading-tight w-full flex h-full pl-10 flex-col justify-center grow bg-pink-50 rounded-lg text-pink-800 text-[10vw] md:text-[5rem] xl:text-[5rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
              quam ab sequi quis
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 z-20 h-fit p-2 bg-white md:bg-transparent flex w-full gap-2">
          <IconBox />
          <div className="grow flex justify-center items-center gap-4">
            <div className="h-full w-32 border-2 bg-zinc-200 rounded-lg grid place-items-center">
              Hello
            </div>
            <div className="h-full w-32 border-2 bg-zinc-200 rounded-lg grid place-items-center">
              Projects
            </div>
            <div className="h-full w-32 border-2 bg-zinc-200 rounded-lg grid place-items-center">
              Work
            </div>
          </div>
          <IconLink href="https://www.instagram.com/anurag_007_/">
            <ThreadsLogo weight="regular" size={"50%"} />
          </IconLink>
        </div>
      </div>
    </main>
  );
}
