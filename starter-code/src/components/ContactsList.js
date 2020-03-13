import React from "react";
import ContactItem from "./ContactItem";
import Table from "react-bootstrap/Table";

const ContactsList = ({ contacts, deleteContact }) => (
  <Table className="col-md-4 mx-auto mt-4" striped bordered hover>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          deleteContact={() => deleteContact(contact.id)}
        />
      ))}
    </tbody>
  </Table>
);

export default ContactsList;
