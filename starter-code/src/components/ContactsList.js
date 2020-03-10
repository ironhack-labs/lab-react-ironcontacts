import React from "react";
import ContactItem from "./ContactItem";
import Table from "react-bootstrap/Table";

const ContactsList = props => (
  <Table className="col-md-4 mx-auto mt-4" striped bordered hover>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.map((contact, index) => (
        <ContactItem key={index} contact={contact} />
      ))}
    </tbody>
  </Table>
);

export default ContactsList;
