import React from "react";

export default function LoginInput({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-y-2">{children}</div>;
}
