import { useState } from "react";
import styled from "styled-components";

const MEMES = [
  "https://imgflip.com/s/meme/Distracted-Boyfriend.jpg",
  "https://imgflip.com/s/meme/Epic-Handshake.jpg",
  "https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg",
  "https://imgflip.com/s/meme/Ancient-Aliens.jpg",
  "https://imgflip.com/s/meme/Hide-the-Pain-Harold.jpg",
];

const WrapperSelectMeme = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: grid;
  gap: 1rem;
`;

function SelectMeme() {
  const [memes, setMemes] = useState(MEMES);

  return (
    <WrapperSelectMeme>
      {memes.map((singleMeme) => (
        <div key={singleMeme}>
          <img src={singleMeme} />
        </div>
      ))}
    </WrapperSelectMeme>
  );
}

export default SelectMeme;
