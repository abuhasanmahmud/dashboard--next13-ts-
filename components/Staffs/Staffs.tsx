import React from "react";
import StaffTable from "./StaffTable";
import { fetchAllStaff } from "@/lib/actions/staff.action";

const Staffs = async () => {
  const allStaff = await fetchAllStaff();
  return (
    <div>
      <StaffTable staffs={allStaff} />
    </div>
  );
};

export default Staffs;
