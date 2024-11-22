import DashboardCard from "@/app/components/DashboardCard";
import DataLoading from "@/app/components/Tables/Loading";
import TableKHS from "@/app/components/Tables/KHS/TableKHS";
import { Suspense } from "react";

export default function page() {
  return (
    <DashboardCard title="Kartu Hasil Studi">
      <table className="rounded-md overflow-hidden shadow-form">
        <thead className="text-sm bg-sidebar-header text-white">
          <tr>
            <th className="border-r py-2 px-1">No</th>
            <th className="border-r py-2 px-2">Semester</th>
            <th className="border-r py-2 px-3">Berkas</th>
            <th className="py-2 px-12">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          <Suspense fallback={<DataLoading />}>
            <TableKHS />
          </Suspense>
        </tbody>
      </table>
    </DashboardCard>
  );
}
