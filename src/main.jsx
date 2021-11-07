import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EditorProvider from "./context/editorContext";
import DarkModeProvider from "./context/darkModeContext";
import UserProvider from "./context/userContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <UserProvider>
        <EditorProvider>
          <App />
        </EditorProvider>
      </UserProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
