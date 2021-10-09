import { useState } from "react";
import styled from "styled-components";
import PreviewMeme from "./PreviewMeme";
import SelectMeme from "./SelectMeme";
import EditionMeme from "./EditionMeme";

const WrapperEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 90vh;
  overflow: hidden;
  margin: 0 2em 3em 2em;
  background-color: var(--borderColor);
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
`;

function Editor() {
  const [memeImage, setMemeImage] = useState();
  const [textTop, setTextTop] = useState("");
  const [textBottom, setTextBottom] = useState("");

  return (
    <WrapperEditor>
      <SelectMeme />
      <PreviewMeme />
      <EditionMeme />
    </WrapperEditor>
  );
}

export default Editor;
