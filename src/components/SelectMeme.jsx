import { useState } from "react";
import styled from "styled-components";

const MEMES = [
  { img: "https://imgflip.com/s/meme/Distracted-Boyfriend.jpg", id: 0 },
  { img: "https://imgflip.com/s/meme/Epic-Handshake.jpg", id: 1 },
  { img: "https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg", id: 2 },
  { img: "https://imgflip.com/s/meme/Ancient-Aliens.jpg", id: 3 },
  { img: "https://imgflip.com/s/meme/Hide-the-Pain-Harold.jpg", id: 4 },
];

const WrapperSelectMeme = styled.div`
  height: 100%;
  overflow-y: scroll;
  display: grid;
  gap: 1rem;
`;

const Input = styled.input`
  display: none;
`;

function SelectMeme({ handleChangeMeme }) {
  const [memes, setMemes] = useState(MEMES);

  return (
    <WrapperSelectMeme>
      {memes.map((singleMeme) => (
        <div key={singleMeme.id}>
          <label htmlFor={`meme-${singleMeme.id}`}>
            <img src={singleMeme.img} />
          </label>
          <Input
            onChange={handleChangeMeme}
            type="radio"
            name="meme-value"
            value={singleMeme.img}
            id={`meme-${singleMeme.id}`}
          />
        </div>
      ))}
    </WrapperSelectMeme>
  );
}

export default SelectMeme;
