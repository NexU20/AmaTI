import { addStudentAction } from "@/app/actions";

export default function TambahMahasiswa({
  close,
  ref,
}: {
  close: () => void;
  ref: React.RefObject<HTMLDivElement>;
}) {
  async function tambahMahasiswa(data: FormData) {
    const res = await addStudentAction(data);
    if (!res) {
      alert("Gagal menambahkan mahasiswa");
      return;
    }
  }

  return (
    <div
      ref={ref}
      className="bg-white text-black p-8 rounded-lg w-lvw h-lvh sm:w-fit sm:h-fit sm:p-12"
    >
      <div className="text-2xl poppins-semibold text-center">
        Tambah Mahasiswa
      </div>
      <form
        action={tambahMahasiswa}
        className="flex flex-col gap-y-4 mt-8 min-h-full"
      >
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="text"
          placeholder="Nama Mahasiswa"
          name="name"
        />
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="text"
          name="nim"
          placeholder="NIM Mahasiswa"
        />
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="text"
          name="angkatan"
          placeholder="Angkatan"
        />
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="password"
          name="password"
          placeholder="Password Akun"
        />
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="text"
          name="father"
          placeholder="Nama Ayah"
        />
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="text"
          name="mother"
          placeholder="Nama Ibu"
        />
        <input
          className="border-2 px-4 py-2 outline-none focus:border-sky-500"
          type="text"
          name="ttl"
          placeholder="Tampat / Tanggal Lahir"
        />
        <div className="flex flex-col gap-y-2 mt-auto -translate-y-2/3 sm:mt-4 sm:translate-y-0">
          <button
            type="submit"
            className="px-4 py-3 bg-sky-500 rounded-full poppins-semibold text-white"
          >
            Tambah
          </button>
          <button
            onClick={close}
            className="px-4 py-3 bg-black rounded-full poppins-semibold text-white"
          >
            Keluar
          </button>
        </div>
      </form>
    </div>
  );
}
