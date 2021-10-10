import styled from "styled-components";

const LOGO_URL =
  "https://firebasestorage.googleapis.com/v0/b/soyandresgarz.appspot.com/o/assets%2FLogo.png?alt=media&token=a986bc28-3757-46d9-b46e-d267a81b1303";

const WrapperLogo = styled.div`
  margin: 0;
`;

const Img = styled.img`
  width: 200px;
`;

function Logo() {
  return (
    <WrapperLogo>
      <Img src={LOGO_URL} alt="Logo memes generator" />
    </WrapperLogo>
  );
}

export default Logo;
