import React from "react";
import styled from "styled-components";

const Row = styled.tr`
  .contactImg {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const ContactItem = props => {
  const contact = props.contact;

  return (
    <Row>
      <td className="py-1">
        <img
          className="contactImg"
          src={contact.pictureUrl}
          alt={contact.name + " photo"}
        />
      </td>
      <td className="align-middle">{contact.name}</td>
      <td className="align-middle">{contact.popularity}</td>
    </Row>
  );
};

export default ContactItem;
