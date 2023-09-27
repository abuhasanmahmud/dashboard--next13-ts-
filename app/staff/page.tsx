import Staffs from "@/components/Staffs/Staffs";
import Sidebar from "@/components/shared/Sidebar";

const page = () => {
  return (
    <>
      <Sidebar component={<Staffs />} />
    </>
  );
};

export default page;
