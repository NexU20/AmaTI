"use client";
import { usePage } from "@/app/contexts/PageContext";
import { useRole } from "@/app/contexts/RoleContext";
import { useOutsideClick } from "@/app/hooks";
import React, { useRef, useState } from "react";

export default function DashboardRoleButton() {
  const [isMenuShowing, setIsMenuShowing] = useState<boolean>(false);
  const { role, setRole } = useRole();
  const { setPage } = usePage();
  const menuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(menuRef, () => setIsMenuShowing(false));

  function mhsRole() {
    setRole("mhs");
    setPage("mhs-home");
    setIsMenuShowing(false);
  }
  function ortuRole() {
    setRole("ortu");
    setPage("ortu-home");
    setIsMenuShowing(false);
  }
  function prodiRole() {
    setRole("prodi");
    setPage(null);
    setIsMenuShowing(false);
  }

  return (
    <div className="relative" ref={menuRef}>
      {role === "mhs" && (
        <MahasiswaRoleButton set={() => setIsMenuShowing((prev) => !prev)} />
      )}
      {role === "ortu" && (
        <OrtuRoleButton set={() => setIsMenuShowing((prev) => !prev)} />
      )}
      {role === "prodi" && (
        <ProdiRoleButton set={() => setIsMenuShowing((prev) => !prev)} />
      )}
      {isMenuShowing && (
        <div className="absolute flex flex-col border border-black bg-white right-2 z-10 top-full rounded-md">
          <button
            onClick={mhsRole}
            className="hover:bg-slate-200 hover:bg-opacity-50 py-2 px-4"
          >
            Mahasiswa
          </button>
          <button
            onClick={ortuRole}
            className="hover:bg-slate-200 hover:bg-opacity-50 py-2 px-4"
          >
            Orang Tua
          </button>
          <button
            onClick={prodiRole}
            className="hover:bg-slate-200 hover:bg-opacity-50 py-2 px-4"
          >
            Prodi
          </button>
        </div>
      )}
    </div>
  );
}

function MahasiswaRoleButton({ set }: { set: () => void }) {
  return (
    <button
      className="text-slate-600 poppins-regular hover:bg-slate-200 hover:bg-opacity-50 px-8 py-2 rounded-full flex flex-col justify-start"
      onClick={set}
    >
      <span className="text-left">LALU FATHAN</span>
      <span className="text-xs text-left">Mahasiswa</span>
    </button>
  );
}

function OrtuRoleButton({ set }: { set: () => void }) {
  return (
    <button
      className="text-slate-600 poppins-regular hover:bg-slate-200 hover:bg-opacity-50 px-8 py-2 rounded-full flex flex-col justify-end"
      onClick={set}
    >
      <span className="text-left">LALU FATHAN</span>
      <span className="text-xs text-right">Wakil Mahasiswa</span>
    </button>
  );
}

function ProdiRoleButton({ set }: { set: () => void }) {
  return (
    <button
      className="text-slate-600 poppins-regular hover:bg-slate-200 hover:bg-opacity-50 px-4 py-2 rounded-full flex flex-col justify-start"
      onClick={set}
    >
      <span>Admin Prodi</span>
    </button>
  );
}
