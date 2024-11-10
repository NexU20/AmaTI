"use client";

import Link from "next/link";
import LoginInput from "./LoginInput";
import Image from "next/image";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <form className="bg-white px-8 pt-8 pb-12 rounded-2xl w-full sm:w-2/3 lg:w-2/5 xl:w-1/3 flex flex-col gap-y-6 shadow-form transition-all">
      <LoginInput>
        <p className="poppins-semibold text-sm">NIM</p>
        <input className="p-2 text-sm sm:text-base rounded-lg w-full bg-background outline-none border-2 border-background focus:border-sky-500"></input>
      </LoginInput>
      <LoginInput>
        <p className="poppins-semibold text-sm">Kata Sandi</p>
        <input
          className="p-2 text-sm sm:text-base rounded-lg w-full bg-background outline-none border-2 border-background focus:border-sky-500"
          type={isShowPassword ? "text" : "password"}
        ></input>
      </LoginInput>
      <div className="flex items-center gap-x-2 justify-end -mt-2">
        <input
          type="checkbox"
          name="show-password"
          id="show-password"
          className="cursor-pointer"
          onChange={() => setIsShowPassword(!isShowPassword)}
        />
        <label
          htmlFor="show-password"
          className="text-xs sm:text-sm poppins-semibold cursor-pointer select-none"
        >
          Lihat Kata Sandi
        </label>
      </div>
      <button
        type="button"
        onClick={() => redirect("/dashboard")}
        className="bg-sky-500 text-sm sm:text-base self-center poppins-semibold text-white rounded-md px-10 py-3 sm:px-12 hover:bg-sky-600 mt-2 flex gap-x-2 items-center justify-center w-fit"
      >
        <Image src="/login.png" width={24} height={24} alt="login" />
        <span>Masuk</span>
      </button>
      <Link
        href="/"
        className="text-sky-500 self-center hover:text-sky-600 text-sm mt-1"
      >
        Lupa Kata Sandi
      </Link>
    </form>
  );
}
