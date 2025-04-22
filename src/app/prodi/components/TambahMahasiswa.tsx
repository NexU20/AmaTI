import { addStudentAction } from "@/app/actions";
import HeadValue from "@/app/components/UI/OptionInput/HeadValue";
import InputOption from "@/app/components/UI/OptionInput/InputOptions";
import OptionSection from "@/app/components/UI/OptionInput/OptionSection";
import Value from "@/app/components/UI/OptionInput/Value";
import { useToast } from "@/app/contexts/ToastContext";
import { useYearBatch } from "@/app/hooks/useYerBatch";
import { getPossibleYearBatches } from "@/app/utils";

export default function TambahMahasiswa({
  close,
  ref,
}: {
  close: () => void;
  ref: React.RefObject<HTMLDivElement>;
}) {
  const { addToast } = useToast();
  const { selectedBatch, setSelectedBatch } = useYearBatch();

  async function tambahMahasiswa(data: FormData) {
    if (!selectedBatch) {
      addToast({ message: "Pilih angkatan terlebih dahulu", type: "error" });
      return;
    }

    const input = {
      name: data.get("name") as string,
      nim: data.get("nim") as string,
      angkatan: selectedBatch,
      password: data.get("password") as string,
      father: data.get("father") as string,
      mother: data.get("mother") as string,
      ttl: data.get("ttl") as string,
    };

    const res = await addStudentAction(input);
    if (!res) {
      addToast({ message: "Gagal menambahkan mahasiswa", type: "error" });
      return;
    }

    addToast({ message: "Berhasil menambah Mahasiswa", type: "success" });
    setSelectedBatch("");
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
        <InputOption displayName="Angkatan">
          <OptionSection>
            <HeadValue text="Pilih Angkatan" />
            {getPossibleYearBatches().map((batch) => (
              <Value value={batch.split("/")[0]} key={batch.split("/")[0]} />
            ))}
          </OptionSection>
        </InputOption>
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
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
