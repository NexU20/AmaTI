import React from "react";

export default function ModalBackdrop({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black bg-opacity-50 fixed left-0 top-0 h-lvh w-lvw flex justify-center items-center">
      {children}
    </div>
  );
}
