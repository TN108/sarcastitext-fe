import React from "react";
import { Navbar, Hero, Footer, Benefits, Working } from "@/components";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-secondary">
      <Navbar></Navbar>
      <div className="container mx-auto">
        <Hero></Hero>
      </div>
      <Benefits></Benefits>
      <Working></Working>
      <Footer></Footer>
    </main>
  );
};

export default page;
