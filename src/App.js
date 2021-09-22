import { useState } from "react";
import "./App.css";
import contactsArray from "./contacts.json";
import ContactList from "./components/ContactList";
import Menu from "./components/Menu";

const firstContacts = contactsArray.slice(0, 5);

function App() {

  const [contacts, setContacts] = useState(firstContacts);

  function handleDelete(contactId){
    let contactsToDelete = [...contacts]
    const filteredContacts = contactsToDelete.filter((contact) => {return contact.id !== contactId;})
    setContacts(filteredContacts)
  }

  function sortByName () {
    let sortedContacts = [...contacts];
    sortedContacts.sort((a,b) => {
      if (a.name > b.name) {
        return 1
      } else {
        return -1
      }
    })

    setContacts(sortedContacts)
    
  }

  function sortByPopularity () {
    let sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts)
  }

  function handleRandom() {
    // always
    const addContactArray = [...contacts];

    function compareContacts (element, array) {
        for (let i = 0; i < array.length; i++) {
            if (element.id === array[i].id) {
              return false;
            }
        }
        return true;
    }
    
    const filteredContacts =  contactsArray.filter(contact => compareContacts(contact, addContactArray))
   
    const randomNumber = Math.floor(Math.random()*filteredContacts.length)
   
    const randomContact = filteredContacts[randomNumber];
    
    addContactArray.unshift(randomContact)
    setContacts(addContactArray)
   
  }

  return (
    <div className="App">
      <Menu handleRandom={handleRandom} sortByName={sortByName} sortByPopularity={sortByPopularity}/>
      <ContactList contacts={contacts} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
