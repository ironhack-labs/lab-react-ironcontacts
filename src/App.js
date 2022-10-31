import { useState } from "react";
import "./App.css";
import ContactTable from "./components/ContactTable";
import contactsData from "./contacts.json";

const startingContacts = contactsData.slice(0, 5);

function addUniqueRandomContact(fromArr, toArr) {
  let uniqueId = [];
  let newContact = {};
  while (uniqueId.length === 0) {
    let randomIndex = Math.floor(Math.random() * fromArr.length);
    if (toArr.some((elem) => elem.id === fromArr[randomIndex].id) === false) {
      uniqueId.push(fromArr[randomIndex].id);
      newContact = fromArr[randomIndex];
    }
  }
  return newContact;
}

function App() {
  const [contactArray, setContactArray] = useState(startingContacts);

  function handleClickAdd() {
    setContactArray((oldArray) => [
      ...oldArray,
      addUniqueRandomContact(contactsData, contactArray),
    ]);
  }

  function sortByName() {
    const contactsByName = [...contactArray];
    console.log("contacts to sort: ", contactsByName);
    contactsByName.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      return 1;
    });
    setContactArray(contactsByName);
  }

  function sortByPopularity() {
    const contactsByPopularity = [...contactArray];
    contactsByPopularity.sort((a, b) => {
      if (parseFloat(a.popularity) > parseFloat(b.popularity)) return -1;
      return 1;
    });
    setContactArray(contactsByPopularity);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttonsDiv">
        <button onClick={handleClickAdd}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>
      <ContactTable contactArray={[contactArray]} />
    </div>
  );
}

export default App;
