import instance from "@/helper/axios-instance";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeaderRight() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const { data } = await instance.get("/auth/me");
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="header-right flex flex-align-c flex-content-e">
        {user ? (
          <div className="buttons">
            <Link href="/dashboard" className="button fullfield">
              <i className="las la-headset" />
              <span>Dashboard</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="customer">
              <Link href="/login">
                <i className="las la-user-circle" />
                <span>Log In</span>
              </Link>
            </div>
            <div className="buttons">
              <Link href="/register" className="button fullfield">
                <i className="las la-headset" />
                <span>Register</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
