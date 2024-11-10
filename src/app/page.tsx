import Image from "next/image";
import LoginFooter from "./components/Login/LoginFooter";
import LoginForm from "./components/Login/LoginForm";

export default function page() {
  return (
    <div className="bg-background min-h-lvh flex flex-col items-center">
      <div className="flex flex-col items-center mt-16 mb-8 select-none">
        <Image
          src="/uin-asset.png"
          alt="Logo UIN"
          width={100}
          height={100}
          priority
        />
        <p className="poppins-bold text-xl sm:text-2xl mt-2">AmaTI</p>
        <p className="text-base sm:text-lg poppins-semibold">
          Sistem Pantau Akademik TI
        </p>
      </div>
      <LoginForm />
      <LoginFooter />
    </div>
  );
}
