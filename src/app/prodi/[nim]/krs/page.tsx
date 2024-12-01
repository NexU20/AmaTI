import DashboardCard from "@/app/components/DashboardCard";
import TableKRS from "@/app/components/Tables/KRS/TableKRS";
import DataLoading from "@/app/components/Tables/Loading";
import React, { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ nim: string }>;
}) {
  const nim = (await params).nim;
  return (
    <DashboardCard title="Kartu Rencana Studi">
      <table className="shadow-form rounded-md overflow-hidden">
        <thead className="text-sm bg-sidebar-header text-white">
          <tr>
            <th className="border-r py-2 px-1">No</th>
            <th className="border-r py-2 px-2">Semester</th>
            <th className="border-r py-2 px-3">Berkas</th>
            <th className="border py-2 px-12">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          <Suspense fallback={<DataLoading />}>
            <TableKRS nim={nim} />
          </Suspense>
        </tbody>
      </table>
    </DashboardCard>
  );
}
