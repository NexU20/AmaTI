import DashboardCard from "@/app/components/DashboardCard";
import { Suspense } from "react";
import TableBody from "./TableBody";
import DataLoading from "@/app/components/Tables/Loading";

export default function LihatKRS() {
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
            <TableBody />
          </Suspense>
        </tbody>
      </table>
    </DashboardCard>
  );
}
