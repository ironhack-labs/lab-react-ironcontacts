import React from "react";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";

import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));
  const [sortNameDirection, setSortNameDirection] = React.useState("asc");
  const [sortPopularityDirection, setSortPopularityDirection] = React.useState(
    "asc"
  );

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
    if (sortNameDirection === "asc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      setSortNameDirection("desc");
      setContactsArr(newArr);
    } else if (sortNameDirection === "desc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
      setSortNameDirection("asc");
      setContactsArr(newArr);
    }
  }

  function sortPopularity() {
    if (sortPopularityDirection === "asc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return a.popularity - b.popularity;
      });
      setSortPopularityDirection("desc");
      setContactsArr(newArr);
    } else if (sortPopularityDirection === "desc") {
      const newArr = [...contactsArr].sort((a, b) => {
        return b.popularity - a.popularity;
      });
      setSortPopularityDirection("asc");
      setContactsArr(newArr);
    }
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
