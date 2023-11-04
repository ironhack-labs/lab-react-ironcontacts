import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";
import ButtonsList from "./components/ButtonsList";
import TableActors from "./components/TableActors";

function App() {
  const [contactsToDisplay, setContactsToDisplay] = useState(
    contacts.slice(0, 5)
  );

  const handleCreateRandomContact = () => {
    if (contacts.length === contactsToDisplay.length) {
      return;
    }

    let randomIndex = Math.floor(Math.random() * contacts.length);
    let randomActor = contacts[randomIndex];

    while (
      contactsToDisplay.find((contact) => {
        return contact.id === randomActor.id;
      }) !== undefined
    ) {
      randomIndex = Math.floor(Math.random() * contacts.length);
      randomActor = contacts[randomIndex];
    }

    setContactsToDisplay((currentContacts) => [
      randomActor,
      ...currentContacts,
    ]);
  };

  const sortContactsByName = () => {
    const sortedByName = [...contactsToDisplay].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setContactsToDisplay(sortedByName);
  };

  const sortContactsByPopularity = () => {
    const sortedByPopularity = [...contactsToDisplay].sort(
      (a, b) => b.popularity - a.popularity
    );

    setContactsToDisplay(sortedByPopularity);
  };

  const deleteContactById = (contactId) => {
    const updatedContacts = contactsToDisplay.filter((contact) => {
      return contact.id !== contactId;
    });

    setContactsToDisplay(updatedContacts);
  };

  return (
    <div className="main">
      <h1>LAB | React IronContacts</h1>
      <ButtonsList
        handleCreateRandomContact={handleCreateRandomContact}
        sortContactsByName={sortContactsByName}
        sortContactsByPopularity={sortContactsByPopularity}
      ></ButtonsList>
      <TableActors
        contactsToDisplay={contactsToDisplay}
        deleteContactById={deleteContactById}
      ></TableActors>
    </div>
  );
}

export default App;
