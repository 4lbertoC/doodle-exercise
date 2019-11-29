import React from "react";
import moment from "moment";
import { Message } from "./Message";
import "./Messages.sass";

export const Messages = ({ messages, name }) => {
  console.log("messages", messages);
  return (
    <div className="wrapper">
      {messages.map(({ _id, author, message, timestamp, name }) => {
        const time = moment(timestamp).format("LLL");
        return (
          <Message
            key={_id}
            timestamp={time}
            message={message}
            author={author}
            name={name}
          />
        );
      })}
    </div>
  );
};
