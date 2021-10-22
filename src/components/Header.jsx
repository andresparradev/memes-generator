import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";

const WrapperHeader = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

function Header({ toggleMode }) {
  return (
    <WrapperHeader>
      <Logo>MemesGenerator</Logo>
      <Button color="dark" onClick={toggleMode}>
        Dark Mode
      </Button>
    </WrapperHeader>
  );
}

export default Header;
