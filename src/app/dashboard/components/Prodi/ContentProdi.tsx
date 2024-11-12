import Data from "@/app/components/icons/Data";
import { PageProvider } from "@/app/contexts/PageContext";
import ProdiDashboard from "./ProdiDashboard";

export default function ContentProdi() {
  return (
    <PageProvider>
      <div className="bg-sidebar text-white">
        <div className="px-4 py-6 flex flex-col gap-y-4">
          <button className="bg-white text-black poppins-semibold w-full py-2 rounded-lg hover:bg-neutral-100 flex items-center justify-start gap-x-4 px-4">
            <Data />
            Data Mahasiswa
          </button>
        </div>
      </div>
      <div className="bg-background py-6 pl-8 pr-10">
        <ProdiDashboard />
      </div>
    </PageProvider>
  );
}
