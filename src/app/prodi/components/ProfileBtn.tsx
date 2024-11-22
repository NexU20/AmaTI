import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfileButton() {
  const cookie = await cookies();
  const role = cookie.get("role");

  if (!role) {
    redirect("/");
  }

  return (
    <div className="relative">
      <button className="text-slate-600 hover:bg-opacity-20 hover:bg-slate-400 poppins-regular px-6 py-2 rounded-full flex flex-col justify-start">
        <span className="text-left">Admin Prodi</span>
      </button>
    </div>
  );
}
