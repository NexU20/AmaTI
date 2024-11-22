"use server";

import { Document, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

type DocumentsT = {
  [key: string]: Document;
};

export async function uploadKRS(
  nim: string,
  semester: string,
  displayName: string,
  fileName: string
) {
  try {
    const res = await prisma.document.create({
      data: {
        jenis: `krs_sms${semester}`,
        file: fileName,
        display_name: displayName,
        student: {
          connect: {
            nim: nim,
          },
        },
      },
    });

    if (!res) {
      return {
        status: 500,
        message: "Gagal mengunggah KRS",
        data: null,
      };
    }

    return {
      status: 200,
      message: "Berhasil mengunggah KRS",
      data: res,
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "Kesalahan pada server",
      data: null,
    };
  } finally {
    prisma.$disconnect();
  }
}

export async function uploadKHS(
  nim: string,
  semester: string,
  displayName: string,
  fileName: string
) {
  try {
    const res = await prisma.document.create({
      data: {
        jenis: `khs_sms${semester}`,
        file: fileName,
        display_name: displayName,
        student: {
          connect: {
            nim: nim,
          },
        },
      },
    });

    if (!res) {
      return {
        status: 500,
        message: "Gagal mengunggah KRS",
        data: null,
      };
    }

    revalidatePath("/mahasiswa/khs");
    return {
      status: 200,
      message: "Berhasil mengunggah KRS",
      data: res,
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "Kesalahan pada server",
      data: null,
    };
  } finally {
    prisma.$disconnect();
  }
}

export async function uploadNilai(
  nim: string,
  semester: string,
  displayName: string,
  fileName: string
) {
  try {
    const res = await prisma.document.create({
      data: {
        jenis: `nilai_sms${semester}`,
        file: fileName,
        display_name: displayName,
        student: {
          connect: {
            nim: nim,
          },
        },
      },
    });

    if (!res) {
      return {
        status: 500,
        message: "Gagal mengunggah KRS",
        data: null,
      };
    }

    revalidatePath("/mahasiswa/transkrip");
    return {
      status: 200,
      message: "Berhasil mengunggah KRS",
      data: res,
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      message: "Kesalahan pada server",
      data: null,
    };
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

export async function getKRS(nim: string) {
  try {
    const data = await prisma.document.findMany({
      where: {
        student: { nim },
        jenis: { startsWith: "krs_" },
      },
      orderBy: {
        jenis: "asc",
      },
    });

    const krs: DocumentsT = {};
    data.forEach((el) => {
      krs[el.jenis] = el;
    });

    return krs;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    prisma.$disconnect();
  }
}

export async function getKHS(nim: string) {
  try {
    const datas = await prisma.document.findMany({
      where: {
        student: { nim },
        jenis: { startsWith: "khs_" },
      },
      orderBy: { jenis: "asc" },
    });

    const khs: DocumentsT = {};
    datas.forEach((el) => {
      khs[el.jenis] = el;
    });

    return khs;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    prisma.$disconnect();
  }
}

export async function getTranskrip(nim: string) {
  try {
    const datas = await prisma.document.findMany({
      where: {
        student: { nim },
        jenis: { startsWith: "nilai_" },
      },
      orderBy: { jenis: "asc" },
    });

    const transkrip: DocumentsT = {};
    datas.forEach((el) => {
      transkrip[el.jenis] = el;
    });

    return transkrip;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    prisma.$disconnect();
  }
}

export async function deleteStudent(id: number) {
  try {
    await prisma.user.delete({ where: { user_id: id } });

    revalidatePath("/dashboard");
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function getAllStudents() {
  try {
    const students = await prisma.student.findMany({
      select: {
        user_id: true,
        nim: true,
        nama: true,
        angkatan: true,
        ttl: true,
      },
      orderBy: { user_id: "desc" },
    });

    return students;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function deleteKRS(id: number) {
  try {
    const res = await prisma.document.delete({
      where: {
        dokumen_id: id,
      },
    });

    return res;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function deleteFile(id: number) {
  try {
    const res = await prisma.document.delete({
      where: {
        dokumen_id: id,
      },
    });

    return res;
  } catch (error) {
    console.error(error);
  } finally {
    revalidatePath("/mahasiswa/khs");
    prisma.$disconnect();
  }
}

export async function AddStudent(
  name: string,
  nim: string,
  angkatan: string,
  password: string,
  father: string,
  mother: string,
  ttl: string
) {
  try {
    const student = await prisma.user.create({
      data: {
        username: nim,
        password,
        role: "user",
        Student: {
          create: {
            ayah_wali: father,
            ibu: mother,
            nama: name,
            nim,
            angkatan,
            alamat: "",
            no_ayah: "",
            no_ibu: "",
            ttl,
          },
        },
      },
    });

    return student;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function findStudent(nim: string) {
  try {
    const student = await prisma.user.findFirst({
      where: {
        username: nim,
      },
    });

    return student;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}

export async function loginQuery(username: string, password: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
      include: {
        Student: { select: { nama: true } },
      },
    });

    return user;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
}
