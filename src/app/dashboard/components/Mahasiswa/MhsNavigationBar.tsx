// import Data from "@/app/components/icons/Data";
"use client";

import Home from "@/app/components/icons/Home";
import Upload from "@/app/components/icons/Upload";
import { usePage } from "@/app/contexts/PageContext";
import { useState } from "react";

export default function MahasiswaNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setPage } = usePage();

  return (
    <>
      <button
        onClick={() => setPage("mhs-home")}
        className="bg-white text-black poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4"
      >
        <Home />
        Beranda
      </button>
      <div className="">
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="text-slate-300 poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 hover:bg-opacity-20 flex items-center justify-between px-4"
        >
          <div className="flex gap-x-4 items-center">
            <Upload />
            <span>Unggah</span>
          </div>
          <div
            className={`inline size-2 border-b border-l rotate-45 transition-transform ${
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
            <li
              onClick={() => setPage("mhs-krs")}
              className="cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 p-4 text-sm pr-8 flex items-center gap-x-2"
            >
              <div className="size-3 rounded-full border-2 border-slate-300"></div>
              <span>KRS</span>
            </li>
            <li
              onClick={() => setPage("mhs-khs")}
              className="cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 p-4 text-sm pr-8 flex items-center gap-x-2"
            >
              <div className="size-3 rounded-full border-2 border-slate-300"></div>
              <span>KHS</span>
            </li>
            <li
              onClick={() => setPage("mhs-transkrip")}
              className="cursor-pointer hover:bg-slate-300 hover:bg-opacity-20 p-4 text-sm pr-8 flex items-center gap-x-2"
            >
              <div className="size-3 rounded-full border-2 border-slate-300"></div>
              <span>Transkrip Nilai</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
