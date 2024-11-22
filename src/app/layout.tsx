import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "./contexts/ToastContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "AmaTI - UIN",
  description: "Aplikasi Pantau Mahasiswa TI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.className}`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
