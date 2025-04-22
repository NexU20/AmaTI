"use client";

import useDebounce from "@/app/hooks/useDebounce";
import { useEffect, useState } from "react";

export default function Searching() {
  const [value, setValue] = useState("");
  const [angkatan, setAngkatan] = useState<number | null>(null);
  const debouncedValue = useDebounce(value, 650);

  useEffect(() => {
    if (!debouncedValue) {
      return;
    }

    alert(`${debouncedValue}, ${angkatan}`);
  }, [debouncedValue, angkatan]);

  return (
    <div className="flex gap-x-12">
      <div className="flex gap-x-2 items-center">
        <label htmlFor="search" className="text-sm">
          Cari:
        </label>
        <input
          type="text"
          id="search"
          onInput={(e) => setValue((e.target as HTMLInputElement).value)}
          className="border-2 border-black text-sm outline-none px-2 min-w-40 lg:w-2/3 xl:w-64 focus:border-sidebar"
        />
      </div>
      <div className="flex gap-x-2 items-center">
        <label htmlFor="angkatan" className="text-sm">
          Angkatan:
        </label>
        <input
          onChange={(e) => setAngkatan(parseInt(e.target.value))}
          type="number"
          id="angkatan"
          min={0}
          className="border-2 border-black text-sm outline-none px-2 max-w-24 focus:border-sidebar"
        />
      </div>
    </div>
  );
}
