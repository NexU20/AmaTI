import NavigationBar from "./NavigationBar";

export default function Sidebar() {
  return (
    <div className="bg-sidebar text-white">
      <div className="px-4 py-6 flex flex-col gap-y-4">
        <NavigationBar />
      </div>
    </div>
  );
}
