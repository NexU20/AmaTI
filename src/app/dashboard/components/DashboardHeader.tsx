import DashboardRoleButton from "./DashboardRoleButton";

export default function DashboardHeader() {
  return (
    <header className="bg-white flex items-center justify-between grow px-8 border-b border-slate-300">
      <div className="flex flex-col gap-y-1">
        <p className="poppins-semibold text-2xl">Sistem Pantau Akademik</p>
        <p className="poppins-light text-sm">
          Prodi Teknik Informatika UIN Syarif Hidayatullah Jakarta
        </p>
      </div>
      <DashboardRoleButton />
    </header>
  );
}
