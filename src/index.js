import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./styles/main.sass";

const renderApp = () => {
  render(<App />, document.getElementById("root"));
};

renderApp();

if (module.hot) module.hot.accept("./components/App", renderApp);
