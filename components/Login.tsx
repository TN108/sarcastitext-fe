"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import GlobalConifg from "@/app/app.config.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Create an object with form data
    const formData = {
      email,
      password,
      username: "",
    };
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setSuccessMessage("Login Successful!");
        router.push("/main");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <>
      <div className="flex flex-row-reverse min-h-screen bg-secondary">
        <div className=" bg-primary text-white hidden h-screen lg:w-3/5 lg:block">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="text-secondary w-[2rem] absolute left-2 top-2"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </Link>
          <div className="flex flex-col items-center h-screen align-middle justify-center">
            <label className="text-6xl pt-5">
              <b>Welcome to</b>
            </label>
            <label className="text-5xl pt-3">SarcastiText</label>
            <label className="text-xl pt-10">
              Login to access your account
            </label>
          </div>
        </div>
        <div className="p-5 bg-secondary text-white w-screen h-screen lg:w-2/5 flex justify-center items-center">
          <div className="p-10">
            <form action="" onSubmit={handleSubmit}>
              <h6 className="text-3xl font-bold md:text-5xl text-accent">
                Login
              </h6>
              <p className="text-sm text-accent pt-5 md:text-xl">
                Enter your account details
              </p>
              <div className="flex flex-col flex-shrink my-12">
                <input
                  className="bg-secondary  mb-2 text-accent outline-none"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <hr className="w-96 border-accent mb-2  " />
                <input
                  className="bg-secondary  my-3 mb-2 text-accent outline-none"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
                <hr className="w-96 border-accent mb-8  " />
                {/* <Link rel="stylesheet" href="" className="text-xs  text-accent">
                  Forgot Password?
                </Link> */}
              </div>
              <button
                rel="stylesheet"
                className="border-primary border-2 px-44 bg-primary mt-10 w-96 text-sm text-white rounded-lg py-2 inline-block hover:bg-secondary hover:text-primary"
              >
                Login
              </button>
            </form>
            <div className="pt-10">
              <Link rel="stylesheet" href="" className="text-xs text-accent">
                Don&apos;t have and account?
              </Link>
              <Link
                rel="stylesheet"
                href="/signup"
                className="px-2 ml-5 bg-darkSilver w-16 text-xs text-accent inline-block "
              >
                Signup
              </Link>
            </div>
            {successMessage && (
              <div className=" text-green-500 mt-4">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="border-red-500 text-red-500 mt-4">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
function setErrorMessage(arg0: string) {
  throw new Error("Function not implemented.");
}
