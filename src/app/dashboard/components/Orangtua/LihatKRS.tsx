import DashboardCard from "../DashboardCard";

export default function LihatKRS() {
  return (
    <DashboardCard title="Kartu Rencana Studi">
      <table>
        <thead className="text-sm">
          <tr>
            <th className="border py-2 px-1">No</th>
            <th className="border py-2 px-2">Semester</th>
            <th className="border py-2 px-3">Berkas</th>
            <th className="border py-2 px-12">Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          <tr>
            <td className="border py-2">1.</td>
            <td className="border py-2">1</td>
            <td className="border py-2 box-content">
              <button className="text-xs bg-red-600 px-4 py-1 rounded-md w-fit text-white">
                <span>KRS-sms-1.pdf</span>
              </button>
            </td>
            <td className="border py-2 text-white">
              <button className="mx-1 bg-green-400 size-7">a</button>
              <button className="mx-1 bg-yellow-600 size-7">a</button>
            </td>
          </tr>
          <tr>
            <td className="border py-2">2.</td>
            <td className="border py-2">2</td>
            <td className="border py-2 box-content">
              <span className="text-red-600">Tidak ada berkas</span>
            </td>
            <td className="border py-2 text-white">
              <button className="mx-1 bg-green-400 size-7">a</button>
              <button className="mx-1 bg-yellow-600 size-7">a</button>
            </td>
          </tr>
        </tbody>
      </table>
    </DashboardCard>
  );
}
