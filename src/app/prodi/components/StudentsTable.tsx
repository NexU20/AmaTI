"use client";
import Table from "../Table/Table";
import THead from "../Table/THead";
// import { getAllStudents } from "@/app/query";
import DeleteButton from "./DeleteButton";
import NavigateActionButton from "./NavigateActionButton";
import EditMahasiswa from "./EditMahasiswa";
import { Student } from "@prisma/client";
import { paginateArray } from "@/app/utils";
import { useState } from "react";
import StudentDetails from "./StudentDatails";

type StudentsTableProps = Pick<
  Student,
  "user_id" | "nim" | "nama" | "angkatan" | "ttl"
>;

export default function StudentsTable({
  data,
}: {
  data: StudentsTableProps[] | undefined;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(5);

  function isFirstpage() {
    return currentPage === 1;
  }

  function isLastPage() {
    if (!data) {
      return;
    }

    return currentPage === Math.ceil(data?.length / studentsPerPage);
  }

  return (
    <>
      <Table>
        <THead>
          <th className="p-3 overflow-hidden border-r border-black">No</th>
          <th className="p-3 w-[15%] overflow-hidden border-r border-black">
            NIM
          </th>
          <th className="p-3 w-1/5 overflow-hidden border-r border-black">
            Nama Lengkap
          </th>
          <th className="p-3 w-1/12 overflow-hidden border-r border-black">
            Angkatan
          </th>
          <th className="p-3 w-[18%] overflow-hidden border-r border-black">
            Tanggal Lahir
          </th>
          <th className="p-3 w-2/6 overflow-hidden border-l border-black">
            Action
          </th>
        </THead>
        <tbody className="">
          {data?.length ? (
            paginateArray(data, studentsPerPage, currentPage).map(
              (student, i) => {
                return (
                  <tr
                    key={student.nim}
                    className={`${
                      i % 2 && "bg-slate-200 bg-opacity-50"
                    } transition-colors border-t border-slate-400 border-opacity-50 cursor-default hover:bg-slate-500 hover:bg-opacity-30`}
                  >
                    <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis">
                      {(currentPage - 1) * studentsPerPage + i + 1}
                    </td>
                    <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis">
                      {student.nim}
                    </td>
                    <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis">
                      {student.nama}
                    </td>
                    <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis">
                      {student.angkatan}
                    </td>
                    <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis">
                      {student.ttl}
                    </td>
                    <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis flex justify-center flex-wrap gap-x-3 gap-y-2 items-center">
                      <NavigateActionButton
                        nim={student.nim}
                        action="krs"
                        className="bg-green-500 hover:bg-green-600"
                      >
                        KRS
                      </NavigateActionButton>
                      <NavigateActionButton
                        nim={student.nim}
                        action="nilai"
                        className="bg-pink-500 hover:bg-pink-600"
                      >
                        Transkrip
                      </NavigateActionButton>
                      <NavigateActionButton
                        nim={student.nim}
                        action="khs"
                        className="bg-yellow-500 hover:bg-yellow-600"
                      >
                        KHS
                      </NavigateActionButton>
                      <EditMahasiswa nim={student.nim} />
                      <StudentDetails nim={student.nim} />
                      <DeleteButton nim={student.user_id} />
                    </td>
                  </tr>
                );
              }
            )
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center py-4 text-lg poppins-semibold"
              >
                Tidak ada Mahasiswa
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <div className="mt-4 text-sm flex justify-between">
        <div>
          <span>
            {data
              ? `Menampilkan ${
                  paginateArray(data, studentsPerPage, currentPage).length
                } dari ${data.length} Mahasiswa`
              : "Silahkan tambahkan data terlebih dahulu"}
          </span>
        </div>
        <div>
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`py-2 w-36 border-slate-500 ${
              isFirstpage() && "hidden"
            } ${
              isFirstpage() || isLastPage()
                ? "border rounded-md"
                : "border-y border-l rounded-l-md"
            }`}
          >
            Sebelumnya
          </button>
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`py-2 w-36 border border-slate-500 ${
              isFirstpage() ? "rounded-md" : "rounded-r-md"
            } ${isLastPage() && "hidden"}`}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </>
  );
}
