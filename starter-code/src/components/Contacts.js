import React, { useState } from "react";
import contacts from "/src/contacts.json";

const initList = contacts.slice(0, 5);

export const Contacts = () => {
  const [contacts, setContacts] = useState(initList);

  return (
    <div>
      <p>Picture</p>
      <p>Name</p>
      <p>Popularity</p>
      <p>Action</p>
    </div>
  );
};
