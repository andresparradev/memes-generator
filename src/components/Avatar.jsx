import styled from "styled-components";
import { useHistory } from "react-router";

const AvatarStyled = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`;

const AvatarImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Avatar({
  username = "None",
  img = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
}) {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/user/${username}`);
  };

  return (
    <AvatarStyled title={username} onClick={handleClick}>
      <AvatarImg src={img} alt={username} />
    </AvatarStyled>
  );
}

export default Avatar;
