import styled from "styled-components";

const WrapperButton = styled.button`
  text-decoration: none;
  cursor: pointer;
  padding: 0.6rem 2rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors[props.color]};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) =>
    props.color === "light" || props.color === "gray"
      ? props.theme.colors.text
      : "#fff"};

  ${(props) =>
    props.rounded &&
    `
    padding: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  `}

  &:hover {
    opacity: 0.9;
  }
`;

const Text = styled.span`
  padding-left: 0.5rem;
`;

function Button(props, { color = "primary", rounded = false }) {
  return (
    <WrapperButton color={color} rounded={rounded} {...props}>
      {props.icon}
      {props.children && <Text>{props.children}</Text>}
    </WrapperButton>
  );
}

export default Button;
