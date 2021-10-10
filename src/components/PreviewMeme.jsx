import styled from "styled-components";

const WrapperPreviewMeme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Meme = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;

  p {
    text-align: center;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: var(--fontSizeHeading);
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
      1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
  }
`;

const TextTop = styled.p`
  top: 0;
`;

const TextBottom = styled.p`
  bottom: 0;
`;

function PreviewMeme({
  meme = "/assets/fire.jpg",
  textTop = "Hello",
  textBottom = "World",
  memeRef,
}) {
  return (
    <WrapperPreviewMeme>
      <Meme ref={memeRef}>
        <img src={meme} />
        <TextTop>{textTop}</TextTop>
        <TextBottom>{textBottom}</TextBottom>
      </Meme>
    </WrapperPreviewMeme>
  );
}

export default PreviewMeme;
