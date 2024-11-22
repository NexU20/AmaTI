import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createAdmin = await prisma.user.create({
    data: {
      username: "prodi-ti",
      password: "prodi-ti123",
      role: "prodi",
      Admin: {
        create: {
          nama: "Admin Prodi TI",
        },
      },
    },
  });

  console.log("Admin Prodi TI berhasil dibuat: ", createAdmin);
}

main()
  .catch((e) => {
    console.error("Terdapat Kesalahan dalam query: ", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
