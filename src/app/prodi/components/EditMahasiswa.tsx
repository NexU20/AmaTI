"use client";
import EditStudent from "@/app/components/EditStudent";
import Edit from "@/app/components/icons/Edit";
import ModalBackdrop from "@/app/components/ModalBackdrop";
import { useModal, useOutsideClick } from "@/app/hooks";
import { useRef } from "react";

export default function EditMahasiswa({ nim }: { nim?: string }) {
  const { openModal, isOpen, closeModal } = useModal();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, closeModal);
  return (
    <>
      {isOpen && (
        <ModalBackdrop>
          <EditStudent nim={nim} ref={modalRef} />
        </ModalBackdrop>
      )}
      <button onClick={openModal} className="p-2 bg-blue-500 hover:bg-blue-600">
        <Edit />
      </button>
    </>
  );
}
