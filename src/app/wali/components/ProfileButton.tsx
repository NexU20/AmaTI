import LogoutBtn from "@/app/components/LogoutBtn";
import { verifyToken } from "@/app/utils";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProfileButton() {
  const cookieParse = await cookies();
  const token = cookieParse.get("token")?.value as string;

  if (!token) {
    redirect("/");
  }

  const data = (await verifyToken(token)) as JwtPayload;

  return (
    <div className="relative">
      <LogoutBtn>
        <span className="text-left">{data.nama}</span>
        <span className="text-left text-xs">Orangtua / Wali</span>
      </LogoutBtn>
    </div>
  );
}
