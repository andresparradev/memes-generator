import Editor from "./components/Editor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import EditorProvider from "./context/editorContext";

function App() {
  return (
    <div className="App">
      <EditorProvider>
        <Header />
        <Hero />
        <Editor />
      </EditorProvider>
    </div>
  );
}

export default App;
