import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import contactsJSON from "./contacts.json";
import ContactsList from "./components/ContactsList";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import _ from "lodash";

const App = () => {
  const [contacts, setContacts] = useState(contactsJSON.splice(0, 5));

  const addRandomContact = e => {
    const randomContact = contactsJSON[_.random(contactsJSON.length)];
    setContacts([...contacts, randomContact]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">IronContacts</h1>
      </header>

      <div className="mt-4">
        <Button onClick={addRandomContact}>Add random contact</Button>
      </div>

      <ContactsList contacts={contacts} />
    </div>
  );
};

export default App;
