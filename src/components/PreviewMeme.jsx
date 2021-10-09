import styled from "styled-components";

const WrapperPreviewMeme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Meme = styled.div`
  position: relative;
  width: 80%;
  max-width: 350px;

  img {
    width: 100%;
    height: 100%;
  }

  p {
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
  top: 0.5em;
`;

const TextBottom = styled.p`
  bottom: 0.5em;
`;

function PreviewMeme({
  meme = "https://imgflip.com/s/meme/Ancient-Aliens.jpg",
  textTop = "Hello",
  textBottom = "World",
}) {
  return (
    <WrapperPreviewMeme>
      <Meme>
        <img src={meme} />
        <TextTop>{textTop}</TextTop>
        <TextBottom>{textBottom}</TextBottom>
      </Meme>
    </WrapperPreviewMeme>
  );
}

export default PreviewMeme;
