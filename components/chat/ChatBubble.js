import React from "react";

const ChatBubble = ({ ai, message }) => {
  return <div className={`chat_bubble ${ai ? "ai" : "user"}`}>{message}</div>;
};

export default ChatBubble;
