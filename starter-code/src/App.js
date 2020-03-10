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

  const sortByName = () => {
    const contactsOrdered = contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts([...contactsOrdered]);
  };

  const sortByPopularity = () => {
    const contactsOrdered = contacts.sort(
      (a, b) => a.popularity - b.popularity
    );
    setContacts([...contactsOrdered]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">IronContacts</h1>
      </header>

      <div className="mt-4">
        <Button onClick={addRandomContact}>Add random contact</Button>
        <Button onClick={sortByName} className="ml-2">
          Sort by name
        </Button>
        <Button onClick={sortByPopularity} className="ml-2">
          Sort by popularity
        </Button>
      </div>

      <ContactsList contacts={contacts} />
    </div>
  );
};

export default App;
