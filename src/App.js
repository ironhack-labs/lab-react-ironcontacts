import { useState } from "react";
import "./App.css";
import ContactTable from "./components/ContactTable";
import contactsData from "./contacts.json";

const startingContacts = contactsData.slice(0,5);

function addUniqueRandomContact(fromArr, toArr) {
  let uniqueId = [];
  let newContact = {};
  while (uniqueId.length === 0) {
    let randomIndex = Math.floor(Math.random() * fromArr.length);
    if (toArr.some(elem => elem.id === fromArr[randomIndex].id) === false) {
      uniqueId.push(fromArr[randomIndex].id);
      newContact = fromArr[randomIndex];
    }    
  }
  return newContact;
}

function App() {
  const [contactArray, setContactArray] = useState(startingContacts); 
    
    function handleClick() {
      setContactArray((oldArray) => [...oldArray, addUniqueRandomContact(contactsData, contactArray)])
    }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleClick}>Add Random Contact</button>      
      <ContactTable contactArray={[contactArray]} />
    </div>
  );
}

export default App;
