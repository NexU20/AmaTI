import { ReactNode } from "react";

export default function Table({ children }: { children: ReactNode }) {
  return (
    <table className="table-fixed w-full rounded-md overflow-hidden border-collapse whitespace-nowrap text-sm shadow-form">
      {children}
    </table>
  );
}
