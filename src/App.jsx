import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";
import Table from "./components/Table.jsx";
import RandomButton from "./components/RandomButton.jsx";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsJSON.slice(5));

  const updateContacts = () => {
    setContacts(contactsJSON.slice(0, 5));
    setRemainingContacts(contactsJSON.slice(5));
  }

/*
  console.log("NEW CONTACT LIST");
  console.log(contacts);
*/

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <RandomButton contacts={contacts} remainingContacts={remainingContacts} setContacts={setContacts} setRemainingContacts={setRemainingContacts} />
      <Table contacts={contacts} />
    </div>
  );
}

export default App;
