import { getKHS, getYear } from "@/app/query";
import { getToken } from "@/app/actions";
import { getCurrentSemester } from "@/app/utils";
import Edit from "../../icons/Edit";
import { getRole } from "@/app/helper";
import KhsUploadBtn from "./KhsUploadBtn";
import SeeKhsBtn from "../SeeDocument";
import DeleteFile from "../DeleteFile";

export default async function TableKHS() {
  const token = await getToken();
  const datas = await getKHS(token.nim);

  const role = await getRole();
  const isAuthorized = role === "mhs" || role === "prodi";

  const year = await getYear(token.nim);
  const angkatan = Number(year);
  const semester = getCurrentSemester(angkatan);

  return (
    <>
      {semester ? (
        Array.from({ length: semester }, (v, i) => i).map((el, j) => (
          <tr key={j} className={j % 2 ? "bg-slate-500 bg-opacity-20" : ""}>
            <td className="border py-2">{j + 1}.</td>
            <td className="border py-2">{j + 1}</td>
            <td className="border py-2 box-content">
              {datas?.[`khs_sms${j + 1}`] ? (
                <button className="text-xs bg-red-600 px-4 py-1 rounded-md w-fit text-white">
                  <a
                    target="_blank"
                    href={`/uploads/${datas[`khs_sms${j + 1}`].file}`}
                  >
                    {datas[`khs_sms${j + 1}`] &&
                      datas[`khs_sms${j + 1}`].display_name}
                  </a>
                </button>
              ) : (
                <span className="text-red-600">Belum menambahkan data</span>
              )}
            </td>
            <td className="border py-2 text-white">
              {isAuthorized ? (
                <>
                  <KhsUploadBtn
                    khs={`krs_${j + 1}`}
                    nim={token.nim}
                    semester={j + 1}
                    disabled={datas?.[`khs_sms${j + 1}`] ? true : false}
                  />
                  <SeeKhsBtn
                    disabled={datas?.[`khs_sms${j + 1}`] ? false : true}
                    file={datas?.[`khs_sms${j + 1}`]?.file}
                  >
                    <Edit />
                  </SeeKhsBtn>
                  <button
                    disabled={datas?.[`khs_sms${j + 1}`] ? false : true}
                    className="mx-1 bg-sky-400 inline-flex justify-center items-center size-8 rounded-sm disabled:opacity-30"
                  >
                    <Edit />
                  </button>
                  <DeleteFile
                    id={datas?.[`khs_sms${j + 1}`]?.dokumen_id}
                    disabled={datas?.[`khs_sms${j + 1}`] ? false : true}
                  />
                </>
              ) : (
                <SeeKhsBtn
                  disabled={datas?.[`khs_sms${j + 1}`] ? false : true}
                  file={datas?.[`khs_sms${j + 1}`]?.file}
                  className="py-2 px-8 !rounded-md"
                >
                  Lihat
                </SeeKhsBtn>
              )}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td className="py-2" colSpan={4}>
            Tidak ada Data
          </td>
        </tr>
      )}
    </>
  );
}
