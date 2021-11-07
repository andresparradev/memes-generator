import { Helmet } from "react-helmet";
import styled from "styled-components";

import Layout from "../components/Layout";
import Spinner from "../components/spinner";
import ListOfMemes from "../components/ListOfMemes";

import useMemes from "../hooks/useMemes";

const Wrapper = styled.main`
  padding: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

function Discover() {
  const { memes, loading } = useMemes();

  return (
    <>
      <Helmet>
        <title>Discover | MemesGenerator</title>
        <meta
          name="description"
          content="Discover images to create your own memes."
        />
      </Helmet>

      <Layout>
        <Wrapper>
          <Title>Select Meme</Title>
          {loading ? <Spinner /> : <ListOfMemes memes={memes} />}
        </Wrapper>
      </Layout>
    </>
  );
}

export default Discover;
