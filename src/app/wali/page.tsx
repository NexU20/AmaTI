import DashboardCard from "@/app/components/DashboardCard";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyToken } from "../actions";
import HomeNavigation from "./components/HomeNavigation";

export default async function HomeOrangtua() {
  const cookieParse = await cookies();
  const token = cookieParse.get("token")?.value as string;

  if (!token) {
    redirect("/");
  }

  const data = (await verifyToken(token)) as JwtPayload;

  return (
    <DashboardCard title="Selamat Datang">
      <div>
        <p className="text-lg">Wali Mahasiswa {data.nama}</p>
        <section className="flex gap-x-12 justify-around p-12">
          <HomeNavigation type="krs" />
          <HomeNavigation type="khs" />
          <HomeNavigation type="nilai" />
          <HomeNavigation type="kalender" />
        </section>
      </div>
    </DashboardCard>
  );
}
