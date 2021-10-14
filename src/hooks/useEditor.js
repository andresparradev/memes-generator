import { toPng } from "html-to-image";
import { useContext } from "react";
import { EditorContext } from "../context/editorContext";

function useEditor() {
  const context = useContext(EditorContext);

  const downloadMeme = () => {
    toPng(context.memeRef.current)
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
    ...context,
    downloadMeme,
  };
}

export default useEditor;
