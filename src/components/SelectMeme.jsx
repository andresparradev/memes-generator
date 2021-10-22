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
  overflow-x: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
  padding: 1em;

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

const MemeImg = styled.img`
  cursor: pointer;
  max-width: 100px;
  transition: border 100ms;

  &:hover {
    border: 5px solid var(--secondaryColor);
  }
`;

const AddImage = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.border};
  height: 100%;
  padding: 0 1rem;

  img {
    cursor: pointer;
    margin: 0 auto;
    width: 40px;
  }

  @media screen and (min-width: 960px) {
    padding: 4rem 0;
    height: 250px;
  }
`;

const Input = styled.input`
  display: none;
`;

function SelectMeme({ openUploadModal }) {
  const [memes, setMemes] = useState(MEMES);
  const { setMeme } = useEditor();

  const handleChangeMeme = (e) => setMeme(e.target.value);

  return (
    <WrapperSelectMeme>
      <AddImage onClick={openUploadModal}>
        <img src="/assets/icon-add.png" alt="Logo add meme" title="Add image" />
      </AddImage>
      {memes.map((singleMeme) => (
        <div key={singleMeme.id}>
          <label htmlFor={`meme-${singleMeme.id}`}>
            <MemeImg src={singleMeme.img} />
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
