import KHS from "@/app/components/icons/KHS";
import KRS from "@/app/components/icons/KRS";
import Transkrip from "@/app/components/icons/Transkrip";
import DashboardCard from "@/app/components/DashboardCard";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "../actions";

export default async function HomeOrangtua() {
  const cookieParse = await cookies();
  const token = cookieParse.get("token")?.value as string;

  if (!token) {
    redirect("/");
  }

  const data = (await verifyToken(token)) as JwtPayload;

  return (
    <DashboardCard title="Selamat Datang">
      <div>
        <p className="text-lg">Wali Mahasiswa {data.nama}</p>
        <section className="flex gap-x-12 justify-around p-12">
          <button className="dashboard-navigation-btn">
            <KRS />
            Kartu Rencana Studi
          </button>
          <button className="dashboard-navigation-btn">
            <KHS />
            Kartu Hasil Studi
          </button>
          <button className="dashboard-navigation-btn">
            <Transkrip />
            Transkrip Nilai
          </button>
          <button className="dashboard-navigation-btn">
            <Transkrip />
            Kalender Akademik
          </button>
        </section>
      </div>
    </DashboardCard>
  );
}
