"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function NavigateActionButton({
  nim,
  action,
  className,
  children = "Button",
}: {
  nim: string;
  action: string;
  className?: string;
  children: ReactNode;
}) {
  const router = useRouter();
  function navigate(nim: string, action: string) {
    router.push(`/prodi/${nim}/${action}`);
  }

  return (
    <button
      onClick={() => navigate(nim, action)}
      className={`py-2 px-3 poppins-semibold text-white text-xs ${className}`}
    >
      {children}
    </button>
  );
}
