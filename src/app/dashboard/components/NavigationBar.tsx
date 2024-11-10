"use client";
import { useRole } from "@/app/contexts/RoleContext";
import React from "react";
import MhsNavigationBar from "./Mahasiswa/MhsNavigationBar";
import OrtuNavigationBar from "./Orangtua/OrtuNavigationBar";
import Data from "@/app/components/icons/Data";

export default function NavigationBar() {
  const { role } = useRole();
  return (
    <>
      {role === "ortu" && <OrtuNavigationBar />}
      {role === "mhs" && <MhsNavigationBar />}
      {role === "prodi" && <ProdiNavigation />}
    </>
  );
}

function ProdiNavigation() {
  return (
    <>
      <button className="bg-white text-black poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-center gap-x-4">
        <Data />
        Data Mahasiswa
      </button>
    </>
  );
}
