"use client";
import { getToken } from "@/app/actions";
import Edit from "@/app/components/icons/Edit";
import Trash from "@/app/components/icons/Trash";
import { saveFile, deleteFile } from "@/app/helper";
import { getYear, getKRS, uploadKRS, deleteKRS } from "@/app/query";
import { getCurrentSemester } from "@/app/utils";
import { useState, useEffect, ChangeEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { Document } from "@prisma/client";
import DataLoading from "@/app/components/Tables/Loading";
import { useToast } from "@/app/contexts/ToastContext";

type krs = {
  [key: string]: Document;
};

export default function TableData() {
  const [semester, setSemester] = useState<number>();
  const [datas, setDatas] = useState<krs | undefined>({});
  const [isLoading, setIsLoading] = useState(true);
  const { addToast } = useToast();

  function fetch() {
    async function fetchsemester() {
      const token = await getToken();
      const res = await getYear(token.nim);

      const angkatan = Number(res);
      const semester = getCurrentSemester(angkatan);
      setSemester(semester);
    }

    async function fetchKRS() {
      const token = await getToken();
      const nim = token.nim as string;

      const allKRS = await getKRS(nim);

      setDatas(allKRS ?? {});
    }

    async function reqDatas() {
      await fetchsemester();
      await fetchKRS();
    }

    reqDatas().finally(() => setIsLoading(false));
  }

  useEffect(() => {
    fetch();
  }, []);

  async function uploadFile(
    e: ChangeEvent<HTMLInputElement>,
    semester: number
  ) {
    e.preventDefault();
    const file = e.target.files?.[0];

    if (!file) {
      addToast({
        message: "File tidak ada, silahkan coba lagi",
        type: "error",
      });
      return;
    }

    const token = await getToken();

    const nim = token.nim as string;
    const displayName = file.name;
    const type = file.type.split("/")[1];
    const fileName = uuidv4() + `.${type}`;

    const size = file.size / 1024 / 1024; // MB

    if (size >= 1) {
      addToast({
        message: "File terlalu besar, maksimal 1MB",
        type: "info",
      });
      return;
    }

    if (type !== "pdf") {
      addToast({
        message: "File harus berformat PDF",
        type: "info",
      });
      return;
    }

    const res = await uploadKRS(
      nim,
      semester.toString(),
      displayName,
      fileName
    );

    if (res.status === 500) {
      addToast({
        message: "Gagal mengupload file, silahkan coba lagi",
        type: "error",
      });
      return;
    }

    fetch();
    const buffer = await file.arrayBuffer();
    const data = new Uint8Array(buffer);

    await saveFile(fileName, data);
  }

  async function removeFile(id: number) {
    const res = await deleteKRS(id);

    if (!res) {
      addToast({
        message: "Gagal menghapus file, silahkan coba lagi",
        type: "error",
      });
      return;
    }

    await deleteFile(res.file);

    fetch();
  }

  return (
    <>
      {isLoading ? (
        <DataLoading />
      ) : (
        semester &&
        Array.from({ length: semester }, (v, i) => i).map((el, j) => (
          <tr key={j} className={j % 2 ? "bg-slate-500 bg-opacity-20" : ""}>
            <td className="border py-2">{j + 1}.</td>
            <td className="border py-2">{j + 1}</td>
            <td className="border py-2 box-content">
              {datas?.[`krs_sms${j + 1}`] ? (
                <button className="text-xs bg-red-600 px-4 py-1 rounded-md w-fit text-white">
                  <a
                    target="_blank"
                    href={`/uploads/${datas[`krs_sms${j + 1}`].file}`}
                  >
                    {datas[`krs_sms${j + 1}`] &&
                      datas[`krs_sms${j + 1}`].display_name}
                  </a>
                </button>
              ) : (
                <span className="text-red-600">Belum menambahkan data</span>
              )}
            </td>
            <td className="border py-2 text-white">
              <input
                type="file"
                name="krs"
                id={`krs_${j + 1}`}
                className="hidden"
                onChange={(e) => uploadFile(e, j + 1)}
              />
              <label
                htmlFor={datas?.[`krs_sms${j + 1}`] ? "" : `krs_${j + 1}`}
                className="mx-1 bg-green-400 hover:bg-green-500 inline-flex justify-center items-center size-8 rounded-sm cursor-pointer disabled:opacity-30"
              >
                <Edit />
              </label>
              <a
                target="_blank"
                href={
                  datas?.[`krs_sms${j + 1}`] &&
                  `/uploads/${datas[`krs_sms${j + 1}`].file}`
                }
                className="mx-1 bg-yellow-600 hover:bg-yellow-700 cursor-pointer inline-flex justify-center items-center size-8 rounded-sm disabled:opacity-30"
              >
                <Edit />
              </a>
              <button
                disabled={datas?.[`krs_sms${j + 1}`] ? false : true}
                onClick={
                  datas?.[`krs_sms${j + 1}`]
                    ? () => console.log("object")
                    : () => {}
                }
                className="mx-1 bg-sky-400 inline-flex justify-center items-center size-8 rounded-sm disabled:opacity-30"
              >
                <Edit />
              </button>
              <button
                disabled={datas?.[`krs_sms${j + 1}`] ? false : true}
                onClick={
                  datas?.[`krs_sms${j + 1}`]
                    ? () => removeFile(datas[`krs_sms${j + 1}`].dokumen_id)
                    : () => {}
                }
                className="mx-1 bg-red-500 inline-flex justify-center items-center size-8 rounded-sm disabled:opacity-30"
              >
                <Trash />
              </button>
            </td>
          </tr>
        ))
      )}
    </>
  );
}
