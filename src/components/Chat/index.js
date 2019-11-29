import React, { PureComponent } from "react";
import { Messages } from "../Messages";
import Input from "../Input";
import { Button } from "../Button";
import { messagesAPI, postMessage, token } from "../../constants";
import "./Chat.sass";

export default class Chat extends PureComponent {
  state = {
    name: "Alex",
    messages: [],
    messageText: ""
  };

  fetchMessages = async () => {
    try {
      const request = await fetch(messagesAPI);
      const json = await request.json();
      this.setState({
        messages: json
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  sendMessage = async () => {
    const data = {
      message: "Hello!",
      author: "Tom"
    };
    try {
      const response = await fetch(postMessage, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          token
        }
      });
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  componentDidMount() {
    this.fetchMessages();
  }
  render() {
    const { messages, name } = this.state;
    return (
      <div className="chat">
        <main>
          <Messages messages={messages} name={name} />
        </main>
        <footer>
          <div className="wrapper input_bottom">
            <Input />
            <Button onClick={this.sendMessage} />
          </div>
        </footer>
      </div>
    );
  }
}
