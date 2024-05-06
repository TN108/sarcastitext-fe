"use client";

import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profession, setProfession] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setErrorMessage("Please enter all details.");
      return; // Stop execution if any field is missing
    }
    if (!email.endsWith("@gmail.com")) {
      setErrorMessage("Please provide a valid Gmail address.");
      return; // Stop execution if the email domain is not @gmail.com
    }
    if (!(profession === "Student" || profession === "Teacher")) {
      setErrorMessage("Please select a valid profession (Student or Teacher).");
      return; // Stop execution if the profession is not valid
    }
    if (password.length <= 5) {
      setErrorMessage("Password should be greater than 5 characters.");
      return;
    }

    // Check for at least one capital letter and one digit
    const capitalLetterRegex = /[A-Z]/;
    const digitRegex = /\d/;
    if (!capitalLetterRegex.test(password) || !digitRegex.test(password)) {
      setErrorMessage("Password must one capital letter and one digit.");
      return;
    }
    // Create an object with form data
    const formData = {
      username,
      email,
      password,
      profession,
    };

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();
      if (responseData.message) {
        setErrorMessage(responseData.message);
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    }
  };
  return (
    <>
      <div className="flex min-h-screen">
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
            <label className="text-xl pt-10">Sign up now!</label>
          </div>
        </div>
        <div className="p-5 bg-secondary text-white w-screen h-screen lg:w-2/5 flex justify-center items-center">
          <div className="p-10">
            <form onSubmit={handleSubmit}>
              <h6 className="text-3xl text-accent font-bold md:text-5xl">
                Signup
              </h6>
              <p className="text-sm text-accent pt-5 md:text-xl">
                Enter your details
              </p>
              <div className="flex flex-col flex-shrink my-12">
                <input
                  className="bg-secondary mb-2"
                  type="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  required
                />

                <hr className="w-full border-accent mb-6  " />
                <input
                  className="bg-secondary  mb-2"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
                <hr className="w-96 border-accent mb-6  " />

                <input
                  className="bg-secondary mb-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <hr className="w-96 border-accent mb-6" />
              </div>
              <button
                rel="stylesheet"
                className="border-primary border-2 px-44 bg-primary mt-10 w-96 text-sm text-white rounded-lg py-2 inline-block hover:bg-secondary hover:text-primary"
              >
                Signup
              </button>
            </form>
            <div className="pt-10">
              <Link rel="stylesheet" href="" className="text-xs text-accent">
                Already have an account?
              </Link>
              <Link
                rel="stylesheet"
                href="/login"
                className="px-2 ml-5 w-16 text-xs text-accent inline-block"
              >
                Login
              </Link>
            </div>
            <div className="border-red-500 text-red-500 mt-4">
              {errorMessage}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
