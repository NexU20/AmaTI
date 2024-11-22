import Data from "@/app/components/icons/Data";
import Link from "next/link";

export default function Navlink({
  url,
  text = "Navigasi",
  current,
  onClick,
}: {
  url: string;
  text: string;
  current: string;
  onClick: () => void;
}) {
  return (
    <Link
      onClick={onClick}
      href={url}
      className={`${
        current === url
          ? "bg-white hover:bg-slate-100 text-black"
          : "text-gray-300 hover:bg-slate-300 hover:bg-opacity-20"
      }  poppins-semibold w-full py-2 rounded-lg flex items-center justify-start gap-x-4 px-4`}
    >
      <Data color={`${current === url ? "#000" : "#BEBEBE"}`} />
      {text}
    </Link>
  );
}
