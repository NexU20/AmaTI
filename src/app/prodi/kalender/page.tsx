import DashboardCard from "@/app/components/DashboardCard";
import TambahKalender from "./TambahKalender";
import { Suspense } from "react";
import Kalender from "@/app/components/Tables/Kalender/Kalender";
import DataLoading from "@/app/components/Tables/Loading";

export default function page() {
  return (
    <DashboardCard title="Kalender Akademik">
      <TambahKalender />
      <table className="shadow-form rounded-md overflow-hidden">
        <thead className="text-sm bg-sidebar text-white">
          <tr>
            <th className="border-r py-2 px-1">No</th>
            <th className="border-r py-2 px-2">Tahun Akademik</th>
            <th className="border-r py-2 px-3">Berkas</th>
            <th className="py-2 px-12">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          <Suspense fallback={<DataLoading />}>
            <Kalender />
          </Suspense>
        </tbody>
      </table>
    </DashboardCard>
  );
}
