import { useYearBatch } from "../../../hooks/useYerBatch";

export default function InputOption({
  displayName = "Belum dipilih",
  className,
  color = "white",
  children,
}: {
  displayName?: string;
  className?: string;
  color?: "white" | "black";
  children: React.ReactNode;
}) {
  const { selectedBatch, isOpen, setIsOpen } = useYearBatch();

  function getBgColor() {
    if (color === "white") return "bg-white text-black";
    else if (color === "black") return "bg-slate-800 text-white";
  }

  return (
    <div className={`${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${getBgColor()} w-full border transition-colors ${
          selectedBatch ? "border-sky-500" : "border-slate-400"
        } px-4 py-2 rounded-md cursor-pointer select-none flex items-center justify-between gap-x-4`}
      >
        <span>{selectedBatch || displayName}</span>
        <div className="flex flex-col items-center relative size-2">
          <div
            className={`border-l border-t size-2 rotate-45 absolute transition-all -top-[0.5px] ${
              isOpen ? "border-sky-500" : "border-slate-400"
            }`}
          ></div>
          <div
            className={`border-b border-r size-2 rotate-45 absolute top-1 transition-all ${
              !isOpen ? "border-sky-500" : "border-slate-400"
            }`}
          ></div>
        </div>
      </button>
      <div className="relative w-full">{isOpen && children}</div>
    </div>
  );
}
