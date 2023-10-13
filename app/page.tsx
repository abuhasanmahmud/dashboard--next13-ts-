import DashboardHome from "@/components/dashboard/DashboardHome";
import Sidebar from "@/components/shared/Sidebar";

export default function Home() {
  // console.log('product page')
  return (
    <>
      <Sidebar component={<DashboardHome />} />
    </>
  );
}
