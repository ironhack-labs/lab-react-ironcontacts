import React from "react";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";

import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));

  function addRandomContact() {
    const contactsNotDisplayed = contacts.filter(
      (contact) => !contactsArr.map((el) => el.id).includes(contact.id)
    );
    if (contactsNotDisplayed.length === 0) {
      return;
    }
    // console.log(contactsNotDisplayed);
    const randomContact = [
      contactsNotDisplayed[
        Math.floor(Math.random() * contactsNotDisplayed.length)
      ],
    ];

    // console.log(randomContact);
    const newArr = contactsArr.concat(randomContact);
    // const newArr = [...contactsArr, randomContact] would also work! NP random contact should no longer be in an array then
    setContactsArr(newArr);
  }

  function sortName() {
    const newArr = [...contactsArr].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactsArr(newArr);
  }

  function sortPopularity() {
    const newArr = [...contactsArr].sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setContactsArr(newArr);
  }

  function deleteContact(id) {
    const newArr = contactsArr.filter((contact) => contact.id !== id);
    setContactsArr(newArr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Button onClick={addRandomContact}>Add Random Contact</Button>
      <Table
        deleteContact={deleteContact}
        sortName={sortName}
        sortPopularity={sortPopularity}
        contactsArr={contactsArr}
      />
    </div>
  );
}

export default App;
