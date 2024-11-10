import Link from "next/link";
import Image from "next/image";

export default function LoginFooter() {
  return (
    <div className="w-full flex justify-center py-10 sm:py-12">
      <Link
        // href="https://wa.me/+6281284231552"
        // target="_blank"
        // rel="noopener noreferrer"
        href="/"
        className="text-green-400 hover:text-green-500 flex items-center gap-x-1"
      >
        <Image
          src="/wa.png"
          width={25}
          height={25}
          alt="whatsapp"
          className="object-contain"
        />
        <span className="text-xs sm:text-sm">Hubungi kami via Whatsapp</span>
      </Link>
    </div>
  );
}
