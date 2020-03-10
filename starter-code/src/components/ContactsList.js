import React from "react";
import ContactItem from "./ContactItem";
import Table from "react-bootstrap/Table";

const ContactsList = ({ contacts, deleteContact }) => (
  <Table className="col-md-5 mx-auto mt-4" striped bordered hover>
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {contacts.map((contact, index) => (
        <ContactItem
          key={index}
          contact={contact}
          deleteContact={() => deleteContact(index)}
        />
      ))}
    </tbody>
  </Table>
);

export default ContactsList;
