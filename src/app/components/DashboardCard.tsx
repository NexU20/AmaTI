import React from "react";

export default function DashboardCard({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`bg-white p-8 rounded-lg flex flex-col gap-y-4 ${className}`}
    >
      <p className="poppins-semibold text-xl">{title}</p>
      {children}
    </div>
  );
}
