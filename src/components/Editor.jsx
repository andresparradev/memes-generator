import styled from "styled-components";
import PreviewMeme from "./PreviewMeme";
import SelectMeme from "./SelectMeme";
import EditionMeme from "./EditionMeme";
import useEditor from "../hooks/useEditor";

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
  const {
    memeImage,
    memeRef,
    textTop,
    textBottom,
    handleChangeMeme,
    handleChangeTextTop,
    handleChangeTextBottom,
    handleDownload,
  } = useEditor();

  return (
    <WrapperEditor>
      <SelectMeme handleChangeMeme={handleChangeMeme} />
      <PreviewMeme
        meme={memeImage}
        textTop={textTop}
        textBottom={textBottom}
        memeRef={memeRef}
      />
      <EditionMeme
        textTop={textTop}
        textBottom={textBottom}
        setTextTop={handleChangeTextTop}
        setTextBottom={handleChangeTextBottom}
        handleDownload={handleDownload}
      />
    </WrapperEditor>
  );
}

export default Editor;
