import styled from "styled-components";
import Draggable from 'react-draggable';
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
  
  p {
    margin: 0;
    position: absolute;
    cursor: pointer;
    width: 100%;
    font-family: ${(props) => props.optionsMeme.fontFamily};
    font-size: ${(props) => props.optionsMeme.fontSize}px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;

const TextTop = styled.p`
  top: 20px;
`

const TextBottom = styled.p`
  bottom: 20px;
`

function PreviewMeme() {
  const { meme, textTop, textBottom, memeRef, optionsMeme } = useEditor();

  return (
    <WrapperPreviewMeme>
      <Meme ref={memeRef} optionsMeme={optionsMeme}>
        <img src={meme} />

        <Draggable>
          <TextTop>{textTop}</TextTop>
        </Draggable>

        <Draggable>
          <TextBottom>{textBottom}</TextBottom>
        </Draggable>
      </Meme>
    </WrapperPreviewMeme>
  );
}

export default PreviewMeme;
