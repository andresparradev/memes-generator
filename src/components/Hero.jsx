import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const WrapperHero = styled.section`
  width: 95%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 5em 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.font.sizeBig};
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.font.sizeMedium};
  color: ${(props) => props.theme.colors.textAlt};
  text-align: center;
  font-weight: 300;
`;

const ButtonStyled = styled(Button)`
  margin: 3rem auto;
`;

function Hero() {
  return (
    <WrapperHero>
      <Title>Make a Meme here!</Title>
      <SubTitle>Make your meme in a few seconds</SubTitle>
      <Link to="/editor">
        <ButtonStyled>Make a meme</ButtonStyled>
      </Link>
    </WrapperHero>
  );
}

export default Hero;
