"use client";
import Home from "@/app/components/icons/Home";
import Upload from "@/app/components/icons/Upload";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("");

  useLayoutEffect(() => {
    setCurrentTab(window.location.pathname);
  }, []);

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Link
        href={`/mahasiswa`}
        onClick={() => setCurrentTab("/mahasiswa")}
        className={`${
          currentTab == "/mahasiswa"
            ? "bg-white text-black hover:bg-slate-100"
            : "text-slate-300 hover:bg-slate-300 hover:bg-opacity-10"
        } poppins-semibold w-full py-2 rounded-lg relative group px-4 overflow-hidden transition-colors `}
      >
        <div className="flex items-center justify-start gap-x-4 relative">
          <Home color={currentTab == "/mahasiswa" ? "#000" : "#BEBEBE"} />
          Beranda
        </div>
      </Link>
      <div className="">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={`${
            currentTab !== "/mahasiswa"
              ? "bg-white text-black hover:bg-slate-100"
              : "text-slate-300 hover:bg-slate-300 hover:bg-opacity-10"
          } poppins-semibold w-full py-2 rounded-lg flex items-center transition-colors justify-between px-4 relative overflow-hidden`}
        >
          <div
            className={`absolute top-0 left-0 h-full w-full transition-transform `}
          ></div>
          <div className="flex gap-x-4 items-center relative">
            <Upload color={currentTab !== "/mahasiswa" ? "#000" : "#BEBEBE"} />
            <span>Unggah</span>
          </div>
          <div
            className={`${
              currentTab !== "/mahasiswa" ? "border-black" : ""
            } inline size-2 border-b border-l rotate-45 transition-transform ${
              isMenuOpen && "!-rotate-45"
            }`}
          ></div>
        </button>
        <div
          className={`flex justify-end poppins-semibold text-slate-300 overflow-hidden transition-all h-0 ${
            isMenuOpen && "min-h-40"
          }`}
        >
          <ul className="w-3/4 flex flex-col select-none">
            <li className="cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 text-sm">
              <Link
                onClick={() => setCurrentTab("/mahasiswa/krs")}
                href="/mahasiswa/krs"
                className="flex items-center gap-x-2 p-4 pr-8"
              >
                <div className="size-3 rounded-full border-2 border-slate-300"></div>
                <span>KRS</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 text-sm ">
              <Link
                href="/mahasiswa/khs"
                onClick={() => setCurrentTab("/mahasiswa/khs")}
                className="flex items-center gap-x-2 p-4 pr-8"
              >
                <div className="size-3 rounded-full border-2 border-slate-300"></div>
                <span>KHS</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 text-sm">
              <Link
                href="/mahasiswa/transkrip"
                onClick={() => setCurrentTab("/mahasiswa/transkrip")}
                className="flex items-center gap-x-2 p-4 pr-8"
              >
                <div className="size-3 rounded-full border-2 border-slate-300"></div>
                <span>Transkrip Nilai</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
