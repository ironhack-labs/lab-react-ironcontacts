import "./App.css";
import data from "./contacts.json";
import { useState } from "react";
import ContactCard from "./Components/ContactCard";
import ContactTable from "./Components/ContactsTable";

function App() {
  let contactList =  data.slice(0,5)
  const [contacts, setContacts] = useState(contactList);
  const [showRandom, setAddRandom] = useState(true)
  //console.log(contactsToList[0].name)

  const deleteContact = contactId => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts)
  }

  const randomContacts = () => {
    let randomContact;
    let exists;
    do {
      // Generate a random index and select a contact
      const randomIndex = Math.floor(Math.random() * data.length);
      randomContact = data[randomIndex];
      // Check if the random contact already exists in the contacts state
      exists = contacts.some(contact => contact.id === randomContact.id);
    } while (exists); // If exists, loop again until a new contact is found
    // Update the contacts state with the new contact
    setContacts(contacts => [...contacts, randomContact]);
  }

  const toggleRandom= () =>{
    setAddRandom(!showRandom)
  }

  const sortByPopularity = () => {
    setContacts(contacts => [...contacts].sort((a, b) => b.popularity - a.popularity));
  };
  const sortByName = () => {
    setContacts(contacts => [...contacts].sort((a, b) => a.name.localeCompare(b.name)));
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={(randomContacts)}>{showRandom? 'Add Random Contact' : 'Contact added'}</button>
      <button onClick={(sortByPopularity)}>Sort by Popularity</button>
      <button onClick={(sortByName)}>Sort by Name</button>
      <ContactTable/>
      {...contacts.map((contact, index)=>{
          return(
            <ContactCard key= {index} picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} wonOscar={contact.wonOscar} wonEmmy={contact.wonEmmy} id={contact.id} delete = {deleteContact}/>
            
          )
        })}

    </div>
  );
}

export default App;
