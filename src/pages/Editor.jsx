import { Helmet } from "react-helmet";
import Header from "../components/Header";
import EditorComponent from "../components/Editor";

function Editor() {
  return (
    <>
      <Helmet>
        <title>Editor | MemesGenerator</title>
        <meta name="description" content="Editor for make memes" />
      </Helmet>
      <Header />
      <EditorComponent />
    </>
  );
}

export default Editor;
