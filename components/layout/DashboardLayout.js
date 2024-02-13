"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";

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
    </div>
  );
};

export default DashboardLayout;
