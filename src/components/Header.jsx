import styled from "styled-components";

const WrapperHeader = styled.header`
  padding: 1em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--borderColor);
`;

const Logo = styled.h1`
  margin: 0;
  font-size: var(--fontSizeHeading);
`;

function Header() {
  return (
    <WrapperHeader>
      <Logo>MemesGenerator</Logo>
    </WrapperHeader>
  );
}

export default Header;
