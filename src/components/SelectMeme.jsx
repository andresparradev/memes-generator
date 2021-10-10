import { useState } from "react";
import styled from "styled-components";

const MEMES = [
  { img: "./src/assets/fire.jpg", id: 0 },
  { img: "./src/assets/futurama.jpg", id: 1 },
  { img: "./src/assets/history.jpg", id: 2 },
  { img: "./src/assets/philosoraptor.jpg", id: 3 },
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
