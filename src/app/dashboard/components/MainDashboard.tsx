"use client";
import { usePage } from "@/app/contexts/PageContext";
import HomeDashboard from "./HomeDashboard";
import IsiKRS from "./Mahasiswa/IsiKRS";
import IsiKHS from "./Mahasiswa/IsiKHS";
import IsiTranskrip from "./Mahasiswa/IsiTranskrip";
import LihatKRS from "./Orangtua/LihatKRS";
import LihatKHS from "./Orangtua/LihatKHS";
import LihatTranskrip from "./Orangtua/LihatTranskrip";
import PengaturanAkun from "./Orangtua/PengaturanAkun";
import KalenderAkademik from "./Orangtua/KalenderAkademik";

type Pages = {
  [key: string]: JSX.Element;
};

const home = ["mhs-home", "ortu-home", null];
const pages: Pages = {
  "mhs-krs": <IsiKRS />,
  "mhs-khs": <IsiKHS />,
  "mhs-transkrip": <IsiTranskrip />,
  "ortu-krs": <LihatKRS />,
  "ortu-khs": <LihatKHS />,
  "ortu-transkrip": <LihatTranskrip />,
  "ortu-pengaturan": <PengaturanAkun />,
  "ortu-kalender": <KalenderAkademik />,
};

export default function MainDashboard() {
  const { page } = usePage();

  if (home.includes(page) || page === null) {
    return <HomeDashboard />;
  }

  return pages[page];
}
