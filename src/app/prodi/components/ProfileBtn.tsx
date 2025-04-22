import LogoutBtn from "@/app/components/LogoutBtn";
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
      <LogoutBtn>
        <span className="text-left">Admin Prodi</span>
      </LogoutBtn>
    </div>
  );
}
