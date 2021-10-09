import styled from "styled-components";

const WrapperHero = styled.section`
  width: 95%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 5em 0;
`;

const Title = styled.h2`
  font-size: var(--fontSizeBig);
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: var(--fontSizeMedium);
  color: var(--textAltColor);
  text-align: center;
  font-weight: 300;
`;

function Hero() {
  return (
    <WrapperHero>
      <Title>Make a Meme here!</Title>
      <SubTitle>Make your meme in a few seconds</SubTitle>
    </WrapperHero>
  );
}

export default Hero;
