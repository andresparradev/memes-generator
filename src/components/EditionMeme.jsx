import styled from "styled-components";
import useEditor from "../hooks/useEditor";
import Button from "./Button";

const WrapperEditionMeme = styled.div`
  border-left: 2px solid ${(props) => props.theme.colors.border};
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
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.border};
`;

const Title = styled.h4`
  margin-bottom: 1rem;
  font-size: var(--fontSizeMedium);
`;

const EditionFont = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Subtitle = styled.h5`
  margin: 1rem 0;
  font-size: var(--fontSizeBody);
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem 1em;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.border};
`;

const FONT_FAMILYS = [
  "Arial",
  "Inter",
  "Pacifico",
  "Bebas Neue",
  "IM Fell English SC",
  "Serif",
];

function EditionMeme() {
  const {
    textTop,
    textBottom,
    setTextTop,
    setTextBottom,
    downloadMeme,
    setOptionsMeme,
  } = useEditor();

  const handleChangeTextTop = (e) => setTextTop(e.target.value);

  const handleChangeTextBottom = (e) => setTextBottom(e.target.value);

  const handleChangeFontType = (e) => {
    setOptionsMeme((prev) => {
      return {
        ...prev,
        fontFamily: e.target.value,
      };
    });
  };

  const handleChangeFontSize = (e) => {
    setOptionsMeme((prev) => {
      return {
        ...prev,
        fontSize: e.target.value,
      };
    });
  };

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

        <Subtitle>Font style</Subtitle>
        <EditionFont>
          <Select onChange={handleChangeFontType} defaultValue="Arial">
            {FONT_FAMILYS.map((singleFont) => (
              <option key={singleFont} value={singleFont}>
                {singleFont}
              </option>
            ))}
          </Select>

          <Input
            type="number"
            defaultValue="32"
            onChange={handleChangeFontSize}
          />
        </EditionFont>
      </div>

      <Button onClick={handleDownload}>Download</Button>
    </WrapperEditionMeme>
  );
}

export default EditionMeme;
