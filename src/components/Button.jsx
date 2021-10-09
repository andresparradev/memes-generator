import styled from "styled-components";

const COLORS_LIST = {
  primary: "#007bdf",
  secondary: "#fba905",
  dark: "#272a2e",
  light: "#borderColor",
};

const WrapperButton = styled.button`
  cursor: pointer;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  background-color: ${(props) => COLORS_LIST[props.color]};
  color: ${(props) => (props.color === "light" ? "#000" : "#fff")};

  &:hover {
    opacity: 0.9;
  }
`;

function Button({ children, color = "primary" }) {
  return <WrapperButton color={color}>{children}</WrapperButton>;
}

export default Button;
