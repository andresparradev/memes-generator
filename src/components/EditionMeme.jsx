import styled from "styled-components";
import Button from "./Button";

const WrapperEditionMeme = styled.div`
  border-left: 2px solid #ddd;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1em;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: #ddd;
`;

const Title = styled.h4`
  margin-bottom: 1rem;
  font-size: var(--fontSizeMedium);
`;

function EditionMeme({ textTop, textBottom, setTextTop, setTextBottom }) {
  return (
    <WrapperEditionMeme>
      <div>
        <Title>Edit the text</Title>
        <Input
          value={textTop}
          onChange={setTextTop}
          type="text"
          placeholder="Text top here ..."
        />
        <Input
          value={textBottom}
          onChange={setTextBottom}
          type="text"
          placeholder="Text bottom here ..."
        />
      </div>

      <Button>Download</Button>
    </WrapperEditionMeme>
  );
}

export default EditionMeme;
