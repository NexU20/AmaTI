import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";

export async function GET(req: NextRequest) {
  // Mendapatkan nama file dari query parameter
  const { searchParams } = new URL(req.url);
  const file = searchParams.get("file");

  if (!file) {
    return NextResponse.json(
      { error: "File name is required." },
      { status: 400 }
    );
  }

  // Path file PDF di dalam folder public/uploads
  const filePath = path.join(process.cwd(), "public", "uploads", file);

  // Mengecek apakah file ada
  if (!existsSync(filePath)) {
    return NextResponse.json({ error: "File not found." }, { status: 404 });
  }

  try {
    // Membaca file sebagai buffer
    const fileBuffer = await fs.readFile(filePath);

    // Mengembalikan file sebagai response dengan header yang sesuai
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error reading file." }, { status: 500 });
  }
}
