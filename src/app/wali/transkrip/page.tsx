import DashboardCard from "@/app/components/DashboardCard";
import DataLoading from "@/app/components/Tables/Loading";
import RowNilai from "@/app/components/Tables/Transkrip/RowNilai";
import { Suspense } from "react";

export default function LihatTranskrip() {
  return (
    <DashboardCard title="Transkrip Nilai">
      <table className="rounded-md overflow-hidden shadow-form">
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
            <RowNilai />
          </Suspense>
        </tbody>
      </table>
    </DashboardCard>
  );
}
