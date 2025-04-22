import { useOutsideClick } from "@/app/hooks";
import { useYearBatch } from "@/app/hooks/useYerBatch";
import { ReactNode, useRef } from "react";

export default function OptionSection({
  color = "white",
  children,
}: {
  color?: string;
  children: ReactNode;
}) {
  const { setIsOpen } = useYearBatch();
  const option = useRef<HTMLDivElement>(null);

  useOutsideClick(option, () => setIsOpen(false));

  function getBgColor() {
    if (color === "white") return "bg-neutral-50 text-black";
    else if (color === "black") return "bg-slate-800 text-white";
  }

  return (
    <div
      ref={option}
      className={`w-2/3 z-10 ${getBgColor()} border border-sky-300 max-h-56 overflow-y-auto border-opacity-30 rounded-lg cursor-pointer select-none mt-1 flex flex-col absolute left-1/2 -translate-x-1/2`}
    >
      {children}
    </div>
  );
}
