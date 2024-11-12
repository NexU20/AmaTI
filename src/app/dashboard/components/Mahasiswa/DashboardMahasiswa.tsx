"use client";
import React from "react";
import HomeMahasiswa from "./HomeMahasiswa";
import { usePage } from "@/app/contexts/PageContext";
import IsiKRS from "./IsiKRS";
import IsiKHS from "./IsiKHS";
import IsiTranskrip from "./IsiTranskrip";
import DashboardCard from "../DashboardCard";

const mahasiswaPages = {
  home: "mhs-home",
  "mhs-krs": "mhs-krs",
  "mhs-khs": "mhs-khs",
  "mhs-transkrip": "mhs-transkrip",
};

export default function DashboardMahasiswa() {
  const { page } = usePage();

  if (page == mahasiswaPages.home || !page) {
    return <HomeMahasiswa />;
  } else if (page == mahasiswaPages["mhs-krs"]) {
    return <IsiKRS />;
  } else if (page == mahasiswaPages["mhs-khs"]) {
    return <IsiKHS />;
  } else if (page == mahasiswaPages["mhs-transkrip"]) {
    return <IsiTranskrip />;
  }

  return (
    <DashboardCard title="Halaman tidak ditemukan">
      <p className="text-red-600">
        Halaman tidak ditemukan, harap menghubungi developer
      </p>
    </DashboardCard>
  );
}
