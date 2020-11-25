import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.article`
  width: 500px;
  height: auto;
  display: flex;
  align-items: center;
  padding: .5rem;
  margin: 0 auto;
  border: 1px solid #000;

  img {
    width: 100px;
    height: auto;
  }
  b {
    text-align: center;
    margin: 0 auto;
  }
  h2 {
    margin: 0 auto;
  }
`;

export default function Card({ name, pictureUrl, popularity, deleteContact, id }) {
  return (
    <CardStyled>
      <img src={pictureUrl} alt="" />
      <h2>{name}</h2>
    <b>{popularity}</b>
    <button onClick={() => deleteContact(id)}>Delete</button>
    </CardStyled>
  );
}
