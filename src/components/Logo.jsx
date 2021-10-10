import styled from "styled-components";

const LOGO_URL =
  "https://camo.githubusercontent.com/3f8a11cdc16b6e40f2fb1c79e607a5ed1f701ba67b301f87eef252d1d84bb01b/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f736f79616e647265736761727a2e61707073706f742e636f6d2f6f2f6173736574732532464c6f676f2e706e673f616c743d6d6564696126746f6b656e3d61393836626332382d333735372d343664392d623436652d643236376138316231333033";

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
