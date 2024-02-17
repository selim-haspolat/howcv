"use client";

import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import { Icon } from "@iconify/react";
import Image from "next/image";
import toast from "react-hot-toast";

import axios from "axios";

const Chat = () => {
  const msgEnd = useRef(null);

  const [messages, setMessages] = useState([
    {
      ai: true,
      message:
        "Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?Hello! How can I help you today?",
    },
  ]);

  const [message, setMessage] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    msgEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const postMessage = async () => {
    setTyping(true);
    try {
      const { data } = await axios.post("/api/openai/chat", { message });

      setMessages([
        ...messages,
        { message, ai: false },
        { message: data.message, ai: true },
      ]);
      setMessage("");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong! Please try again.");
    } finally {
      setTyping(false);
    }
  };

  const sendMessage = () => {
    if (message) {
      setMessages([...messages, { message, ai: false }]);
      postMessage();
    }
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat_page_container">
      <div className="ai_info">
        <Image
          src={
            "/assets/images/Featured-image-AI-image-generators-by-Midjourney.png"
          }
          width={100}
          height={100}
        />
        <h3>Lorem ipsum</h3>
      </div>
      <div className="chat_container">
        <div className="abz">
          {messages.map((message, index) => (
            <ChatBubble key={index} ai={message.ai} message={message.message} />
          ))}
          <div ref={msgEnd}></div>
        </div>
        {typing ? (
          <div className="gpt_typing_container">
            <div className="typing_loader">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>typing</p>
          </div>
        ) : null}
        <div className="chat_input">
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            onKeyDown={handleKeyDown}
            placeholder="Ask Question"
          />

          <Icon className="send" onClick={sendMessage} icon="tabler:send-2" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
