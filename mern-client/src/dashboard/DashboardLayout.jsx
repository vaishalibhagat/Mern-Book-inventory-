import React from "react";
import { Outlet } from "react-router-dom";
import SideBarr from "./SideBarr";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      <SideBarr />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
