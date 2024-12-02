"use client";
import { ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { uploadKRS } from "@/app/query";
import { saveFile } from "@/app/helper";
import { useToast } from "@/app/contexts/ToastContext";
import Upload from "../../icons/Upload";

export default function KrsUploadBtn({
  disabled,
  khs,
  nim,
  semester,
}: {
  disabled: boolean;
  khs: string;
  nim: string;
  semester: number;
}) {
  const { addToast } = useToast();

  async function uploadKRSAction(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) {
      addToast({
        message: "Pilih file terlebih dahulu",
        type: "error",
      });
      return;
    }

    const displayName = file.name;
    const type = file.type.split("/")[1];
    const fileName = uuidv4() + `.${type}`;

    const size = file.size / 1024 / 1024; // MB

    if (size >= 1) {
      addToast({
        message: "Ukuran file terlalu besar. Maksimal 1MB",
        type: "info",
        duration: 5000,
      });
      return;
    }

    if (type !== "pdf") {
      addToast({
        message: "Format file tidak didukung. Hanya menerima file PDF",
        type: "info",
        duration: 5000,
      });
      return;
    }

    const res = await uploadKRS(
      nim,
      semester.toString(),
      displayName,
      fileName
    );

    if (res.status === 500) {
      addToast({
        message: res.message,
        type: "error",
      });
      return;
    }

    const buffer = await file.arrayBuffer();
    const data = new Uint8Array(buffer);

    await saveFile(fileName, data);
  }

  return (
    <>
      {!disabled && (
        <input
          type="file"
          name="krs"
          id={khs}
          className="hidden"
          onChange={uploadKRSAction}
        />
      )}
      <label
        htmlFor={khs}
        className={`${
          disabled
            ? "bg-opacity-30 cursor-not-allowed"
            : "hover:bg-green-500 cursor-pointer"
        } mx-1 bg-green-400 inline-flex justify-center items-center size-8 rounded-sm`}
      >
        <Upload />
      </label>
    </>
  );
}