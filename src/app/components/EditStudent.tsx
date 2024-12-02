"use client";

import { Ref, useEffect, useState } from "react";
import { useToast } from "../contexts/ToastContext";
import { getStudent, updateData } from "../query";
import { Student } from "@prisma/client";

export default function EditStudent({
  nim,
  ref,
}: {
  nim: string | undefined;
  ref?: Ref<HTMLDivElement>;
}) {
  const { addToast } = useToast();
  const [datas, setDatas] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function saveAction(FormData: FormData) {
    if (!datas) {
      addToast({
        message: "Terdapat Kesalahan",
        type: "warning",
      });
      return;
    }

    const ayah = FormData.get("ayah") as string;
    const telpAyah = FormData.get("telp-ayah") as string;

    const ibu = FormData.get("ibu") as string;
    const telpIbu = FormData.get("telp-ibu") as string;

    const alamat = FormData.get("alamat") as string;

    const res = await updateData(
      datas.nim,
      ayah,
      ibu,
      telpAyah,
      telpIbu,
      alamat
    );

    if (res.status !== 200) {
      addToast({
        message: "Gagal Mengubah Data",
        type: "error",
      });
      return;
    }

    addToast({
      message: "Sukses Mengubah Data",
      type: "success",
    });
  }

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

      if (!student) {
        addToast({
          message: "Terdapat Kesalahan",
          type: "warning",
        });
        return;
      }

      setIsLoading(false);
      setDatas(student);
    })();
  }, [nim, addToast]);

  return (
    <div ref={ref} className="bg-white p-4 rounded-lg">
      <h1 className="text-2xl poppins-bold mb-4">Ubah Data</h1>
      <form action={saveAction} className="flex flex-col gap-y-4">
        <section className="flex gap-x-4">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label className="label-input" htmlFor="nama">
                Nama Ayah
              </label>
              {isLoading ? (
                <LoadingState />
              ) : (
                <input
                  name="ayah"
                  type="text"
                  className="input-box focus:border-sky-500"
                  id="ayah"
                  defaultValue={datas?.ayah_wali || ""}
                />
              )}
            </div>
            <div className="flex flex-col">
              <label className="label-input" htmlFor="ibu">
                Nama Ibu
              </label>
              {isLoading ? (
                <LoadingState />
              ) : (
                <input
                  name="ibu"
                  type="text"
                  className="input-box focus:border-sky-500"
                  id="ibu"
                  defaultValue={datas?.ibu || ""}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col">
              <label className="label-input" htmlFor="telp-ayah">
                No. Telp Ayah / Wali
              </label>
              {isLoading ? (
                <LoadingState />
              ) : (
                <input
                  name="telp-ayah"
                  type="text"
                  className="input-box focus:border-sky-500"
                  id="telp-ayah"
                  defaultValue={datas?.no_ayah || ""}
                />
              )}
            </div>
            <div className="flex flex-col">
              <label className="label-input" htmlFor="telp-ibu">
                No. Telp Ibu
              </label>
              {isLoading ? (
                <LoadingState />
              ) : (
                <input
                  name="telp-ibu"
                  type="text"
                  className="input-box focus:border-sky-500"
                  id="telp-ibu"
                  defaultValue={datas?.no_ibu || ""}
                />
              )}
            </div>
          </div>
        </section>
        <div className="flex flex-col">
          <label htmlFor="alamat" className="w-fit">
            Alamat Rumah
          </label>
          {isLoading ? (
            <LoadingState />
          ) : (
            <input
              name="alamat"
              type="text"
              className="input-box focus:border-sky-500"
              id="alamat"
              defaultValue={datas?.alamat || ""}
            />
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 py-2 text-white font-semibold w-fit px-4 rounded-md self-end mt-2"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="h-10 rounded-md min-w-60 bg-slate-500 bg-opacity-30 animate-pulse"></div>
  );
}
