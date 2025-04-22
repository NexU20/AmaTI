"use client";
import Eye from "@/app/components/icons/Eye";
import ModalBackdrop from "@/app/components/ModalBackdrop";
import { useModal, useOutsideClick } from "@/app/hooks";
import { useRef } from "react";
import StudentDatailsDialog from "./UI/StudentDetailsDialog";

export default function StudentDetails({ nim }: { nim?: string }) {
  const { openModal, isOpen, closeModal } = useModal();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, closeModal);
  return (
    <>
      {isOpen && (
        <ModalBackdrop>
          <StudentDatailsDialog
            closeAction={closeModal}
            nim={nim}
            ref={modalRef}
          />
        </ModalBackdrop>
      )}
      <button
        onClick={openModal}
        className="size-9 aspect-square bg-slate-700 hover:bg-slate-800 transition-colors flex justify-center items-center"
      >
        <Eye />
      </button>
    </>
  );
}
