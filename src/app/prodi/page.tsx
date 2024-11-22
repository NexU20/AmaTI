import { Suspense } from "react";
import DashboardCard from "@/app/components/DashboardCard";
import AddBtn from "./components/AddButton";
import StudentsTable from "./components/StudentsTable";

export default function ProdiDashboard() {
  return (
    <DashboardCard title="Data Mahasiswa">
      <div className="flex flex-col gap-y-6">
        <div className="pl-6 pr-4 flex justify-between gap-x-4">
          <div className="flex gap-x-12">
            <div className="flex gap-x-2 items-center">
              <label htmlFor="search" className="text-sm">
                Cari:
              </label>
              <input
                type="text"
                id="search"
                className="border-2 border-black text-sm outline-none px-2 min-w-40 lg:w-2/3 xl:w-64 focus:border-sidebar"
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <label htmlFor="angkatan" className="text-sm">
                Angkatan:
              </label>
              <input
                type="number"
                id="angkatan"
                min={0}
                className="border-2 border-black text-sm outline-none px-2 max-w-24 focus:border-sidebar"
              />
            </div>
          </div>
          <AddBtn />
        </div>
        <div>
          <Suspense fallback={<p>Loading...</p>}>
            <StudentsTable />
          </Suspense>
        </div>
      </div>
    </DashboardCard>
  );
}
