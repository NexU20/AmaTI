"use client";
import { useLayoutEffect, useState } from "react";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathName = usePathname();
  const [currentUrl, setCurrentUrl] = useState<string>(pathName);

  useLayoutEffect(() => {
    setCurrentUrl(pathName);
  }, [pathName]);

  return (
    <nav className="bg-sidebar text-white">
      <ul className="px-4 py-6 flex flex-col gap-y-4">
        <li>
          <Navlink
            type="data"
            url="/prodi"
            onClick={() => setCurrentUrl("/prodi")}
            text="Data Mahasiswa"
            current={currentUrl}
          />
        </li>
        <li>
          <Navlink
            type="calendar"
            url="/prodi/kalender"
            onClick={() => setCurrentUrl("/prodi/kalender")}
            text="Kalender Akademik"
            current={currentUrl}
          />
        </li>
      </ul>
    </nav>
  );
}
