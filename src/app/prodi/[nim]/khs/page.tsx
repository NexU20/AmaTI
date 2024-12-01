import DashboardCard from "@/app/components/DashboardCard";
import TableKHS from "@/app/components/Tables/KHS/TableKHS";
import DataLoading from "@/app/components/Tables/Loading";
import { getStudent } from "@/app/query";
import { Suspense } from "react";

export default async function page({
  params,
}: {
  params: Promise<{ nim: string }>;
}) {
  const nim = (await params).nim;
  const namaMahasiswa = await getStudent(nim);

  return (
    <DashboardCard title="Kartu Hasil Studi Mahasiswa">
      <p className="text-lg mb-4">
        {namaMahasiswa?.nama ?? `Tidak ada mahasiswa dengan nim ${nim}`}
      </p>
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
            <TableKHS nim={nim} />
          </Suspense>
        </tbody>
      </table>
    </DashboardCard>
  );
}
