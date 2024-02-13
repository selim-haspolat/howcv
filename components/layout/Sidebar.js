"use client";

import Link from "next/link";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import instance from "@/helper/axios-instance";
import toast from "react-hot-toast";

const Sidebar = ({ sidebarOpen, setSidebarOpen, user }) => {
  const SidebarLinks = [
    { name: "Home", path: "/", icon: "tabler:home" },
    { name: "About", path: "/about", icon: "tabler:apps" },
    { name: "Contact", path: "/contact", icon: "tabler:address-book" },
    { name: "Ai", path: "/contact", icon: "tabler:robot" },
    { name: "Ai", path: "/contact", icon: "tabler:message-chatbot" },
  ];

  console.log(user);

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const { data } = await instance.post("/auth/logout");

      toast.success(data.message);

      router.push("/login");
    } catch (error) {
      toast.error('Something went wrong! Please try again.');
    }
  };

  return (
    <div
      onClick={() => setSidebarOpen((prev) => !prev)}
      className={`sidebar ${sidebarOpen ? "open" : "close"}`}
    >
      <div className="header">
        <Icon className="logo" icon={"tabler:brand-sketch"} />
        <h2>HowCv</h2>
      </div>
      <div className="links">
        {SidebarLinks.map((link, index) => {
          const { name, path, icon } = link;

          return (
            <Link href={path} key={index} className="link_container">
              <Icon icon={icon} className="link_icon" />
              <p>{name}</p>
            </Link>
          );
        })}
      </div>

      <div className="user">
        <div>
          <Icon className="user_image" icon={"tabler:user-circle"} />
          <p>{user.userName}</p>
        </div>
        <Icon
          onClick={() => handleLogout()}
          className="logout"
          icon="tabler:logout"
        />
      </div>
    </div>
  );
};

export default Sidebar;
