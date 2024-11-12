import { PageProvider } from "@/app/contexts/PageContext";
import MahasiswaNavigation from "./MhsNavigationBar";
import DashboardMahasiswa from "./DashboardMahasiswa";

export default function ContentMahasiswa() {
  return (
    <PageProvider>
      <div className="bg-sidebar text-white">
        <div className="px-4 py-6 flex flex-col gap-y-4">
          <MahasiswaNavigation />
        </div>
      </div>
      <div className="bg-background py-6 pl-8 pr-10">
        <DashboardMahasiswa />
      </div>
    </PageProvider>
  );
}
