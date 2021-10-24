import styled from "styled-components";
import Header from "../components/Header";
import Spinner from "../components/spinner";
import ListOfMemes from "../components/ListOfMemes";
import useMemes from "../hooks/useMemes";
import { Helmet } from "react-helmet";

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
      <Header />
      <Wrapper>
        <Title>Select Meme</Title>
        {loading ? <Spinner /> : <ListOfMemes memes={memes} />}
      </Wrapper>
    </>
  );
}

export default Discover;
