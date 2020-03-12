import React from "react";
import styled from "styled-components";

const ContactItem = styled.tr`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: solid 1px #f2f2f2;
  &:last-child {
    border: 0px;
  }
  img {
    height: 100px;
  }
`;

const Item = ({ children }) => {
  return <ContactItem>{children}</ContactItem>;
};

export default Item;
