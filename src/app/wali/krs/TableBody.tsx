import { getToken } from "@/app/actions";
import { getYear, getKRS } from "@/app/query";
import { getCurrentSemester } from "@/app/utils";

export default async function TableBody() {
  const token = await getToken();
  const nim = token.nim as string;

  const tahun = await getYear(nim);
  const angkatan = Number(tahun);
  const semester = getCurrentSemester(angkatan);

  const datas = await getKRS(nim);

  return (
    <>
      {semester &&
        Array.from({ length: semester }, (v, i) => i).map((el, j) => (
          <tr key={j} className={j % 2 ? "bg-slate-500 bg-opacity-20" : ""}>
            <td className="border py-3">{j + 1}.</td>
            <td className="border py-3">{j + 1}</td>
            <td className="border py-3 box-content">
              {datas?.[`krs_sms${j + 1}`] ? (
                <button className="text-xs bg-red-600 px-4 py-1 rounded-md w-fit text-white">
                  <span>{datas[`krs_sms${j + 1}`].display_name}</span>
                </button>
              ) : (
                <span className="text-red-600">Tidak ada berkas</span>
              )}
            </td>
            <td className="border py-3 text-white">
              {datas?.[`krs_sms${j + 1}`] ? (
                <a
                  href={`/uploads/${datas[`krs_sms${j + 1}`].file}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-sky-500 text-sm poppins-semibold px-4 py-2 rounded"
                >
                  Lihat
                </a>
              ) : (
                <button
                  disabled
                  className="bg-sky-500 text-sm poppins-semibold px-4 py-2 rounded disabled:opacity-20"
                >
                  Lihat
                </button>
              )}
            </td>
          </tr>
        ))}
    </>
  );
}
