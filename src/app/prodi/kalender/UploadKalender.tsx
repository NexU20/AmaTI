import InputOption from "@/app/components/UI/OptionInput/InputOptions";
import OptionSection from "@/app/components/UI/OptionInput/OptionSection";
import Value from "@/app/components/UI/OptionInput/Value";
import { uploadKalender } from "@/app/query";
import { getPossibleYearBatches } from "@/app/utils";
import { useToast } from "@/app/contexts/ToastContext";
import { useState } from "react";
import { useYearBatch } from "@/app/hooks/useYerBatch";

export default function UploadKalender({
  ref,
  fileData,
}: {
  ref: React.RefObject<HTMLDivElement>;
  fileData: {
    file: File | undefined;
    setFile: React.Dispatch<React.SetStateAction<File | undefined>>;
  };
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();
  const { file, setFile } = fileData;
  const { selectedBatch, setSelectedBatch } = useYearBatch();

  async function handleUpload() {
    setIsLoading(true);

    if (!file) {
      setIsLoading(false);
      addToast({ message: "Pilih file terlebih dahulu", type: "error" });
      setFile(undefined);
      return;
    }

    if (!selectedBatch) {
      setIsLoading(false);
      addToast({
        message: "Masukan tahun ajaran terlebih dahulu",
        type: "error",
      });
      setFile(undefined);
      return;
    }

    const size = file.size / 1024 / 1024;

    if (size >= 1) {
      setIsLoading(false);
      addToast({ message: "Ukuran file terlalu besar", type: "error" });
      setFile(undefined);
      return;
    }

    const tahun = selectedBatch;
    const res = await uploadKalender(tahun, file);

    if (res.status !== 200) {
      setIsLoading(false);
      addToast({ message: res.message, type: "error" });
      setFile(undefined);
      setSelectedBatch("");
      return;
    }

    addToast({ message: res.message, type: "success" });
    setFile(undefined);
    setSelectedBatch("");
    setIsLoading(false);
  }

  return (
    <div className="modal fixed bg-white p-4 rounded-md" ref={ref}>
      <form
        action={handleUpload}
        className="modal-content flex flex-col gap-y-4"
      >
        <h2 className="text-xl poppins-semibold">Upload Kalender Akademik</h2>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="tahun" className="w-fit text-sm text-slate-800">
            Tahun Ajaran e.g <i>2024/2025</i>
          </label>
          <InputOption displayName="Tahun Ajaran">
            <OptionSection>
              {getPossibleYearBatches().map((batch) => (
                <Value value={batch} key={batch} />
              ))}
            </OptionSection>
          </InputOption>
        </div>
        <div
          className={`${
            file ? "bg-green-600" : "bg-red-600"
          } text-white my-2 px-3 py-4 min-w-96 relative transition-colors`}
        >
          <div
            className={`${
              file ? "bg-green-800" : "bg-red-800"
            } absolute h-full w-2 top-0 left-0 transition-colors`}
          ></div>
          <p className="ml-2 text-sm">{file ? file.name : "Tidak ada file"}</p>
        </div>
        <div className="flex gap-x-2">
          <input
            required
            type="file"
            name="kalender"
            className="hidden"
            id="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <label
            htmlFor="file"
            className="p-3 rounded-lg bg-green-500 hover:bg-green-600 cursor-pointer text-white h-fit w-2/3 text-center"
          >
            Pilih File
          </label>
          <button
            type="submit"
            className="main-btn self-end w-1/3 disabled:opacity-50 disabled:bg-slate-600"
            disabled={file && !isLoading ? false : true}
          >
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
    </div>
  );
}
