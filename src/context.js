import { createContext, useContext, useState } from "react";
import allIHContacts from "./contacts.json";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [contacts, setContacts] = useState(allIHContacts.slice(20, 25));

  const otherContacts = allIHContacts.filter((c) => contacts.indexOf(c) < 0);

  function addRandomContact(event) {
    const random = parseInt(Math.random() * (otherContacts.length - 0) + 1);
    setContacts([...contacts, otherContacts[random]]);
  }

  function sortByName() {
    setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  }

  function sortByPopularity() {
    setContacts([...contacts].sort((a, b) => b.popularity - a.popularity));
  }

  function removeContact(id) {
    setContacts([...contacts].filter((c) => c.id !== id));
  }

  return (
    <AppContext.Provider
      value={{
        contacts,
        addRandomContact,
        sortByName,
        sortByPopularity,
        removeContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
