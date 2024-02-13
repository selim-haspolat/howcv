"use client";

import instance from "@/helper/axios-instance";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await instance.post("/auth/register", {
        userName,
        email,
        password,
      });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <section className="page-title layout-02">
        <div className="container">
          <div className="inner align-center">
            <h1 className="title">Create an account</h1>
            <div className="desc">
              Already have an account?{" "}
              <Link href="/login" title="Sign In">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-5 pb-5">
        <form action="#" className="sign-up" onSubmit={handleSubmit}>
          <div className="field-input">
            <label htmlFor="first_name">User Name*</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="ex: Kevin"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </div>
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
            <input type="checkbox" defaultValue="yes" id="terms" name="terms" />
            <label htmlFor="terms">
              I agree to the{" "}
              <Link href="/" title="Terms & conditions">
                Terms &amp; conditions
              </Link>
            </label>
          </div>
          <div className="field-submit">
            <input type="submit" name="submit" defaultValue="Register" />
          </div>
        </form>
      </div>
    </>
  );
}
