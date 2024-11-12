"use client";
import KHS from "@/app/components/icons/KHS";
import KRS from "@/app/components/icons/KRS";
import Transkrip from "@/app/components/icons/Transkrip";
import { usePage } from "@/app/contexts/PageContext";
import DashboardCard from "../DashboardCard";

export default function HomeMahasiswa() {
  const { setPage } = usePage();

  return (
    <DashboardCard title="Selamat Datang">
      <div>
        <p className="text-lg text-red-600">
          Jangan lupa upload KRS, KHS, dan Transkrip Nilai Semestermu!
        </p>
        <section className="flex gap-x-12 justify-around p-12">
          <button
            onClick={() => setPage("mhs-krs")}
            className="dashboard-navigation-btn"
          >
            <KRS />
            Kartu Rencana Studi
          </button>
          <button
            onClick={() => setPage("mhs-khs")}
            className="dashboard-navigation-btn"
          >
            <KHS />
            Kartu Hasil Studi
          </button>
          <button
            onClick={() => setPage("mhs-transkrip")}
            className="dashboard-navigation-btn"
          >
            <Transkrip />
            Transkrip Nilai
          </button>
        </section>
      </div>
    </DashboardCard>
  );
}
