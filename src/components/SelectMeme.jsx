import { useState } from "react";
import styled from "styled-components";

const MEMES = [
  { img: `/assets/fire.jpg`, id: 0 },
  { img: `/assets/futurama.jpg`, id: 1 },
  { img: `/assets/history.jpg`, id: 2 },
  { img: `/assets/philosoraptor.jpg`, id: 3 },
];

const WrapperSelectMeme = styled.div`
  height: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2em;
  padding: 1em;

  img {
    max-width: 100px;
  }

  @media screen and (min-width: 960px) {
    flex-direction: column;
    margin-bottom: 0;
    overflow-y: scroll;
    padding: 0;

    img {
      max-width: 100%;
    }
  }
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
