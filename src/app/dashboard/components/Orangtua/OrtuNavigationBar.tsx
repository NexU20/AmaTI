import Home from "@/app/components/icons/Home";

export default function MahasiswaNavigation() {
  return (
    <>
      <button className="bg-white text-black poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4">
        <Home />
        Beranda
      </button>
      <button className="text-slate-300 poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 hover:bg-opacity-20 flex items-center justify-between px-4">
        {/* <Data /> */}
        <span>Kartu Rencana Studi</span>
      </button>
      <button className="text-slate-300 poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 hover:bg-opacity-20 flex items-center justify-between px-4">
        {/* <Data /> */}
        <span>Kartu Hasil Studi</span>
      </button>
      <button className="text-slate-300 poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 hover:bg-opacity-20 flex items-center justify-between px-4">
        {/* <Data /> */}
        <span>Transkrip Nilai</span>
      </button>
      <button className="text-slate-300 poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 hover:bg-opacity-20 flex items-center justify-between px-4">
        {/* <Data /> */}
        <span>Kalender Akademik</span>
      </button>
      <button className="text-slate-300 poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 hover:bg-opacity-20 flex items-center justify-between px-4">
        {/* <Data /> */}
        <span>Pengaturan</span>
      </button>
    </>
  );
}
