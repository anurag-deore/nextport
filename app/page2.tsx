"use client";

import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import React from "react";

const Page2 = () => {
  return (
    <div
      className="flex flex-col h-screen bg-white"
      style={{
        minHeight: "-webkit-fill-available",
      }}
    >
      {/* Fixed Navbar */}
      <nav className="fixed p-[8px] md:p-4 top-0 left-0 right-0 h-[10vh]  bg-white text-white flex items-center justify-center z-50">
        <div className="box icon-box">
          <GithubLogo weight="regular" size={"50%"} />
        </div>
        <div className="grow"></div>
        <div className="box icon-box">
          <LinkedinLogo weight="regular" size={"50%"} />
        </div>
      </nav>

      {/* Main content area */}
      <main className="flex flex-col gap-[8px] mt-[10vh] mb-[10vh] px-[8px] md:p-[16px]">
        {/* 100vh container above */}
        <div className="w-full h-[calc(100vh-22vh)] bg-purple-800 rounded-lg flex items-center justify-center">
          <h2 className="text-3xl font-bold">Container Above</h2>
        </div>

        <div className="flex gap-[10px]">
          <div className="w-[60px] md:w-1/3 h-[calc(100vh-156px)] sticky top-[70px] bg-purple-800 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-semibold transform text-purple-600 -rotate-90 whitespace-pre">
              Projects
            </h2>
          </div>
          <div className="grow bg-green-200 rounded-lg overflow-hidden">
            <div className="h-[calc(400vh-232px)] flex flex-col items-center justify-between p-8">
              <h2 className="text-2xl font-semibold">
                Scrollable Right Column - 1
              </h2>
              <p className="text-xl">Middle of the scrollable area</p>
              <p className="text-xl">Bottom of the scrollable area</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[10px]">
          <div className="w-[60px] md:w-1/3 h-[calc(100vh-156px)] sticky top-[78px] bg-purple-100 rounded-lg flex items-center justify-center">
            <h2 className="text-2xl font-semibold transform text-purple-600 -rotate-90 whitespace-pre">
              Projects
            </h2>
          </div>
          <div className="grow bg-green-200 rounded-lg overflow-hidden">
            <div className="h-[calc(400vh-232px)] flex flex-col items-center justify-between p-8">
              <h2 className="text-2xl font-semibold">
                Scrollable Right Column - 1
              </h2>
              <p className="text-xl">Middle of the scrollable area</p>
              <p className="text-xl">Bottom of the scrollable area</p>
            </div>
          </div>
        </div>

        {/* 100vh container below */}
        <div className="h-[calc(100vh-200px)] bg-gray-200 flex items-center justify-center p-8">
          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
            <h2 className="text-3xl font-bold">Container Below</h2>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 p-2 left-0 right-0 h-[10vh] bg-white text-white flex items-center justify-center z-50">
        <div className="box icon-box">
          <GithubLogo weight="regular" size={"50%"} />
        </div>
        <div className="grow"></div>
        <div className="box icon-box">
          <LinkedinLogo weight="regular" size={"50%"} />
        </div>
      </footer>
    </div>
  );
};

export default Page2;
