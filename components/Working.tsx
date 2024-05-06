"use client";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Working = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="container text-center my-16 p-5 mx-auto">
          <Fade>
            <h1 className="text-4xl font-bold mb-5">How it works?</h1>
            <div className="divider"></div>

            <div className="m-auto my-20">
              <ul className="steps">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Login</li>
                <li className="step">Enter Text</li>
                <li className="step">Recieve Response</li>
              </ul>
            </div>
          </Fade>
          <Slide>
            <div className=" my-20">
              <div>
                <div className="mockup-phone">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="artboard artboard-demo phone-1 items-stretch">
                      <div className="chat chat-end mb-5">
                        <div className="chat-header text-secondary font-semibold">
                          User
                        </div>
                        <div className="chat-bubble bg-secondary">
                          Bohat intelligent ho yaar, bas yeh Nobel Prize abhi
                          tak nahi mila.
                        </div>
                      </div>
                      <div className="chat chat-start">
                        <div className="chat-header text-secondary font-semibold">
                          SarcastiText
                        </div>
                        <div className="chat-bubble bg-secondary">
                          Sarcastic
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Working;
