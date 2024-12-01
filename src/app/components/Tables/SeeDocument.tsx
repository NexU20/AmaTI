import { ReactNode } from "react";

export default function SeeDocument({
  file,
  disabled,
  className,
  children,
}: {
  file?: string;
  disabled: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      target="_blank"
      href={!disabled && file ? `/api/pdf?file=${file}` : undefined}
      className={`${
        disabled
          ? "bg-opacity-30 cursor-not-allowed"
          : "hover:bg-yellow-700 cursor-pointer"
      } mx-1 bg-yellow-600 inline-flex justify-center items-center size-8 rounded-sm ${className}`}
    >
      {children}
    </a>
  );
}
