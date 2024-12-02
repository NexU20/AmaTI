import Table from "../Table/Table";
import THead from "../Table/THead";
import { getAllStudents } from "@/app/query";
import DeleteButton from "./DeleteButton";
import NavigateActionButton from "./NavigateActionButton";
import EditMahasiswa from "./EditMahasiswa";

export default async function StudentsTable() {
  const students = await getAllStudents();

  return (
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
        {students?.length ? (
          students.map((student, i) => {
            return (
              <tr
                key={student.nim}
                className={`${
                  i % 2 && "bg-slate-200 bg-opacity-50"
                } transition-colors border-t border-slate-400 border-opacity-50 cursor-default hover:bg-slate-500 hover:bg-opacity-30`}
              >
                <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis">
                  {i + 1}
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
                <td className="py-2 text-center px-3 overflow-x-hidden overflow-ellipsis flex justify-center flex-wrap gap-x-3 gap-y-2">
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
                  <DeleteButton nim={student.user_id} />
                </td>
              </tr>
            );
          })
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
  );
}