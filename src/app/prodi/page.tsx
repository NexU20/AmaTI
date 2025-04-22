import DashboardCard from "@/app/components/DashboardCard";
import AddBtn from "./components/AddButton";
import StudentsTable from "./components/StudentsTable";
import { getAllStudents } from "../query";
import Searching from "./components/Searching";

export default async function ProdiDashboard() {
  const students = await getAllStudents();

  return (
    <DashboardCard title="Data Mahasiswa">
      <div className="flex flex-col gap-y-6">
        <div className="pl-6 pr-4 flex justify-between gap-x-4">
          <Searching />
          <AddBtn />
        </div>
        <div>
          <StudentsTable data={students} />
        </div>
      </div>
    </DashboardCard>
  );
}
