import { PageProvider } from "@/app/contexts/PageContext";
import Orangtua from "./OrtuNavigationBar";
import DashboardOrangtua from "./DashboardOrangtua";

export default function ContentOrangtua() {
  return (
    <PageProvider>
      <div className="bg-sidebar text-white">
        <div className="px-4 py-6 flex flex-col gap-y-4">
          <Orangtua />
        </div>
      </div>
      <div className="bg-background py-6 pl-8 pr-10">
        <DashboardOrangtua />
      </div>
    </PageProvider>
  );
}
