import React from "react";
import contactsList from "../public/contacts.json";
import { ContactItem } from "./ContactItem";

export const ContactList = () => {
  return (
    <div className="contacts-list">
      <table>
        <tbody>
          <tr className="contacts-header">
            <th>Picture</th>
            <th className="contact-name">Name</th>
            <th>Populatiry</th>
          </tr>
          {contactsList.map((item, i) => (
            <ContactItem key={i} picture={item.pictureUrl} name={item.name} popularity={Math.round(item.popularity * 100) / 100}></ContactItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};
