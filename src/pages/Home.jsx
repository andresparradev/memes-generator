import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | MemesGenerator</title>
        <meta name="description" content="Make your memes in a few seconds." />
      </Helmet>

      <Layout>
        <Hero />
      </Layout>
    </>
  );
}

export default Home;
