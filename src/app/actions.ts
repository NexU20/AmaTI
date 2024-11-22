"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";
import { AddStudent, findStudent, loginQuery } from "./query";

const prisma = new PrismaClient();

async function setLoginCookie(role: string) {
  const cookie = await cookies();

  cookie.set("role", role, { httpOnly: true });
}

export async function setUserLoginID(role: string) {
  await setLoginCookie(role);

  if (role === "mhs") {
    redirect("/mahasiswa");
  } else if (role === "ortu") {
    redirect("/wali");
  } else if (role === "prodi") {
    redirect("/prodi");
  }
}

async function Login(username: string, password: string) {
  const user = await loginQuery(username, password);

  if (!user) {
    return null;
  }

  const res = {
    id: user.user_id,
    nim: user.username,
    nama: user.Student?.nama,
    role: user.role,
  };

  const token = generateToken(res.id, res.nim, res.nama as string, res.role);
  const cookie = await cookies();
  cookie.set("token", token);

  if (user.role === "user") {
    return res;
  }

  return res;
}

export async function loginAction(data: FormData) {
  const input = {
    username: data.get("user") as string,
    password: data.get("password") as string,
  };

  const res = await Login(input.username, input.password);
  return res;
}

export async function addStudentAction(data: FormData) {
  const input = {
    name: data.get("name") as string,
    nim: data.get("nim") as string,
    angkatan: data.get("angkatan") as string,
    password: data.get("password") as string,
    father: data.get("father") as string,
    mother: data.get("mother") as string,
    ttl: data.get("ttl") as string,
  };

  const student = await findStudent(input.nim);

  if (student) {
    return false;
  }

  const res = await AddStudent(
    input.name,
    input.nim,
    input.angkatan,
    input.password,
    input.father,
    input.mother,
    input.ttl
  );
  revalidatePath("/dashboard");

  return res ? true : false;
}

function generateToken(
  user_id: number,
  nim: string,
  nama: string,
  role: "user" | "prodi"
) {
  const payload = {
    user_id,
    nim,
    nama,
    role,
  };

  const secret = process.env.SECRET_TOKEN;

  const token = jwt.sign(payload, secret ?? "secretajah", { expiresIn: "1h" }); // Token berlaku selama 1 jam
  return token;
}

export async function verifyToken(token: string) {
  const secret = process.env.SECRET_TOKEN || "secretajah";

  return jwt.verify(token, secret);
}

export async function getKRS(nim: string) {
  try {
    const data = prisma.document.findMany({
      where: {
        student: { nim },
        jenis: { startsWith: "krs_" },
      },
      orderBy: {
        jenis: "asc",
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function getYear(nim: string) {
  try {
    const student = await prisma.student.findFirst({
      where: { nim },
      select: { angkatan: true },
    });

    return student?.angkatan;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function getToken() {
  const cookie = await cookies();
  const tokenStr = cookie.get("token")?.value as string;

  const token = (await verifyToken(tokenStr)) as JwtPayload;

  return token;
}
