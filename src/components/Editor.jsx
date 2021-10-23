import styled from "styled-components";
import PreviewMeme from "./PreviewMeme";
import SelectMeme from "./SelectMeme";
import EditionMeme from "./EditionMeme";
import UploadFile from "./UploadFile";
import { useState } from "react";

const WrapperEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  /* margin: 0 2em 3em 2em; */
  /* background-color: ${(props) => props.theme.colors.gray}; */
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 960px) {
    grid-template-columns: 1fr 2fr 1fr;
    height: 90vh;
  }
`;

function Editor() {
  const [isOpenUpload, setIsOpenUpload] = useState(false);

  const openUploadModal = () => {
    setIsOpenUpload(true);
  };

  const closeUploadModal = () => {
    setIsOpenUpload(false);
  };

  return (
    <WrapperEditor>
      <SelectMeme openUploadModal={openUploadModal} />
      <PreviewMeme />
      <EditionMeme />
      {isOpenUpload && <UploadFile closeUploadModal={closeUploadModal} />}
    </WrapperEditor>
  );
}

export default Editor;
