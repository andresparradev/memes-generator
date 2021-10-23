import Editor from "../components/Editor";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  // const toggleMode = () => {
  //   setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  // };

  const toggleMode = () => {};

  return (
    <>
      <Header toggleMode={toggleMode} />
      <Hero />
      {/* <Editor /> */}
    </>
  );
}

export default Home;
