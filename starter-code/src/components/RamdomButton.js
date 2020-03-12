import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  display: block;
  color: #000000;
  background: #61dafb;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  outline: none;
  border: 0px;
  cursor: pointer;
  &:hover {
    transition: all 0.5s;
    color: #61dafb;
    background: #282c34;
  }
`;

const RamdomButton = () => {
  return (
    <>
      <Btn>Add ramdom contact</Btn>
    </>
  );
};

export default RamdomButton;
