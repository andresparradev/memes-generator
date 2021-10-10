import styled from "styled-components";
import Logo from "./Logo";

const WrapperHeader = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--borderColor);
`;

function Header() {
  return (
    <WrapperHeader>
      <Logo>MemesGenerator</Logo>
    </WrapperHeader>
  );
}

export default Header;
