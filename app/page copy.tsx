"use client";

import { useState } from "react";
import Van from "./components/Van";
import Meboard from "./components/meboard";
import SkillBoard from "./components/skillboard";

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const getLeftPosition = (imageIndex: number) => {
    const offset = step - imageIndex;
    const leftPosition = -1 * offset * 52.5 + "%";
    return leftPosition;
  };
  const handleNextClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStep((prevIndex) => (prevIndex + 1) % 5);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  const handlePrevClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setStep((prevIndex) => (prevIndex - 1 + 5) % 5);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };

  return (
    <main
      className={`h-dvh w-screen relative bgmountains ${
        isAnimating ? "" : "paused"
      }`}
    >
      {/* <div
        className="absolute h-full w-full top-0 left-0 -z-10"
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='purple' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      ></div> */}
      <div className="flex flex-col h-full w-full">
        <div className="h-auto grow border-2 rounded-xl border-gray-200 bg-white m-8 bg-opacity-50">
          <button
            className="px-4 py-1 border border-black rounded w-fit"
            onClick={handlePrevClick}
          >
            prev
          </button>
          <button
            className="px-4 py-1 border border-black rounded w-fit"
            onClick={handleNextClick}
          >
            next
          </button>
        </div>
        {/* <div className="relative concentric-rects grid place-items-center h-full w-auto grow box-border">
          <div className="absolute h-[100%] w-[100%] border rounded-xl border-gray-800"></div>
          <div className="absolute h-[95%] w-[90%] border-2 rounded-xl border-black border-opacity-25"></div>
          <div className="absolute h-[90%] w-[80%] border-2 rounded-xl border-black border-opacity-20"></div>
          <div className="absolute h-[85%] w-[70%] border-2 rounded-xl border-black border-opacity-15"></div>
          <div className="absolute h-[80%] w-[60%] border-2 rounded-xl border-black border-opacity-10"></div>
          <div className="absolute h-[75%] w-[50%] border-2 rounded-xl border-black border-opacity-10"></div>
          <div className="absolute h-[70%] w-[40%] border-2 rounded-xl border-black border-opacity-5"></div>
        </div>
         */}
        {/* <div className="h-[10%] relative rounded-xl  border border-purple-400 bg-white overflow-hidden">
          <div className="z-20 bg-gradient-to-l from-purple-50 to-transparent absolute right-0 w-1/3 h-full"></div>
          <div className="z-20 bg-gradient-to-r from-purple-50 to-transparent absolute left-0 w-1/3 h-full"></div>
          <div className="h-full w-full overflow-x-auto border-inherit flex justify-center items-center gap-10">
            <div className="h-full w-1/3 relative grid place-items-center border-inherit">
              <div className="h-10 w-10 border rounded-3xl bg-white border-inherit z-10"></div>
            </div>
            <div className="h-full w-1/3 relative grid place-items-center border-inherit">
              <div className="h-10 w-10 border rounded-3xl bg-white border-inherit z-10"></div>
            </div>
            <div className="h-full w-1/3 relative grid place-items-center border-inherit">
              <div className="h-14 w-14 border-2 rounded-3xl bg-white border-inherit z-10"></div>
            </div>
            <div className="h-full w-1/3 relative grid place-items-center border-inherit">
              <div className="h-10 w-10 border rounded-3xl bg-white border-inherit z-10"></div>
            </div>
            <div className="h-full w-1/3 relative grid place-items-center border-inherit">
              <div className="h-10 w-10 border rounded-3xl bg-white border-inherit z-10"></div>
            </div>
            <div className="h-full w-1/3 relative grid place-items-center border-inherit">
              <div className="h-10 w-10 border rounded-3xl bg-white border-inherit z-10"></div>
            </div>
          </div>
        </div> */}
        <div className="h-20 relative overflow-hidden text-black">
          <div className="">{/* <Mountains /> */}</div>
          <div className="z-20 h-20 absolute bottom-0 text-black left-[45%] -translate-x-[50%]">
            <Van animate={isAnimating} />
          </div>
          <div
            style={{
              left: getLeftPosition(1),
              transform: `translateX(${getLeftPosition(1)}%)`,
            }}
            className={`z-10 h-[95%] absolute bottom-0 transition-all duration-[3s]`}
          >
            <Meboard />
          </div>
          <div
            style={{ left: getLeftPosition(2) }}
            className="z-10 h-[95%] absolute bottom-0 transition-all duration-[3s]  -translate-x-[50%]"
          >
            <SkillBoard />
          </div>
          <div
            style={{ left: getLeftPosition(3) }}
            className="z-10 h-[95%] absolute bottom-0 transition-all duration-[3s]  -translate-x-[50%]"
          >
            <SkillBoard />
          </div>
          <div
            style={{ left: getLeftPosition(4) }}
            className="z-10 h-[95%] absolute bottom-0 transition-all duration-[3s]  -translate-x-[50%]"
          >
            <SkillBoard />
          </div>
          <div
            style={{ left: getLeftPosition(5) }}
            className="z-10 h-[95%] absolute bottom-0 transition-all duration-[3s]  -translate-x-[50%]"
          >
            <SkillBoard />
          </div>
        </div>
      </div>
      {/* <section className="bg-red-500 h-full w-full rounded"></section> */}
    </main>
  );
}
