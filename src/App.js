import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";
import table from "react-bootstrap/Table";

function App() {
  let firstFive = contactsArr.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);

  const addRandomContact = () => {
    let filterContacts = contactsArr.filter((people) => {
      return !contacts.includes(people);
    });

    let randomContact =
      filterContacts[Math.floor(Math.random() * filterContacts.length)];

    setContacts(contacts.concat(randomContact));
  };

  const sortContacts = () => {
    let sortedContacts = [...contacts];
    setContacts(
      sortedContacts.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    );
    console.log(sortedContacts);
  };

  const sortPopularity = () => {
    let sortedContacts = [...contacts];
    setContacts(
      sortedContacts.sort((a, b) =>
        a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
      )
    );
    console.log(sortedContacts);
  };

  const deleteContact = (id) => {
    let allContacts = [...contacts];
    setContacts(allContacts.filter((contact) => contact.id !== id));
  };

  console.log(contacts);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="button-row">
      <button onClick={addRandomContact}>Add A Random Contact</button>
      <button onClick={sortContacts}>Sort by Name</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      </div>
      <div className="table">
      <h2 className="contact-row">
        <span>Picture</span> <span>Name      </span> <span>Popularity </span>{" "}
        <span>Won Oscar</span> <span>Won Emmy</span> <span>Delete</span>
      </h2>
      
        {contacts.map((contact) => {
          return (
            <div className="contact-row" key={contact.id}>
              <img src={contact.pictureUrl} alt={contact.name}></img>
              <span> {contact.name}</span>
              <span> {contact.popularity}</span>
              <span> {contact.wonOscar && "🏆"}</span>
              <span>{contact.wonEmmy && "🏆"}</span>
              <br></br>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
