"use client";
import KHS from "@/app/components/icons/KHS";
import KRS from "@/app/components/icons/KRS";
import Transkrip from "@/app/components/icons/Transkrip";
import { usePage } from "@/app/contexts/PageContext";
import DashboardCard from "../DashboardCard";

export default function HomeOrangtua() {
  const { setPage } = usePage();

  return (
    <DashboardCard title="Selamat Datang">
      <div>
        <p className="text-lg">Wali Mahasiswa Lalu Fathan</p>
        <section className="flex gap-x-12 justify-around p-12">
          <button
            onClick={() => setPage("ortu-krs")}
            className="dashboard-navigation-btn"
          >
            <KRS />
            Kartu Rencana Studi
          </button>
          <button
            onClick={() => setPage("ortu-khs")}
            className="dashboard-navigation-btn"
          >
            <KHS />
            Kartu Hasil Studi
          </button>
          <button
            onClick={() => setPage("ortu-transkrip")}
            className="dashboard-navigation-btn"
          >
            <Transkrip />
            Transkrip Nilai
          </button>
          <button
            onClick={() => setPage("ortu-kalender")}
            className="dashboard-navigation-btn"
          >
            <Transkrip />
            Kalender Akademik
          </button>
        </section>
      </div>
    </DashboardCard>
  );
}
