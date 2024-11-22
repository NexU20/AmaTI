import jwt from "jsonwebtoken";

export function getCurrentSemester(yearOfEntry: number): number {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  const yearsElapsed = currentYear - yearOfEntry;

  const currentSemester = yearsElapsed * 2 + (currentMonth >= 8 ? 1 : 0);

  return currentSemester;
}

export function generateToken(
  user_id: string,
  nim: string,
  nama: string
): string {
  const payload = {
    user_id,
    nim,
    nama,
  };

  const token = jwt.sign(payload, "process.env.SECRET_TOKEN", {
    expiresIn: "1w",
  }); // Token berlaku selama 1 minggu
  return token;
}

export async function verifyToken(token: string) {
  const secret = process.env.SECRET_TOKEN || "secretajah";

  return jwt.verify(token, secret);
}
