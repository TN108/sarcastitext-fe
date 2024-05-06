"use client";
import React from "react";
import Link from "next/link";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-secondary">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl lg:text-4xl font-extrabold">
              <span>Hello! We&apos;re {""}</span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "SarcastiText",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Here to Decode the Nuances of Language",
                  1000,
                ]}
                wrapper="span"
                speed={5}
                repeat={Infinity}
                className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent"
              />
            </h1>
            <p className="py-6 text-lg lg:text-xl">
              Ready to decode the witty world of sarcasm? Try our Roman Urdu
              Sarcasm Analyzer now and uncover the hidden humor in every line!
            </p>
            <Link href="/login" className="btn btn-primary rounded-full">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
