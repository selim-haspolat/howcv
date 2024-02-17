"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SwitchDarkLight from "../elements/SwitchDarkLight";

const DashboardLayout = ({ children, user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        user={user}
      />
      <div className={`main ${sidebarOpen ? "open" : "close"}`}>{children}</div>
      <SwitchDarkLight />
    </div>
  );
};

export default DashboardLayout;
