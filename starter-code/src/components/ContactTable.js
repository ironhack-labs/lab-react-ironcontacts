import React from "react";
import ContactTableItems from "./ContactTableItems";
import RandomTableItems from "./RandomTableItems"

const ContactTable = ({initialContacts, randomContact}) => (
  <div className="contact-table-container">
    <table className="contact-table">
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
      </tr>
      {initialContacts.map(initialContact => <ContactTableItems initialContact={initialContact}/>)}
      {randomContact.map(randomContact => <RandomTableItems randomContact={randomContact}/>)}

    </table>
  </div>
);

export default ContactTable;