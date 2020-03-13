import React from "react";
import styled from "styled-components";
//import ReactDOM from "react-dom";

const Container = styled.div`
  color: #fffcf9;
  margin: 5px auto;
  width: 90%;
  padding: 5px 0;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #91c499;
  ::selection {
    background: #91c499;
  }
`;

const Picture = styled.h5`
  width: 15%;
  margin-right: 50px;
  text-align: center;
  ::selection {
    background: #91c499;
  }
`;

const Name = styled.h5`
  width: 30%;
  margin: 20px;
  ::selection {
    background: #91c499;
  }
`;

export const Title = () => {
  return (
    <Container>
      <Picture>Picture</Picture>
      <Name>Name</Name>
      <Name>Popularity</Name>
    </Container>
  );
};
