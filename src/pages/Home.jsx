import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Hero from "../components/Hero";

function Home() {
  const toggleMode = () => {};

  return (
    <>
      <Helmet>
        <title>Home | MemesGenerator</title>
        <meta name="description" content="Make your memes in a few seconds."/>
      </Helmet>
      <Header toggleMode={toggleMode} />
      <Hero />
    </>
  );
}

export default Home;
