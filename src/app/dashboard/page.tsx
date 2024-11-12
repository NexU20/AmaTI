import { RoleProvider } from "../contexts/RoleContext";
import Image from "next/image";
import DashboardHeader from "./components/DashboardHeader";
import DashboardContents from "./components/DashboardContents";

export default function Page() {
  return (
    <RoleProvider>
      <div className="min-h-lvh bg-background grid grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
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
        <DashboardHeader />
        <DashboardContents />
      </div>
    </RoleProvider>
  );
}
