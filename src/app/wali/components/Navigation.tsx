"use client";
import Home from "@/app/components/icons/Home";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

function activateStyle(current: string, target: string) {
  return current === target
    ? "text-black hover:bg-slate-100 bg-white"
    : "text-slate-300 hover:bg-slate-100 hover:bg-opacity-10";
}

export default function Navigation() {
  const pathName = usePathname();
  const [current, setCurrent] = useState(pathName);

  useLayoutEffect(() => {
    setCurrent(pathName);
  }, [pathName]);

  return (
    <nav className="px-4 py-6 flex flex-col gap-y-4">
      <Link
        href="/wali"
        onClick={() => setCurrent("/wali")}
        className={`poppins-semibold w-full py-2 rounded-lg ${activateStyle(
          current,
          "/wali"
        )} flex items-center justify-start gap-x-4 px-4`}
      >
        <Home color={current === "/wali" ? "#000" : "#BEBEBE"} />
        Beranda
      </Link>
      <Link
        href="/wali/krs"
        onClick={() => setCurrent("/wali/krs")}
        className={`poppins-semibold w-full py-2 rounded-lg ${activateStyle(
          current,
          "/wali/krs"
        )} flex items-center justify-start gap-x-4 px-4`}
      >
        <span>Kartu Rencana Studi</span>
      </Link>
      <Link
        href="/wali/khs"
        onClick={() => setCurrent("/wali/khs")}
        className={`poppins-semibold w-full py-2 rounded-lg ${activateStyle(
          current,
          "/wali/khs"
        )} flex items-center justify-start gap-x-4 px-4`}
      >
        <span>Kartu Hasil Studi</span>
      </Link>
      <Link
        href="/wali/transkrip"
        onClick={() => setCurrent("/wali/transkrip")}
        className={`poppins-semibold w-full py-2 rounded-lg ${activateStyle(
          current,
          "/wali/transkrip"
        )} flex items-center justify-start gap-x-4 px-4`}
      >
        <span>Transkrip Nilai</span>
      </Link>
      <Link
        href="/wali/kalender"
        onClick={() => setCurrent("/wali/kalender")}
        className={`poppins-semibold w-full py-2 rounded-lg ${activateStyle(
          current,
          "/wali/kalender"
        )} flex items-center justify-start gap-x-4 px-4`}
      >
        <span>Kalender Akademik</span>
      </Link>
      <Link
        href="/wali/pengaturan"
        onClick={() => setCurrent("/wali/pengaturan")}
        className={`poppins-semibold w-full py-2 rounded-lg ${activateStyle(
          current,
          "/wali/pengaturan"
        )} flex items-center justify-start gap-x-4 px-4`}
      >
        <span>Pengaturan</span>
      </Link>
    </nav>
  );
}
