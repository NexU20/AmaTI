import DashboardCard from "@/app/components/DashboardCard";

export default function PengaturanAkun() {
  return (
    <DashboardCard title="Pengaturan Profil">
      <div className="h-96 flex">
        <section
          id="account"
          className="grow flex flex-col gap-y-2 gap-x-4 flex-wrap pt-8"
        >
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Nama Mahasiswa</span>
            <span>Lalu Fathan</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">NIM Mahasiswa</span>
            <span>11230910000007</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">TTL Mahasiswa</span>
            <span>Mataram, 1 Mei 2005</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Nama Ayah/Wali</span>
            <span>-</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Nama Ibu</span>
            <span>-</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">No. Telp/WA Ayah/Wali</span>
            <span>-</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">No. Telp/WA Ibu</span>
            <span>-</span>
          </div>
          <div className="flex flex-col gap-y-2 min-h-16">
            <span className="poppins-semibold">Alamat Rumah</span>
            <span>-</span>
          </div>
        </section>
        <section id="info" className="w-fit flex justify-end items-start">
          <div className="flex flex-col bg-blue-400 gap-y-3 w-fit py-4 px-8 text-white rounded-md">
            <span>Mohon isi dan lengkapi data wali</span>
            <span>Klik ini untuk mengedit teks</span>
          </div>
        </section>
      </div>
    </DashboardCard>
  );
}
