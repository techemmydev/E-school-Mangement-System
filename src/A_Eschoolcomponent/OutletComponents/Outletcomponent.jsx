import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../AllDashboardComponent/Navbar/Navbar";
import SidebarDash from "../../AllDashboardComponent/SidebarDashboard/SidebarDash";

const Outletcomponent = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <SidebarDash />
    </div>
  );
};

export default Outletcomponent;
