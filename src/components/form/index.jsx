import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  width: 90%;
  max-width: 500px;
  margin: 4rem auto;
  padding: 1.5rem;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

function index({ children, handleSubmit, title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </Wrapper>
  )
}

export default index