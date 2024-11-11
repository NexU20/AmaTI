import DashboardCard from "../DashboardCard";

export default function IsiKRS() {
  return (
    <DashboardCard title="Kartu Hasil Studi">
      <table>
        <thead className="text-sm">
          <tr>
            <th className="border py-2 px-3">Berkas</th>
            <th className="border py-2 px-12">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          <tr>
            <td className="border py-2 box-content">
              <button className="text-xs bg-red-600 px-4 py-1 rounded-md w-fit text-white">
                <span>KHS-sms-1.pdf</span>
              </button>
            </td>
            <td className="border py-2">
              <button className="">Lihat</button>
            </td>
          </tr>
        </tbody>
      </table>
    </DashboardCard>
  );
}
