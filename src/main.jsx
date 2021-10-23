import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import EditorProvider from "./context/editorContext";
import DarkModeProvider from "./context/darkModeContext";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <EditorProvider>
        <App />
      </EditorProvider>
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
