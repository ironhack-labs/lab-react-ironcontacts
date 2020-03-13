import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const Row = styled.tr`
  .contactImg {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const ContactItem = ({ contact, deleteContact }) => {
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
      <td className="align-middle">{contact.popularity.toFixed(2)}</td>
      <td className="align-middle">
        <Button className="btn btn-sm" onClick={deleteContact}>
          <i className="fas fa-trash-alt mr-1"></i>
          <span>Delete</span>
        </Button>
      </td>
    </Row>
  );
};

export default ContactItem;
