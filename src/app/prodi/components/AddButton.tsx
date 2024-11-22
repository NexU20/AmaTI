"use client";
import Plus from "@/app/components/icons/Plus";
import ModalBackdrop from "@/app/components/ModalBackdrop";
import { useModal, useOutsideClick } from "@/app/hooks";
import { useRef } from "react";
import TambahMahasiswa from "./TambahMahasiswa";

export default function AddButton() {
  const { isOpen, openModal, closeModal } = useModal();
  const modalRef = useRef(null);
  useOutsideClick(modalRef, closeModal);

  return (
    <>
      {isOpen && (
        <ModalBackdrop>
          <TambahMahasiswa ref={modalRef} close={closeModal} />
        </ModalBackdrop>
      )}
      <button
        onClick={openModal}
        className="bg-sidebar hover:bg-sidebar-header poppins-semibold text-sm text-white py-2 px-3 rounded-md flex items-center justify-between place-self-start"
      >
        <Plus />
        Tambah Mahasiswa
      </button>
    </>
  );
}
