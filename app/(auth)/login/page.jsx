"use client";

import instance from "@/app/helper/axios-instance";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/auth/login", { email, password });

      console.log(data);

      toast.success(`Welcome back! ${data.userName}`);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <section className="page-title layout-02">
        <div className="container">
          <div className="inner align-center">
            <h1 className="title">Sign in</h1>
            <div className="desc">
              New user?{" "}
              <Link href="/register" title="Create an account">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="container mb-5 pb-5">
        <form action="#" className="sign-in" onSubmit={handleSubmit}>
          <div className="field-input">
            <label htmlFor="email">Email*</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="ex: kevin@uxper.co"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="field-input field-password">
            <label htmlFor="password">Password*</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <i className="lar la-eye view-password" />
          </div>
          <div className="field-input field-checkbox">
            <input
              type="checkbox"
              defaultValue="yes"
              id="remember"
              name="remember"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className="field-submit">
            <input type="submit" name="submit" defaultValue="Sign In" />
          </div>
        </form>
      </div>
    </>
  );
}
