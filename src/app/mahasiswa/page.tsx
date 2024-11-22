import Link from "next/link";
import DashboardCard from "../components/DashboardCard";
import KHS from "../components/icons/KHS";
import KRS from "../components/icons/KRS";
import Transkrip from "../components/icons/Transkrip";

export default function page() {
  return (
    <DashboardCard title="Selamat Datang">
      <div>
        <p className="text-lg text-red-600">
          Jangan lupa upload KRS, KHS, dan Transkrip Nilai Semestermu!
        </p>
        <section className="flex gap-x-12 justify-around p-12">
          <Link
            href="/mahasiswa/krs"
            className="dashboard-navigation-btn text-center"
          >
            <KRS />
            Kartu Rencana Studi
          </Link>
          <Link href="/mahasiswa/khs" className="dashboard-navigation-btn">
            <KHS />
            Kartu Hasil Studi
          </Link>
          <Link
            href="/mahasiswa/transkrip"
            className="dashboard-navigation-btn"
          >
            <Transkrip />
            Transkrip Nilai
          </Link>
        </section>
      </div>
    </DashboardCard>
  );
}
