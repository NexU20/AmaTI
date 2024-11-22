"use client";
import { deleteStudent } from "@/app/query";
import Trash from "@/app/components/icons/Trash";

export default function DeleteButton({ nim }: { nim: number }) {
  return (
    <button
      className="p-2 bg-red-500 hover:bg-red-600"
      onClick={async () => await deleteStudent(nim)}
    >
      <Trash />
    </button>
  );
}
