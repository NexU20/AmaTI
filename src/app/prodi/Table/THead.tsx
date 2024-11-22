import React from "react";

export default function THead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-sidebar text-white">
      <tr>{children}</tr>
    </thead>
  );
}
