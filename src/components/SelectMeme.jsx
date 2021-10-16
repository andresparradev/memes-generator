import { useState } from "react";
import styled from "styled-components";
import useEditor from "../hooks/useEditor";

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
  margin-bottom: 2em;
  padding: 1em;

  img {
    cursor: pointer;
    max-width: 100px;
    transition: border 100ms;

    &:hover {
      border: 5px solid var(--secondaryColor);
    }
  }

  @media screen and (min-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0;
    overflow-y: auto;
    padding: 0;

    img {
      max-width: 100%;
    }
  }
`;

const Input = styled.input`
  display: none;
`;

function SelectMeme() {
  const [memes, setMemes] = useState(MEMES);
  const { setMeme } = useEditor();

  const handleChangeMeme = (e) => setMeme(e.target.value);

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
