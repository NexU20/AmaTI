import KHS from "@/app/components/icons/KHS";
import KRS from "@/app/components/icons/KRS";
import Transkrip from "@/app/components/icons/Transkrip";

export default function HomeOrangtua() {
  return (
    <div>
      <p className="text-lg">Wali Mahasiswa Lalu Fathan</p>
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
  );
}
