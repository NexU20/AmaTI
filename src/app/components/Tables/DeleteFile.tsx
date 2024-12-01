"use client";
import { deleteFile } from "@/app/query";
import { deleteFile as deleteLocalFile } from "@/app/helper";
import Trash from "../icons/Trash";
import { useToast } from "@/app/contexts/ToastContext";

export default function DeleteFile({
  id,
  name,
  disabled,
}: {
  id?: number;
  name?: string;
  disabled: boolean;
}) {
  const { addToast } = useToast();
  async function deleteAction() {
    if (!id || !name) {
      return;
    }

    const res = await deleteFile(id);
    deleteLocalFile(name);

    if (!res) {
      addToast({ message: "Gagal untuk menghapus file", type: "error" });
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
