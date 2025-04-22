"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function paginateAllStudent(page: number, perPage: number = 10) {
  try {
    const totalPosts = await prisma.student.count();

    const skip = (page - 1) * perPage;

    const students = await prisma.student.findMany({
      skip,
      take: perPage,
      select: {
        user_id: true,
        nim: true,
        nama: true,
        angkatan: true,
        ttl: true,
      },
      orderBy: { user_id: "desc" },
    });

    const isFirstPage = page === 1;
    const isLastPage = skip + students.length >= totalPosts;

    return { students, isLastPage, isFirstPage };
  } catch (error) {
    console.error("Error dalam pagiante data mahasiswa: ", error);
    return { students: [], isLastPage: true, isFirstPage: true };
  } finally {
    await prisma.$disconnect();
  }
}

export async function getStudent(nim: string) {
  try {
    const student = await prisma.student.findUnique({
      where: { nim },
    });

    return {
      status: 200,
      msg: "Sukses mendapatkan data mahasiswa",
      data: student,
    };
  } catch (error) {
    console.error("Error dalam mendapatkan data mahasiswa: ", error);
    return {
      status: 500,
      msg: "Gagal mendapatkan data mahasiswa",
      data: null,
    };
  } finally {
    await prisma.$disconnect();
  }
}
