"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loadingState, setLoadingState] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      setLoadingState(true); // Set loading state to true while waiting for API response

      const response = await fetch("https://sarcastitext-be.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data sent successfully!");
        // Optionally, you can reset the form data state here
        setMessageDisplay(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setTimeout(() => {
          setMessageDisplay(false);
        }, 3000);
      } else {
        console.error("Failed to send form data");
      }
    } catch (error) {
      console.error("An error occurred while sending form data:", error);
    } finally {
      setLoadingState(false); // Reset loading state after API response
    }
  };

  return (
    <>
      <div className="bg-secondary">
        <div className="max-w-3xl m-auto py-16 px-10">
          <div className="mockup-browser border border-primary">
            <div className="mockup-browser-toolbar">
              <div className="input border border-primary text-secondary">
                https://contact-sarcartiText.com
              </div>
            </div>
            <div className="flex justify-center px-4 py-16 border-t border-primary">
              <div className="flex flex-col content-center align-middle px-4 bg-grey w-full">
                <h1 className="text-xl font-bold text-center mb-10 ">
                  Get in Touch
                </h1>
                <form
                  name="contactForm"
                  method="POST"
                  onSubmit={handleFormSubmit}
                >
                  <div className="flex flex-col mx-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered w-full my-3 bg-secondary text-md"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered w-full my-3 bg-secondary text-md"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                    <textarea
                      className="textarea input-bordered w-full my-3 bg-secondary text-md"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                    <button
                      className="btn btn-primary my-3 text-white font-bold"
                      type="submit"
                    >
                      {loadingState ? (
                        <span className="loading loading-spinner loading-xs"></span>
                      ) : (
                        "Send"
                      )}
                    </button>
                  </div>
                </form>
                {messageDisplay && (
                  <div className="text-green-500 font-bold text-center mt-4">
                    Message sent successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
