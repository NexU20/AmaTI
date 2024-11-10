import Plus from "@/app/components/icons/Plus";

export default function DataMahasiswaC() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="pl-6 pr-4 flex justify-between">
        <div className="flex gap-x-12">
          <div className="flex gap-x-2 items-center">
            <label htmlFor="search" className="text-sm">
              Cari:
            </label>
            <input
              type="text"
              id="search"
              className="border-2 border-black text-sm outline-none px-2 max-w-64 focus:border-sidebar"
            />
          </div>
          <div className="flex gap-x-2 items-center">
            <label htmlFor="angkatan" className="text-sm">
              Angkatan:
            </label>
            <input
              type="number"
              id="angkatan"
              min={0}
              className="border-2 border-black text-sm outline-none px-2 max-w-24 focus:border-sidebar"
            />
          </div>
        </div>
        <button className="bg-sidebar hover:bg-sidebar-header poppins-semibold text-sm text-white py-2 px-3 rounded-md flex items-center justify-between place-self-start">
          <Plus />
          Tambah Mahasiswa
        </button>
      </div>
      <div>
        <table className="w-full text-sm">
          <thead className="">
            <tr>
              <th scope="col" className="py-3 border border-black">
                No
              </th>
              <th scope="col" className="py-3 border border-black w-1">
                NIM
              </th>
              <th scope="col" className="py-3 border border-black">
                Nama Lengkap
              </th>
              <th scope="col" className="py-3 border border-black">
                Angkatan
              </th>
              <th scope="col" className="py-3 border border-black">
                Tanggal Lahir
              </th>
              <th scope="col" className="py-3 border border-black w-1">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="border-x border-black px-4 py-2">1</td>
              <td className="border-x border-black px-4 py-2">
                11230910000097
              </td>
              <td className="border-x border-black px-4 py-2">Lindan Akbar</td>
              <td className="border-x border-black px-4 py-2">2023</td>
              <td className="border-x border-black px-4 py-2">30 Juli 2004</td>
              <td className="border-r border-black px-4 py-2 flex gap-x-1">
                <button className="p-2 text-white bg-green-500">KRS</button>
                <button className="p-2 text-white bg-pink-500">
                  Transkrip
                </button>
                <button className="p-2 text-white bg-yellow-600">KHS</button>
                <button className="p-2 text-white bg-sky-500">tes</button>
                <button className="p-2 text-white bg-red-500">tes</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
