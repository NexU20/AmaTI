"use client";

import ModalBackdrop from "@/app/components/ModalBackdrop";
import { useToast } from "@/app/contexts/ToastContext";
import { useModal, useOutsideClick } from "@/app/hooks";
import { uploadKalender } from "@/app/query";
import { useEffect, useRef, useState } from "react";

export default function TambahKalender() {
  const { openModal, isOpen, closeModal } = useModal();
  const modalRef = useRef(null);
  const [file, setFile] = useState<File | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  useOutsideClick(modalRef, onClose);

  function onClose() {
    setFile(undefined);
    closeModal();
  }

  useEffect(() => {
    console.log(file);
  }, [file]);

  async function handleUpload(FormData: FormData) {
    setIsLoading(true);

    if (!file) {
      setIsLoading(false);
      addToast({ message: "Pilih file terlebih dahulu", type: "error" });
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

    const tahun = FormData.get("tahun") as string;
    const res = await uploadKalender(tahun, file);

    if (res.status !== 200) {
      setIsLoading(false);
      addToast({ message: res.message, type: "error" });
      setFile(undefined);
      return;
    }

    addToast({ message: res.message, type: "success" });
    setFile(undefined);
    setIsLoading(false);
  }

  return (
    <>
      {isOpen && (
        <ModalBackdrop>
          <div className="modal fixed bg-white p-4 rounded-md" ref={modalRef}>
            <form
              action={handleUpload}
              className="modal-content flex flex-col gap-y-4"
            >
              <h2 className="text-xl poppins-semibold">
                Upload Kalender Akademik
              </h2>
              <div className="flex flex-col gap-y-2">
                <label htmlFor="tahun" className="w-fit text-sm text-slate-800">
                  Tahun Ajaran e.g <i>2024/2025</i>
                </label>
                <input
                  required
                  type="text"
                  name="tahun"
                  id="tahun"
                  className="p-2 outline-none border-2 rounded-md focus:border-sky-500 border-slate-600 border-opacity-40 focus:border-opacity-100"
                />
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
                <p className="ml-2 text-sm">
                  {file ? file.name : "Tidak ada file"}
                </p>
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
        </ModalBackdrop>
      )}
      <button onClick={openModal} className="main-btn w-fit self-end">
        Upload Kalender Akademik
      </button>
    </>
  );
}
