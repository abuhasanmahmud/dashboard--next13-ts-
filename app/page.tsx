import DashboardHome from "@/components/dashboard/DashboardHome";
import Sidebar from "@/components/shared/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar component={<DashboardHome />} />
    </>
  );
}
