"use client";
import { useRole } from "@/app/contexts/RoleContext";
import ContentProdi from "./Prodi/ContentProdi";
import ContentOrangtua from "./Orangtua/ContentOrangtua";
import ContentMahasiswa from "./Mahasiswa/ContentMahasiswa";
import { useRouter } from "next/navigation";

export default function DashboardContents() {
  const { role } = useRole();
  const router = useRouter();

  if (role == "prodi") {
    return <ContentProdi />;
  } else if (role == "ortu") {
    return <ContentOrangtua />;
  } else if (role == "mhs") {
    return <ContentMahasiswa />;
  } else {
    router.push("/");
  }
}
