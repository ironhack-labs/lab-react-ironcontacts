import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactList = ({ list, deleteContact }) => {
  return (
    <>
      <div className="contacts-list">
        <table>
          <tbody>
            <tr className="contacts-header">
              <th>Picture</th>
              <th className="contact-name">Name</th>
              <th>Populatiry</th>
            </tr>
            {list.map((item, i) => (
              <ContactItem key={i} picture={item.pictureUrl} name={item.name} popularity={Math.round(item.popularity * 100) / 100} deleteContact={e => deleteContact(item)}></ContactItem>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
