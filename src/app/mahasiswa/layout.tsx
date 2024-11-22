import { ReactNode } from "react";
import Image from "next/image";
import Navigation from "./components/Navigation";
import ProfileButton from "./components/ProfileButton";
import { PageProvider } from "../contexts/PageContext";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-lvh bg-background grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <div
        id="header-sidebar"
        className="bg-sidebar-header py-4 pl-4 pr-10 flex min-h-24 items-center gap-x-2 select-none text-white"
      >
        <Image
          src="/uin-asset.png"
          height={53}
          draggable={false}
          width={75}
          className="object-contain drop-shadow-md"
          alt="Logo UIN"
        />
        <div className="flex flex-col gap-y-1">
          <p className="poppins-bold text-2xl font-poppins">AmaTI</p>
          <p className="poppins-light text-sm">Sistem Pantau Akademik TI</p>
        </div>
      </div>
      <header className="bg-white flex items-center justify-between grow px-8 border-b border-slate-300">
        <div className="flex flex-col gap-y-1">
          <p className="poppins-semibold text-2xl">Sistem Pantau Akademik</p>
          <p className="poppins-light text-sm">
            Prodi Teknik Informatika UIN Syarif Hidayatullah Jakarta
          </p>
        </div>
        <ProfileButton />
      </header>
      <div className="bg-sidebar text-white">
        <Navigation />
      </div>
      <div className="px-8 py-4">
        <PageProvider>{children}</PageProvider>
      </div>
    </div>
  );
}
