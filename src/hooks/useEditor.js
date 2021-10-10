import { useState, useRef } from "react";
import { toPng } from "html-to-image";

function useEditor() {
  const [memeImage, setMemeImage] = useState();
  const [textTop, setTextTop] = useState("Top text");
  const [textBottom, setTextBottom] = useState("Bottom text");
  const memeRef = useRef();

  const handleChangeMeme = (e) => {
    setMemeImage(e.target.value);
  };

  const handleChangeTextTop = (e) => {
    setTextTop(e.target.value);
  };

  const handleChangeTextBottom = (e) => {
    setTextBottom(e.target.value);
  };

  const handleDownload = () => {
    toPng(memeRef.current)
      .then((dataUrl) => {
        const imageLink = document.createElement("a");
        imageLink.download = "meme.png";
        imageLink.href = dataUrl;
        imageLink.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return {
    memeImage,
    memeRef,
    textTop,
    textBottom,
    handleChangeMeme,
    handleChangeTextTop,
    handleChangeTextBottom,
    handleDownload,
  };
}

export default useEditor;
