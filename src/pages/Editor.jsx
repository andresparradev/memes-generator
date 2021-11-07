import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import EditorComponent from "../components/Editor";

function Editor() {
  return (
    <>
      <Helmet>
        <title>Editor | MemesGenerator</title>
        <meta name="description" content="Editor for make memes" />
      </Helmet>

      <Layout>
        <EditorComponent />
      </Layout>
    </>
  );
}

export default Editor;
