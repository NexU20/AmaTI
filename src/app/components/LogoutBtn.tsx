"use client";

import { useRef, useState } from "react";
import { useOutsideClick } from "../hooks";
import { logout } from "../helper";

export default function LogoutBtn({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState(false);
  const logoutRef = useRef(null);
  useOutsideClick(logoutRef, () => setIsClicked(false));

  async function action() {
    await logout();
  }

  return (
    <>
      <button
        onClick={() => setIsClicked((prev) => !prev)}
        className="text-slate-600 hover:bg-opacity-20 hover:bg-slate-400 poppins-regular px-6 py-2 rounded-full flex flex-col justify-start"
      >
        {children}
      </button>
      {isClicked && (
        <div
          ref={logoutRef}
          className="bg-slate-200 border absolute rounded-md right-0 w-full translate-y-2 overflow-hidden"
        >
          <button
            onClick={action}
            className="p-4 text-black poppins-semibold hover:bg-slate-400 hover:bg-opacity-30 w-full text-start"
          >
            Logout
          </button>
        </div>
      )}
    </>
  );
}
