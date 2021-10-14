import styled from "styled-components";
import useEditor from "../hooks/useEditor";
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

function EditionMeme() {
  const { textTop, textBottom, setTextTop, setTextBottom, downloadMeme } =
    useEditor();

  const handleChangeTextTop = (e) => setTextTop(e.target.value);

  const handleChangeTextBottom = (e) => setTextBottom(e.target.value);

  const handleDownload = () => downloadMeme();

  return (
    <WrapperEditionMeme>
      <div>
        <Title>Edit the text</Title>
        <Input
          value={textTop}
          onChange={handleChangeTextTop}
          type="text"
          placeholder="Text top here ..."
        />
        <Input
          value={textBottom}
          onChange={handleChangeTextBottom}
          type="text"
          placeholder="Text bottom here ..."
        />
      </div>

      <Button onClick={handleDownload}>Download</Button>
    </WrapperEditionMeme>
  );
}

export default EditionMeme;
