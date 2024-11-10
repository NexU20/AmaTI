"use client";
import { usePage } from "@/app/contexts/PageContext";
import HomeDashboard from "./HomeDashboard";
import IsiKRS from "./Mahasiswa/IsiKRS";
import IsiKHS from "./Mahasiswa/IsiKHS";
import IsiTranskrip from "./Mahasiswa/IsiTranskrip";

type Pages = {
  [key: string]: JSX.Element;
};

const home = ["mhs-home", "ortu-home", null];
const pages: Pages = {
  "mhs-krs": <IsiKRS />,
  "mhs-khs": <IsiKHS />,
  "mhs-transkrip": <IsiTranskrip />,
};

export default function MainDashboard() {
  const { page } = usePage();

  return <>{home.includes(page) ? <HomeDashboard /> : pages[page as string]}</>;
}
