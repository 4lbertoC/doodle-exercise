import React from "react";
import "./Message.sass";

export const Message = ({ self, timestamp, text, name }) => (
  <div className={self ? "message self" : "message"}>
    <p className="name">{name}</p>
    <p className="">{text}</p>
    <p className="timestamp">{timestamp}</p>
  </div>
);
