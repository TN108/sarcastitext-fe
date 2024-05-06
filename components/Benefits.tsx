"use client";
import React from "react";
import { Fade } from "react-awesome-reveal";
// import FeatureBox from "./FeatureBox";

const Benefits = () => {
  return (
    <>
      <div className="bg-primary" id="Benefits">
        <Fade>
          <div className="container text-center my-16 p-5 mx-auto">
            <h1 className="text-4xl font-bold text-secondary mb-5">Benefits</h1>
            <div className="divider divider-secondary"></div>

            <div className="m-auto my-20 flex justify-center flex-wrap ">
              <div className="border text-secondary p-5 rounded-md w-[30%] h-[13rem] mb-3">
                <h2 className="font-semibold text-xl mb-3">Accuracy</h2>
                <p>
                  Our sarcasm detection model employs state-of-the-art NLP
                  techniques to ensure accurate identification of sarcasm in
                  Roman Urdu text.
                </p>
              </div>
              <div className="border text-secondary p-5 ml-3 rounded-md w-[30%] h-[13rem] mb-3">
                <h2 className="font-semibold text-xl mb-3">Efficiency</h2>
                <p>
                  Quickly analyze large volumes of Roman Urdu text to identify
                  sarcastic expressions, saving you time and effort in
                  deciphering nuanced language.
                </p>
              </div>
              <div className="border text-secondary p-5 ml-3 rounded-md w-[30%] h-[13rem] mb-3">
                <h2 className="font-semibold text-xl mb-3">
                  User-Friendly Interface
                </h2>
                <p>
                  Our website features a simple and intuitive interface, making
                  it easy for users to input text and receive instant sarcasm
                  detection results.
                </p>
              </div>
              <div className="border text-secondary p-5 rounded-md w-[30%] h-[13rem] mb-3">
                <h2 className="font-semibold text-xl mb-3">
                  Insightful Results
                </h2>
                <p>
                  Gain valuable insights into the prevalence of sarcasm within
                  Roman Urdu language content, helping you better understand and
                  interpret textual communication.
                </p>
              </div>
              <div className="border text-secondary p-5 ml-3 rounded-md w-[30%] h-[13rem] mb-3">
                <h2 className="font-semibold text-xl mb-3">Customization</h2>
                <p>
                  Tailor the sarcasm detection tool to your specific needs with
                  customizable settings and options for enhanced usability.
                </p>
              </div>
              <div className="border text-secondary p-5 ml-3 rounded-md w-[30%] h-[13rem] mb-3">
                <h2 className="font-semibold text-xl mb-3">Language Support</h2>
                <p>
                  With a focus on Roman Urdu language sarcasm, our tool fills a
                  unique niche in the realm of NLP, catering to users who
                  communicate primarily in Roman Urdu.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Benefits;
