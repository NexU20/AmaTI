import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-lvw h-lvh bg-slate-700 bg-opacity-50 flex justify-center items-center">
      <div className="animate-spin">
        <Image src="/loading.png" width={50} height={50} alt="loading" />
      </div>
    </div>
  );
}
