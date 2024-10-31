"use client";
import Link from "next/link";
import React, { useState } from "react";

interface Message {
  user: string;
  ai: string;
}

const Chatbot = () => {
  const [Messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");

  async function query(data: string) {
    const response = await fetch("http://localhost:8000/ask/" + data, {
      method: "GET",
    });
    const result = await response.json();
    return result;
  }

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    // Assuming you have an endpoint to send user messages and get AI response
    try {
      const response = await query(inputText);

      console.log(response);

      if (response) {
        const newMessage: Message = {
          user: inputText,
          ai: response.text,
        };
        setMessages([...Messages, newMessage]);
        setInputText(""); // Clear input field after sending message
      } else {
        console.error("Failed to get AI response");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="border w-[90vw] h-[85vh] m-10 p-5 mx-auto rounded-xl bg-secondary">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-[2rem] absolute"
        >
          <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
        </svg>
      </Link>

      <h1 className="font-semibold text-3xl text-center">
        SarcastiText Chatbot
      </h1>
      <div className="flex flex-col w-[100%] h-[90%] justify-between ">
        <div className="h-[85%] overflow-auto">
          {Messages.map((message, index) => (
            <div className="my-5 " key={index}>
              <div className="chat chat-end mb-5">
                <div className="chat-bubble bg-primary text-secondary">
                  {message.user}
                </div>
              </div>
              <div className="chat chat-start">
                <div className="chat-bubble bg-accent text-secondary font-semibold">
                  {message.ai}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered bg-secondary w-full"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-[2rem] ml-2"
            onClick={sendMessage}
          >
            <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
