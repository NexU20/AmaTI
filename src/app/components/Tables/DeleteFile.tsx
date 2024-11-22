"use client";
import { deleteFile } from "@/app/query";
import Trash from "../icons/Trash";

export default function DeleteFile({
  id,
  disabled,
}: {
  id?: number;
  disabled: boolean;
}) {
  async function deleteAction() {
    if (!id) {
      return;
    }

    const res = await deleteFile(id);

    if (!res) {
      alert("Gagal Menghapus File");
      return;
    }
  }

  return (
    <button
      onClick={() => !disabled && deleteAction()}
      disabled={disabled}
      className={`${
        disabled && "opacity-30 cursor-not-allowed"
      } mx-1 bg-red-500 inline-flex justify-center items-center size-8 rounded-sm hover:bg-red-600`}
    >
      <Trash />
    </button>
  );
}
