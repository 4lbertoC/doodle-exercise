import React from "react";
import "./Message.sass";

export const Message = ({ author, message, timestamp, name }) => (
  <div className={author === name ? "message self" : "message"}>
    <p className="name">{author}</p>
    <p className="">{message}</p>
    <p className="timestamp">{timestamp}</p>
  </div>
);
