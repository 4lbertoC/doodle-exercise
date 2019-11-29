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
    const { messageText, name, messages } = this.state;
    const data = {
      message: messageText,
      author: name
    };
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        token
      }
    };
    try {
      const response = await fetch(postMessage, options);
      const json = await response.json();
      const message = { ...json, timestamp: Date.now() };
      this.setState({
        messages: [...messages, message],
        messageText: ""
      });
      console.log("Success:", JSON.stringify(json));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  getCurrentValue = text => {
    this.setState({
      messageText: text
    });
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
            <Input handleMessage={this.getCurrentValue} />
            <Button onClick={this.sendMessage} />
          </div>
        </footer>
      </div>
    );
  }
}
