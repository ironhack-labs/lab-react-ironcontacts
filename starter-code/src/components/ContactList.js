import React, { useState } from "react";
import Contacts from "../contacts.json";
import { Celebrity } from "./Celebrity";
import { CelebrityTable, ButtonCelebrity } from "../styles/CelebrityItems.js";

export const ContactsList = () => {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  const useButtonState = () => {
    const AddButton = Contacts[Math.floor(Math.random() * Contacts.length)];
    const UpdateList = [...Contacts]; /*copy*/
    UpdateList.push(AddButton);
    setContacts(UpdateList);
  };
  return (
    <div>
      <div>
        <ButtonCelebrity onClick={useButtonState}>
          Add Random Contact
        </ButtonCelebrity>
        {/* change useState */}
      </div>
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
