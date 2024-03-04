import "./App.css";
import { useState } from "react";
import contactsJSON from "./contacts.json";
import Table from "./components/Table.jsx";
import RandomButton from "./components/RandomButton.jsx";
import SortByName from "./components/SortByNameButton.jsx";
import SortPopularity from "./components/SortPopularityButton.jsx";


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsJSON.slice(5));
/*
  const updateContacts = () => {
    setContacts(contactsJSON.slice(0, 5));
    setRemainingContacts(contactsJSON.slice(5));
  }
*/

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      
      <div className="actionButton">
      <RandomButton contacts={contacts} remainingContacts={remainingContacts} setContacts={setContacts} setRemainingContacts={setRemainingContacts} />
      <SortByName contacts={contacts} setContacts={setContacts}></SortByName>
      <SortPopularity contacts={contacts} setContacts={setContacts}></SortPopularity>
      </div>

      <Table className="tablecointainer" contacts={contacts} />
    </div>
  );
}

export default App;
