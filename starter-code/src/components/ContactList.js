import React, { useState } from "react";
import Contacts from "../contacts.json";
import { Celebrity } from "./Celebrity";
import { CelebrityTable } from "../styles/CelebrityItems.js";

export const ContactsList = () => {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  return (
    <div>
      <CelebrityTable>
        <p>Picture</p>
        <p>Name</p>
        <p>Popularity</p>
      </CelebrityTable>

      {contacts.map((contact, i) => {
        return (
          <Celebrity
            key={i}
            name={contact.name}
            popularity={contact.popularity}
            picture={contact.pictureUrl}
          />
        );
      })}
    </div>
  );
};
