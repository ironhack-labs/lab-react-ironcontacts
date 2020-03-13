import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactList = ({ list, deleteContact }) => {
  return (
    <List>
      {list.map((item, i) => (
        <ContactItem key={i} picture={item.pictureUrl} name={item.name} popularity={Math.round(item.popularity * 100) / 100} deleteContact={e => deleteContact(item)}></ContactItem>
      ))}
    </List>
  );
};
