"use client";
import { useLayoutEffect, useState } from "react";
import Navlink from "./Navlink";

export default function Navigation() {
  const [currentUrl, setCurrentUrl] = useState<string>("");

  useLayoutEffect(() => {
    setCurrentUrl(document.location.pathname);
  }, []);

  return (
    <nav className="bg-sidebar text-white">
      <ul className="px-4 py-6 flex flex-col gap-y-4">
        <li>
          <Navlink
            url="/prodi"
            onClick={() => setCurrentUrl("/prodi")}
            text="Data Mahasiswa"
            current={currentUrl}
          />
        </li>
        <li>
          <Navlink
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
