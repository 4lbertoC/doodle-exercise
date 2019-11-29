import React, { Component } from "react";
import { Messages } from "../Messages";
import { Input } from "../Input";
import { Button } from "../Button";
import "./Chat.sass";

class Chat extends Component {
  state = {
    messages: []
  };

  fetchMessages = async () => {
    try {
      const request = await fetch(
        "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=AZpyyaBOGOiE"
      );
      const json = await request.json();
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };

  sendMessage = async () => {
    const url = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0";
    const data = {
      message: "Hello world",
      author: "Tom"
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          token: "AZpyyaBOGOiE"
        }
      });
      const json = await response.json();

      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  componentDidMount() {
    console.log("object");
    this.fetchMessages();
  }
  render() {
    const {} = this.props;
    const { messages } = this.state;
    return (
      <div className="chat">
        <main>
          <Messages messages={messages} />
        </main>
        <footer>
          <Input />
          <Button onClick={this.sendMessage} />
        </footer>
      </div>
    );
  }
}
export default Chat;
