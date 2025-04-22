/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Ref, useEffect, useState } from "react";
import { Student } from "@prisma/client";
import { useToast } from "@/app/contexts/ToastContext";
import { getStudent } from "@/query/student-query";

export default function StudentDatailsDialog({
  nim,
  ref,
  closeAction,
}: {
  nim: string | undefined;
  ref?: Ref<HTMLDivElement>;
  closeAction: () => void;
}) {
  const { addToast } = useToast();
  const [datas, setDatas] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      if (!nim) {
        addToast({
          message: "Terdapat Kesalahan",
          type: "warning",
        });
        return;
      }

      const student = await getStudent(nim);

      if (student.status !== 200) {
        addToast({
          message: "Terdapat Kesalahan",
          type: "warning",
        });
        return;
      }

      setIsLoading(false);
      setDatas(student.data);
    })();
  }, [nim, addToast]);

  useEffect(() => {
    console.log(datas);
  }, [datas]);

  return (
    <div ref={ref} className="bg-white p-4 rounded-lg w-1/3">
      <h1 className="text-2xl poppins-bold mb-4">Data Mahasiswa</h1>
      <div className="flex flex-col gap-y-4">
        <section className="flex flex-col gap-y-3">
          <div className="flex gap-x-4">
            <div className="w-1/2">
              <p className="label-input">Nama Mahasiswa</p>
              <div className="input-box text-start">{datas?.nama}</div>
            </div>
            <div className="w-1/2">
              <p className="label-input">NIM Mahasiswa</p>
              <div className="input-box text-start">{datas?.nim}</div>
            </div>
          </div>
          <div>
            <p className="label-input">Tempat dan Tanggal Lahir</p>
            <div className="input-box text-start">{datas?.ttl}</div>
          </div>
          <div>
            <p className="label-input">Angkatan</p>
            <div className="input-box text-start">{datas?.angkatan}</div>
          </div>
        </section>
        <section className="flex flex-col gap-y-3 my-2">
          <div className="flex gap-x-4">
            <div className="flex flex-col gap-y-3 w-1/2">
              <div>
                <p className="label-input">Nama Ayah</p>
                <div className="input-box text-start">{datas?.ayah_wali}</div>
              </div>
              <div>
                <p className="label-input">Nama Ibu</p>
                <div className="input-box text-start">{datas?.ibu}</div>
              </div>
            </div>
            <div className="flex flex-col gap-y-3 w-1/2">
              <div className="flex flex-col">
                <label className="label-input" htmlFor="telp-ayah">
                  No. Telp Ayah / Wali
                </label>
                <div className="input-box text-start min-h-9">
                  {datas?.no_ayah || "-"}
                </div>
              </div>
              <div className="flex flex-col">
                <label className="label-input" htmlFor="telp-ibu">
                  No. Telp Ibu
                </label>
                <div className="input-box text-start min-h-9">
                  {datas?.no_ibu || "-"}
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="label-input">Email Wali</p>
            <div className="input-box text-start min-h-9">
              {datas?.email_wali || "-"}
            </div>
          </div>
        </section>
        <div className="flex flex-col">
          <label htmlFor="alamat" className="w-fit">
            Alamat Rumah
          </label>
          <div className="input-box text-start min-h-9">
            {datas?.alamat || "-"}
          </div>
        </div>
        <button
          type="button"
          onClick={closeAction}
          className="bg-red-500 hover:bg-red-600 py-2 text-white font-semibold w-fit px-4 rounded-md self-end mt-2"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="h-10 rounded-md min-w-72 bg-slate-500 bg-opacity-30 animate-pulse"></div>
  );
}
