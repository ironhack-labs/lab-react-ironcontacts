import React from "react";
import Contact from "./Contact";
import "../styles/ContactTable.css";

const ContactTable = ({ contacts, deleteContact}) => {
  
  const contactsList = contacts.map((contact, i) => (
    <Contact key={i} {...contact} deleteContact={() => deleteContact(i)}/>
  ));

  

  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.length > 0 ? contactsList : "No items"}
      </tbody>
    </table>
  );
};

export default ContactTable;
