import React from "react";
import styled from "styled-components";

const ContactItem = styled.tr`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  border-top: 1px 1px 0 1px solid 1px #f2f2f2;
  -webkit-box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.3);
  td {
    width: 20%;
    text-align: center;
  }
  img {
    height: 100px;
  }
`;

const Item = ({ children }) => {
  return <ContactItem>{children}</ContactItem>;
};

export default Item;
