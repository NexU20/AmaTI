"use client";

import ModalBackdrop from "@/app/components/ModalBackdrop";
import { YearBatchProvider } from "@/app/contexts/yearBatchContext";
import { useModal, useOutsideClick } from "@/app/hooks";
import { useRef, useState } from "react";
import UploadKalender from "./UploadKalender";

export default function TambahKalender() {
  const { openModal, isOpen, closeModal } = useModal();
  const modalRef = useRef(null);
  const [file, setFile] = useState<File | undefined>(undefined);

  useOutsideClick(modalRef, onClose);

  function onClose() {
    setFile(undefined);
    closeModal();
  }

  return (
    <>
      {isOpen && (
        <ModalBackdrop>
          <YearBatchProvider>
            <UploadKalender ref={modalRef} fileData={{ file, setFile }} />
          </YearBatchProvider>
        </ModalBackdrop>
      )}
      <button onClick={openModal} className="main-btn w-fit self-end">
        Upload Kalender Akademik
      </button>
    </>
  );
}
