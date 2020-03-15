import React, { useState } from "react";
import contacts from "/src/contacts.json";

const initList = contacts.slice(0, 5);

export const contactsList = () => {
  const [contacts, setContacts] = useState(initList);
  <div>hi </div>;
};
