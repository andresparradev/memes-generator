import { createGlobalStyle, ThemeProvider } from "styled-components";
import Editor from "./components/Editor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EditorProvider from "./context/editorContext";
import theme from "./theme";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.font.body};
    font-size: ${(props) => props.theme.font.sizeBody};
  }
`;

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme(mode)}>
      <div>
        <GlobalStyle />
        <EditorProvider>
          <Header toggleMode={toggleMode} />
          <Hero />
          <Editor />
        </EditorProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
