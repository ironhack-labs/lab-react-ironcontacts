import { useState } from "react";
import contacts from "../contacts.json";
import ContactRow from "../components/ContactRow";

let contactsCopy = [...contacts];

function contactList() {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {contactsCopy.map((contact) => {
          return (
            <ContactRow
              key={contact._id}
              contact={contact}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default contactList;
