import { createContext, useContext, useMemo, useRef, useState } from "react";

export const EditorContext = createContext();

export default function EditorProvider({ children }) {
  const [meme, setMeme] = useState("/assets/fire.jpg");
  const memeRef = useRef();
  const [textTop, setTextTop] = useState("Hello");
  const [textBottom, setTextBottom] = useState("World");
  const [optionsMeme, setOptionsMeme] = useState({
    fontFamily: "Arial",
    fontSize: 36,
  });

  const value = useMemo(() => {
    return {
      meme,
      setMeme,
      memeRef,
      textTop,
      setTextTop,
      textBottom,
      setTextBottom,
      optionsMeme,
      setOptionsMeme,
    };
  }, [meme, textTop, textBottom, optionsMeme]);

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
}
