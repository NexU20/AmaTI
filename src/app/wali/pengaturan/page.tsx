import { getToken } from "@/app/actions";
import DashboardCard from "@/app/components/DashboardCard";
import { getStudent } from "@/app/query";
import { redirect } from "next/navigation";
import Edit from "./components/Edit";

export default async function PengaturanAkun() {
  const token = await getToken();

  if (!token) {
    redirect("/");
  }

  const data = await getStudent(token.nim);

  return (
    <DashboardCard title="Pengaturan Profil">
      <div className="h-96 flex">
        <section
          id="account"
          className="grow flex flex-col gap-y-2 gap-x-4 flex-wrap pt-8"
        >
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Nama Mahasiswa</span>
            <span>{data?.nama || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">NIM Mahasiswa</span>
            <span>{data?.nim || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">TTL Mahasiswa</span>
            <span>{data?.ttl || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Nama Ayah/Wali</span>
            <span>{data?.ayah_wali || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Nama Ibu</span>
            <span>{data?.ibu || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">No. Telp/WA Ayah/Wali</span>
            <span>{data?.no_ayah || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">No. Telp/WA Ibu</span>
            <span>{data?.no_ibu || "-"}</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Alamat Rumah</span>
            <span>{data?.alamat || "-"}</span>
          </div>
        </section>
        <section id="info" className="w-fit flex flex-col gap-y-4">
          <div className="flex flex-col bg-blue-400 gap-y-3 w-fit py-4 px-8 text-white rounded-md">
            <span>Mohon isi dan lengkapi data wali</span>
            <span>Klik ini untuk mengedit teks</span>
          </div>
          <Edit nim={data?.nim} />
        </section>
      </div>
    </DashboardCard>
  );
}
