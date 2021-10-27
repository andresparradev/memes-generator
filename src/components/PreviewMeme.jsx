import styled from "styled-components";
import Draggable from "react-draggable";
import useEditor from "../hooks/useEditor";

const WrapperPreviewMeme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Meme = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  overflow: hidden;
  text-align: center;

  input {
    background-color: transparent;
    margin: 0;
    cursor: pointer;
    width: 90%;
    font-family: ${(props) => props.optionsMeme.fontFamily};
    font-size: ${(props) => props.optionsMeme.fontSize}px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    position: absolute;
    left: 5%;
  }

  input:focus {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

const TextTop = styled.input`
  top: 20px;
`;

const TextBottom = styled.input`
  bottom: 20px;
`;

function PreviewMeme() {
  const {
    meme,
    textTop,
    textBottom,
    setTextTop,
    setTextBottom,
    memeRef,
    optionsMeme,
  } = useEditor();

  const handleChangeTextTop = (e) => {
    setTextTop(e.target.value);
  };

  const handleChangeTextBottom = (e) => {
    setTextBottom(e.target.value);
  };

  return (
    <WrapperPreviewMeme>
      <Meme ref={memeRef} optionsMeme={optionsMeme}>
        <img src={meme} />

        <Draggable>
          <TextTop value={textTop} onChange={handleChangeTextTop} />
        </Draggable>

        <Draggable>
          <TextBottom value={textBottom} onChange={handleChangeTextBottom} />
        </Draggable>
      </Meme>
    </WrapperPreviewMeme>
  );
}

export default PreviewMeme;
