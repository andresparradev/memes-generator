import styled from "styled-components";
import { BiLogOut } from "react-icons/bi";

import Avatar from "./Avatar";
import Button from "./Button";

const UserAvatarStyled = styled.div`
  margin-left: 2rem;
  display: flex;
`;

const ButtonStyled = styled(Button)`
  margin-right: 1rem;
`;

function UserAvatar({ user, logout }) {
  return (
    <UserAvatarStyled>
      <ButtonStyled onClick={logout} color="gray" icon={<BiLogOut />}>
        Logout
      </ButtonStyled>
      <Avatar username={user.username} />
    </UserAvatarStyled>
  );
}

export default UserAvatar;
