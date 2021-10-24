import styled from "styled-components";
import CardMeme from "./CardMeme";

const ListOfMemesStyled = styled.div`
  --columnsGrid: 2;
  column-count: var(--columnsGrid);
  column-gap: 1rem;

  article {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 900px) {
    --columnsGrid: 3;
  }

  @media screen and (min-width: 1200px) {
    --columnsGrid: 4;
  }
`;

function ListOfMemes({ memes }) {
  return (
    <ListOfMemesStyled>
      {memes.map(({ id, url, name }) => (
        <CardMeme key={id} id={id} url={url} name={name} />
      ))}
    </ListOfMemesStyled>
  );
}

export default ListOfMemes;
