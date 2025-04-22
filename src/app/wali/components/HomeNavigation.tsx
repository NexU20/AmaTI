"use client";

import KHS from "@/app/components/icons/KHS";
import KRS from "@/app/components/icons/KRS";
import Transkrip from "@/app/components/icons/Transkrip";
import Kalender from "@/app/components/icons/Calendar";
import { useRouter } from "next/navigation";

const NavigationType = {
  krs: "Kartu Rencana Studi",
  khs: "Kartu Hasil Studi",
  nilai: "Transkrip Nilai",
  kalender: "Kalender Akademik",
};

const NavigationIcon = {
  krs: <KRS />,
  khs: <KHS />,
  nilai: <Transkrip />,
  kalender: <Kalender color="#fff" />,
};

const target = {
  krs: "/wali/krs",
  khs: "/wali/khs",
  nilai: "/wali/transkrip",
  kalender: "/wali/kalender",
};

type NavigationType = keyof typeof NavigationType;

export default function HomeNavigation({ type }: { type: NavigationType }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(target[type])}
      className="dashboard-navigation-btn"
    >
      {NavigationIcon[type]}
      {NavigationType[type]}
    </button>
  );
}
