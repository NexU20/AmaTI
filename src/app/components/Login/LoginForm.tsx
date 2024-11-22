"use client";

import Link from "next/link";
import LoginInput from "./LoginInput";
import Image from "next/image";
import { useRef, useState } from "react";
import ModalBackdrop from "../ModalBackdrop";
import { useModal } from "@/app/hooks";
import { loginAction, setUserLoginID } from "@/app/actions";
import Loading from "../icons/Loading";
import { useToast } from "@/app/contexts/ToastContext";

export default function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef(null);
  const { isOpen, openModal } = useModal();
  const { addToast } = useToast();

  async function login(data: FormData) {
    const res = await loginAction(data);

    if (!res) {
      addToast({
        message: "NIM atau Kata Sandi Salah",
        type: "error",
      });
      return;
    }

    if (res.role === "user") return openModal();

    if (res.role === "prodi") {
      await userLogin("prodi");
      return;
    }

    addToast({
      message: "Terdapat Kesalahan Pada Server",
      type: "error",
    });
  }

  async function userLogin(type: string) {
    setIsLoading(true);
    await setUserLoginID(type);
  }

  return (
    <>
      {isOpen && (
        <ModalBackdrop>
          <div
            className="bg-white p-8 w-full sm:w-fit rounded-xl flex flex-col items-center gap-y-6 shadow-form"
            ref={modalRef}
          >
            <h1 className="poppins-semibold text-lg sm:text-xl">
              Login Sebagai
            </h1>
            <div className="flex justify-between gap-x-2 items-center w-full">
              <button
                onClick={() => userLogin("ortu")}
                className="w-1/2 sm:w-32 md:min-w-52 main-btn"
              >
                Wali
              </button>
              <button
                onClick={() => userLogin("mhs")}
                className="w-1/2 sm:w-32 md:min-w-52 main-btn"
              >
                Mahasiswa
              </button>
            </div>
          </div>
        </ModalBackdrop>
      )}
      {isLoading && <Loading />}
      <form
        action={login}
        className="bg-white px-8 pt-8 pb-12 rounded-2xl w-full sm:w-2/3 lg:w-2/5 xl:w-1/3 flex flex-col gap-y-6 shadow-form transition-all"
      >
        <LoginInput>
          <p className="poppins-semibold text-sm">NIM</p>
          <input
            name="user"
            className="p-2 text-sm sm:text-base rounded-lg w-full bg-background outline-none border-2 border-background focus:border-sky-500"
          ></input>
        </LoginInput>
        <LoginInput>
          <p className="poppins-semibold text-sm">Kata Sandi</p>
          <input
            name="password"
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
          type="submit"
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
    </>
  );
}
