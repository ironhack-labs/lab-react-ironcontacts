import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
import React, { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import CelebrityCard from "./components/CelebrityCard";

function App() {
  /*   const contactList = contacts.slice(0, 5);
  console.log(contactList); */
  /*   const [randomContact, setRandomContact] = useState(contactList); */
  let remainingContacts = contacts.slice(5);
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const updatedContactList = [...contactList];
    //pick random object in array:
    let newContactIndex = [
      Math.floor(Math.random() * remainingContacts.length),
    ];

    //add new contact to contact list:
    updatedContactList.push(remainingContacts[newContactIndex]);
    console.log(updatedContactList);

    //remove added contact from remaining contact list:
    remainingContacts.splice(newContactIndex, 1); // 2nd parameter means remove one item only
    setContactList(updatedContactList);
  };

  const sortByName = () => {
    let sortedByName = [...contactList].sort((a, b) =>
      a.name.localeCompare(b.name)
    ); // 2nd parameter means remove one item only
    console.log(sortedByName);
    setContactList(sortedByName);
  };

  const sortByPopularity = () => {
    let sortedByPop = [...contactList].sort(
      (a, b) => b.popularity - a.popularity
    ); // 2nd parameter means remove one item only
    console.log(sortedByPop);
    setContactList(sortedByPop);
  };

  const deleteContact = (id) => {
    console.log("contact to remove: " + id);
    const filteredContacts = contactList.filter((celebrity) => {
      return celebrity.id !== id;
    });

    setContactList(filteredContacts);
  };
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <Button onClick={addRandomContact} className="m-3">
        Add Random Contact
      </Button>
      <Button onClick={sortByName} className="m-3">
        Sort by name
      </Button>
      <Button onClick={sortByPopularity} className="m-3">
        Sort by popularity
      </Button>
      <Table striped hover variant="dark" size="sm" responsive>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => {
            return (
              <CelebrityCard
                celebrity={contact}
                clickToDelete={deleteContact}
              />
            );
          })}
          {/*          <CelebrityCard celebrity={contactList[0]} />
          <CelebrityCard celebrity={contactList[1]} />
          <CelebrityCard celebrity={contactList[2]} />
          <CelebrityCard celebrity={contactList[3]} />
          <CelebrityCard celebrity={contactList[4]} /> */}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
