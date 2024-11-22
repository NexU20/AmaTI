"use server";

import fs from "fs/promises";
import { cookies } from "next/headers";

export async function saveFile(filename: string, data: Uint8Array) {
  await fs.writeFile(`./public/uploads/${filename}`, data);
}

export async function deleteFile(filename: string) {
  await fs.unlink(`./public/uploads/${filename}`);
}

export async function getRole() {
  const cookie = await cookies();
  const role = cookie.get("role");

  return role?.value;
}

export async function logout() {
  const cookie = await cookies();
  cookie.set("token", "", { expires: new Date(0) });
  cookie.set("role", "", { expires: new Date(0) });
}
