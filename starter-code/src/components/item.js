import React from "react";
import styled from "styled-components";
//import ReactDOM from "react-dom";

const Container = styled.div`
  color: #fffcf9;
  margin: 5px auto;
  width: 90%;
  padding: 15px 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #91c499;
  box-sizing: border-box;
`;

const Picture = styled.img`
  width: 10%;
  margin-right: 50px;
`;

const Text = styled.p`
  width: 30%;
  margin: 20px;
  ::selection {
    background: #91c499;
  }
`;

const Button = styled.div`
  background-color: #ff6978;
  color: #fffcf9;
  border: none;
  border-radius: 2px;
  padding: 5px 20px;
  border: 1px solid #ff6978;
  &:hover {
    background-color: rgba(0, 0, 0, 0);
    color: #ff6978;
    border: 1px solid #ff6978;
  }
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;

export const Item = ({ name, pictureUrl, popularity, setDelete, index }) => {
  return (
    <Container>
      <Picture src={pictureUrl} alt={`${name}'s face`} />
      <Text>{name}</Text>
      <Text>{popularity}</Text>
      <Button onClick={() => setDelete(index)}>Delete</Button>
    </Container>
  );
};
