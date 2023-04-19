import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store/store";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <GlobalStyle />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </>
);
