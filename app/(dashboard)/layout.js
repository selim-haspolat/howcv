"use client";

import { useRouter } from "next/navigation";

import DashboardLayout from "@/components/layout/DashboardLayout";
import instance from "@/helper/axios-instance";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const router = useRouter();

  const getUser = async () => {
    setLoading(true);
    try {
      const { data } = await instance.get("/auth/me");
      setUser(data);
    } catch (error) {
      router.push("/login");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <DashboardLayout user={user}>{children}</DashboardLayout>;
}
