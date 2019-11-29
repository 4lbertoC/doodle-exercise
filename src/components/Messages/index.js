import React from "react";
import { Message } from "./Message";
import "./Messages.sass";

const messages = [
  {
    timestamp: "123456",
    text: "lorem",
    name: "John"
  },
  {
    timestamp: "123456",
    text: "lorem",
    name: "John"
  },
  {
    timestamp: "123456",
    text: "lorem",
    name: "John"
  }
];

export const Messages = ({ messages }) => {
  console.log(messages);
  return (
    <div className="wrapper">
      {messages.map(message => (
        <Message
          key={message.id}
          timestamp={message.timestamp}
          text={message.text}
          name={message.name}
        />
      ))}
    </div>
  );
};
