import "dracula-ui/styles/dracula-ui.css";
import "./App.css";
import { Table } from "dracula-ui";
import { useState } from "react";
import fullContactsList from "./contacts.json";
import { Button, Heading } from "dracula-ui";

function App() {
  let firstFiveContacts = fullContactsList.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);

  function getRandomContact() {
    let remainingContacts = fullContactsList.slice(5, 51);

    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    setContacts((contacts) => [...new Set([...contacts, randomContact])]);
  }

  function sortByName() {
    //In UTF-16 'a' = \u{61}
    setContacts((contacts) => [...contacts].sort((a, b) => (a.name > b.name ? 1 : -1)));
  }

  function sortbyPopularity() {
    setContacts((contacts) => [...contacts].sort((a, b) => (a.popularity > b.popularity ? -1 : 1)));
  }

  function deleteContact(event) {
    let newArr = [...contacts].filter((contact) => contact.id !== event.currentTarget.id);
    setContacts(newArr);
  }

  return (
    <div className="App" color="blackLight">
      <Heading color="red" as="h1" size="2xl">
        IronContacts
      </Heading>
      <div className="buttons">
        <Button size="md" variant="ghost" color="yellowPink" onClick={sortByName}>
          Sort alphabetically
        </Button>
        <Button size="md" variant="ghost" color="yellowPink" onClick={getRandomContact}>
          Get random contact
        </Button>
        <Button size="md" variant="ghost" color="yellowPink" onClick={sortbyPopularity}>
          Sort by popularity
        </Button>
      </div>
      <Table variant="striped" color="cyan">
        <thead className="columnHeaders">
          <tr>
            <th className="drac-text drac-text-orange">Picture</th>
            <th className="drac-text drac-text-orange">Name</th>
            <th className="drac-text drac-text-orange">Popularity</th>
            <th className="drac-text drac-text-orange">Oscar</th>
            <th className="drac-text drac-text-orange">Emmy</th>
            <th style={{ maxWidth: 200 }} className="drac-text drac-text-orange">
              Remove
            </th>
          </tr>
        </thead>
        {contacts.map((contact) => (
          <tr id={contact.id}>
            <td>
              <img src={contact.pictureUrl} alt={contact.name}></img>
            </td>
            <td>
              <p className="drac-text drac-text-red">{contact.name}</p>
            </td>
            <td>
              <p className="drac-text drac-text-white">{Math.floor(contact.popularity)}</p>
            </td>
            <td>{contact.wonOscar ? "🏆" : false}</td>
            <td>{contact.wonEmmy ? "🏆" : false}</td>
            <td>
              <Button id={contact.id} variant="outline" color="yellowPink" onClick={deleteContact}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}

export default App;
