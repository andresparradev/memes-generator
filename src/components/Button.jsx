import styled from "styled-components";

const WrapperButton = styled.button`
  cursor: pointer;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors[props.color]};
  color: ${(props) => (props.color === "light" ? "#000" : "#fff")};
  
  ${props => props.rounded && `
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `}

  &:hover {
    opacity: 0.9;
  }
`;

function Button(props, { color = "primary", rounded = false}) {
  return <WrapperButton color={color} rounded={rounded} {...props} />;
}

export default Button;
