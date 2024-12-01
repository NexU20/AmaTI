/* eslint-disable @typescript-eslint/no-unused-vars */
import { getRole } from "@/app/helper";
import { getCalendar } from "@/app/query";
import SeeDocument from "../SeeDocument";
import Eye from "../../icons/Eye";
import DeleteFile from "../DeleteFile";
import { getToken } from "@/app/actions";

export default async function Kalender() {
  const datasReq = getCalendar();
  const tokenReq = getToken();

  const [data, token] = await Promise.all([datasReq, tokenReq]);
  const isAuthorized = token.role === "prodi";

  return (
    <>
      {data?.length ? (
        data.map((item, index) => (
          <tr key={item.dokumen_id} className="border-t">
            <td className="border-r py-2 px-1">{index + 1}</td>
            <td className="border-r py-2 px-2">{item.jenis.slice(9)}</td>
            <td className="border-r py-2 px-3">
              <button className="text-xs bg-red-600 px-4 py-1 rounded-md w-fit text-white">
                <a target="_blank" href={`/api/pdf?file=${item.file}`}>
                  {item.display_name}
                </a>
              </button>
            </td>
            <td className="py-2 px-12 flex items-center justify-center">
              <SeeDocument file={item.file} disabled={item ? false : true}>
                <Eye />
              </SeeDocument>
              {isAuthorized && (
                <DeleteFile
                  name={item.file}
                  id={item.dokumen_id}
                  disabled={item ? false : true}
                />
              )}
            </td>
          </tr>
        ))
      ) : (
        <NoData />
      )}
    </>
  );
}

function NoData() {
  return (
    <tr>
      <td colSpan={4} className="py-4">
        <p className="poppins-semibold">Tidak ada data</p>
      </td>
    </tr>
  );
}
