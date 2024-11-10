"use client";

import { useRole } from "@/app/contexts/RoleContext";
import DashboardCard from "./DashboardCard";
import { useEffect, useState } from "react";
import DataMahasiswaC from "./DataMahasiswaC";
import HomeMahasiswa from "./Mahasiswa/HomeMahasiswa";
import HomeOrangtua from "./Orangtua/HomeOrangtua";

const HomeComponents = {
  mhs: <HomeMahasiswa />,
  ortu: <HomeOrangtua />,
  prodi: <DataMahasiswaC />,
};

export default function HomeDashboard() {
  const [title, setTitle] = useState("Selamat Datang");
  const { role } = useRole();

  useEffect(() => {
    if (role === "mhs" || role === "ortu") {
      setTitle("Selamat Datang");
    } else if (role === "prodi") {
      setTitle("Data Mahasiswa");
    }
  }, [role]);

  return <DashboardCard title={title}>{HomeComponents[role]}</DashboardCard>;
}
