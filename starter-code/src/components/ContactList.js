import React, { useState } from "react";
import Contacts from "../contacts.json";
import { Celebrity } from "./Celebrity";
import { CelebrityTable, ButtonCelebrity } from "../styles/CelebrityItems.js";

export const ContactsList = () => {
  const [contacts, setContacts] = useState(Contacts.slice(0, 5));
  const useButtonState = () => {
    const AddButton = Contacts[Math.floor(Math.random() * Contacts.length)];
    const UpdateList = [...Contacts]; /*copy*/
    contacts.includes(AddButton)
      ? useButtonState()
      : updatedList.push(AddButton);

    UpdateList.push(AddButton);
    setContacts(UpdateList);
  };
  const UseSortName = () => {
    const sortedList = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedList);
  };

  const UseSortPopularity = () => {
    const sortedList = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedList);
  };

  const removeCelebrity = id => {
    const newList = [...contacts].filter(contact => contact.id !== id);
    setContacts(newList);
  };
  // const removeCelebrity = id => {
  //   const newList = [...contacts];
  //   newList.splice(id, 1);
  //   setContacts(newList);
  // };
  return (
    <div>
      <div>
        <ButtonCelebrity onClick={useButtonState}>
          Add Random Contact
        </ButtonCelebrity>
        <ButtonCelebrity onClick={UseSortName}>Sort by name</ButtonCelebrity>
        <ButtonCelebrity onClick={UseSortPopularity}>
          Sort by popularity
        </ButtonCelebrity>
        {/* change useState */}
      </div>
      <CelebrityTable>
        <p>Picture</p>
        <p>Name</p>
        <p>Popularity</p>
        <p>Action</p>
      </CelebrityTable>
      {contacts.map((contact, i) => {
        return (
          <Celebrity
            key={i}
            name={contact.name}
            popularity={contact.popularity}
            picture={contact.pictureUrl}
            id={contact.id}
            removeC={removeCelebrity}
          />
        );
      })}
    </div>
  );
};
