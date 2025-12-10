import "./App.css";
import ActionButtons from "./components/ActionButtons";
import ContactsTable from "./components/ContactsTable";
import contactsData from "./contacts.json";
import { useState } from "react";

function App() {

  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.find((c) => c.id === contact.id)
    );
    if (remainingContacts.length === 0) return;
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];
      setContacts([...contacts, randomContact]);
    }
  }

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => 
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  }

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => 
      b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  }
  
  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>

      <ActionButtons
        onAddRandom={addRandomContact}
        onSortByName={sortByName}
        onSortByPopularity={sortByPopularity}
      />

      <ContactsTable 
        contacts={contacts} 
        onDelete={deleteContact} 
      />
    </div>
  );
}

export default App;
