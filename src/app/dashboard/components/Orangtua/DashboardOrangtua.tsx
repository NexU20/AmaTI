"use client";

import { usePage } from "@/app/contexts/PageContext";
import DashboardCard from "../DashboardCard";
import IsiKHS from "../Mahasiswa/IsiKHS";
import IsiTranskrip from "../Mahasiswa/IsiTranskrip";
import KalenderAkademik from "./KalenderAkademik";
import IsiKRS from "./LihatKHS";
import PengaturanAkun from "./PengaturanAkun";
import HomeOrangtua from "./HomeOrangtua";

const orangtuaPage = {
  home: "ortu-home",
  krs: "ortu-krs",
  khs: "ortu-khs",
  transkrip: "ortu-transkrip",
  pengaturan: "ortu-pengaturan",
  kalender: "ortu-kalender",
};

export default function DashboardOrangtua() {
  const { page } = usePage();

  if (page == orangtuaPage.home || !page) {
    return <HomeOrangtua />;
  } else if (page == orangtuaPage["krs"]) {
    return <IsiKRS />;
  } else if (page == orangtuaPage["khs"]) {
    return <IsiKHS />;
  } else if (page == orangtuaPage["transkrip"]) {
    return <IsiTranskrip />;
  } else if (page == orangtuaPage["pengaturan"]) {
    return <PengaturanAkun />;
  } else if (page == orangtuaPage["kalender"]) {
    return <KalenderAkademik />;
  }

  return (
    <DashboardCard title="Halaman tidak ditemukan">
      <p className="text-red-600">
        Halaman tidak ditemukan, harap menghubungi developer
      </p>
    </DashboardCard>
  );
}
