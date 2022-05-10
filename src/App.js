import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";

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
  let sortedContacts = [...contacts]
  sortedContacts.sort((a, b) => (a.name > b.name) ? 1 : (b.name > a.name) ? -1: 0 );
  console.log(sortedContacts)
   }

  console.log(contacts)

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add A Random Contact</button>
      <button onClick={sortContacts}>Sort by Name</button>

      <h2 className="contact-row">
        <span>Picture</span> <span>Name</span> <span>Popularity</span>{" "}
        <span>Won Oscar</span> <span>Won Emmy</span>
      </h2>
      <div className="table">
        {contacts.map((contact) => {
          return (
            <div className="contact-row" key={contact.id}>
              <img src={contact.pictureUrl} alt={contact.name}></img>
              <span> {contact.name}</span>
              <span> {contact.popularity}</span>
              <span> {contact.wonOscar && "🏆"}</span>
              <span>{contact.wonEmmy && "🏆"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
