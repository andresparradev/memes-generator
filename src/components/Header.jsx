import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import useDarkMode from "../hooks/useDarkMode";

const WrapperHeader = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

function Header() {
  const { toggleMode } = useDarkMode();

  return (
    <WrapperHeader>
      <Link to="/">
        <Logo>MemesGenerator</Logo>
      </Link>
      <Button color="dark" onClick={toggleMode}>
        Dark Mode
      </Button>
    </WrapperHeader>
  );
}

export default Header;
