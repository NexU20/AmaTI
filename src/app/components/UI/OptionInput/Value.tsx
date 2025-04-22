import { useEffect, useState } from "react";
import { useYearBatch } from "../../../hooks/useYerBatch";

export default function Value({ value }: { value: string }) {
  const { selectedBatch, setSelectedBatch } = useYearBatch();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setIsSelected(selectedBatch === value);
  }, [selectedBatch, value]);

  function clickEvent() {
    setSelectedBatch(value);
  }

  return (
    <div
      onClick={clickEvent}
      className={`transition-colors px-4 py-2 hover:bg-slate-200 text-center ${
        isSelected ? "bg-slate-400" : ""
      }`}
    >
      {value}
    </div>
  );
}
