import React from "react";
import contactsList from "../public/contacts.json";
import { ContactItem } from "./ContactItem";

export const ContactList = () => {
  return (
    <div className="contact-list">
      {contactsList.map((item, i) => {
        <ContactItem key={i} picture={item.pictureUrl} name={item.name} popularity={item.popularity}></ContactItem>;
      })}
    </div>
  );
};
