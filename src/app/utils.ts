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

export function getTahunAjaran() {
  const sekarang = new Date();
  const tahunSekarang = sekarang.getFullYear();
  const bulanSekarang = sekarang.getMonth() + 1; // bulan dimulai dari 0, jadi ditambah 1

  let tahunAjaranSekarang: string;
  let tahunAjaranDepan: string;

  // Asumsi tahun ajaran dimulai pada bulan Juli (07)
  if (bulanSekarang >= 7) {
    tahunAjaranSekarang = `${tahunSekarang}/${tahunSekarang + 1}`;
    tahunAjaranDepan = `${tahunSekarang + 1}/${tahunSekarang + 2}`;
  } else {
    tahunAjaranSekarang = `${tahunSekarang - 1}/${tahunSekarang}`;
    tahunAjaranDepan = `${tahunSekarang}/${tahunSekarang + 1}`;
  }

  return {
    current: tahunAjaranSekarang,
    next: tahunAjaranDepan,
  };
}

export function getPossibleYearBatches(): string[] {
  const currentYear = new Date().getFullYear();
  const maxDuration = 7;
  const startYear = currentYear - maxDuration + 1;
  const batches: string[] = [];

  for (let year = startYear; year <= currentYear; year++) {
    batches.push(`${year}/${year + 1}`);
  }

  return batches.sort((a, b) => (a > b ? -1 : 1));
}

export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);

  // Array nama bulan
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Okober",
    "November",
    "Desember",
  ];

  // Ambil bagian tanggal, bulan, dan tahun
  const day = date.getDate().toString().padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format hasil
  return `${day} ${month} ${year}`;
}

export function paginateArray<T>(
  array: T[],
  pageSize: number,
  pageNumber: number
): T[] {
  // Validasi parameter
  if (pageSize <= 0 || pageNumber < 1) {
    throw new Error(
      "Page size must be greater than 0 and page number must be at least 1."
    );
  }

  const startIndex = (pageNumber - 1) * pageSize; // Indeks awal
  const endIndex = startIndex + pageSize; // Indeks akhir

  return array.slice(startIndex, endIndex); // Ambil elemen sesuai halaman
}
