import { useState } from "react";
import styled from "styled-components";
import useEditor from "../hooks/useEditor";
import { useHistory } from "react-router";

const Card = styled.article`
  position: relative;
  cursor: pointer;
  transition: border 100ms;

  &:hover {
    border: 5px solid ${(props) => props.theme.colors.secondary};
  }
`;

const Image = styled.img`
  display: block;
`;

const TextName = styled.p`
  background-color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  bottom: -1rem;
  left: 0;
  padding: 0 0.5rem;
`;

function CardMeme({ id, url, name }) {
  const [isHover, setIsHover] = useState(false);
  const { setMeme } = useEditor();
  const history = useHistory();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const handleClick = () => {
    setMeme(url);
    history.push("/editor");
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <Image src={url} alt={name} />
      {isHover && <TextName>{name}</TextName>}
    </Card>
  );
}

export default CardMeme;
