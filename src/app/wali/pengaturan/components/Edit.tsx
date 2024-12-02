"use client";

import EditStudent from "@/app/components/EditStudent";
import ModalBackdrop from "@/app/components/ModalBackdrop";
import { useModal, useOutsideClick } from "@/app/hooks";
import { useRef } from "react";

export default function Edit({ nim }: { nim?: string }) {
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
      <button
        onClick={() => openModal()}
        className="bg-green-500 hover:bg-green-600 py-2 text-white rounded-md"
      >
        Edit Data
      </button>
    </>
  );
}
