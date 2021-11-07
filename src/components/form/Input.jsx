import styled from "styled-components";

const InputStyled = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  margin-top: 0.3rem;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
`;

function Input(props) {
	return <InputStyled {...props} />;
}

export default Input;