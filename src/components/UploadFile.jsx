import styled from "styled-components"
import useEditor from "../hooks/useEditor"
import Button from "./Button";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, .9);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  position: relative;
  border-radius: 5px;
`;

const IconClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 1rem 1.5rem;
`;

const Input = styled.input`
  &::file-selector-button {
    border: none;
    cursor: pointer;
    padding: 0.6rem 2rem;
    border-radius: 5px;
    background-color: var(--primaryColor);
    color: #fff;

    &:hover {
      opacity: 0.9;
    }
  }
`;

function UploadFile({ closeUploadModal }) {
  const { setMeme } = useEditor();

  const handleChangeFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setMeme(reader.result);
      closeUploadModal();
    }

    reader.readAsDataURL(file);
  }

  const handleCloseModal = (e) => {
    if(e.target.className.includes("wrapper")) {
      closeUploadModal();
    }
  }

  return (
    <Wrapper onClick={handleCloseModal} className="wrapper">
      <Content>
        <form>
          <Input
            type="file"
            id="file"
            onChange={handleChangeFile}
            accept=".png,.jpg,jpeg,.gif"
          />
        </form>
      </Content>
      <IconClose onClick={closeUploadModal}>x</IconClose>
    </Wrapper>
  )
}

export default UploadFile