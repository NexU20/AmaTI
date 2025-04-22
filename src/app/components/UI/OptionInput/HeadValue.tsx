import { useYearBatch } from "../../../hooks/useYerBatch";

export default function HeadValue({ text }: { text: string }) {
  const { setSelectedBatch } = useYearBatch();
  return (
    <div
      onClick={() => setSelectedBatch("")}
      className="px-4 py-2 hover:bg-slate-200 text-center"
    >
      {text}
    </div>
  );
}
