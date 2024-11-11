"use client";
import Home from "@/app/components/icons/Home";
import { usePage } from "@/app/contexts/PageContext";

export default function MahasiswaNavigation() {
  const { page, setPage } = usePage();

  function btnStyle(forPage: string) {
    return page == forPage
      ? "bg-white text-black"
      : "bg-transparent text-slate-300 hover:bg-opacity-20";
  }

  return (
    <>
      <button
        onClick={() => setPage("ortu-home")}
        className={`${btnStyle(
          "ortu-home"
        )} poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4`}
      >
        <Home color={page == "ortu-home" ? "#000" : "#BEBEBE"} />
        Beranda
      </button>
      <button
        onClick={() => setPage("ortu-krs")}
        className={`${btnStyle(
          "ortu-krs"
        )} poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4`}
      >
        {/* <Data /> */}
        <span>Kartu Rencana Studi</span>
      </button>
      <button
        onClick={() => setPage("ortu-khs")}
        className={`${btnStyle(
          "ortu-khs"
        )} poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4`}
      >
        {/* <Data /> */}
        <span>Kartu Hasil Studi</span>
      </button>
      <button
        onClick={() => setPage("ortu-transkrip")}
        className={`${btnStyle(
          "ortu-transkrip"
        )} poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4`}
      >
        {/* <Data /> */}
        <span>Transkrip Nilai</span>
      </button>
      <button
        onClick={() => setPage("ortu-kalender")}
        className={`${btnStyle(
          "ortu-kalender"
        )} poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4`}
      >
        {/* <Data /> */}
        <span>Kalender Akademik</span>
      </button>
      <button
        onClick={() => setPage("ortu-pengaturan")}
        className={`${btnStyle(
          "ortu-pengaturan"
        )} poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4`}
      >
        {/* <Data /> */}
        <span>Pengaturan</span>
      </button>
    </>
  );
}
