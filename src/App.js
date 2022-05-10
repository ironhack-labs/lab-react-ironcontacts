import "./App.css";
import contactsArr from "./contacts.json";
import { useState } from "react";
import Table from "react-bootstrap/Table";

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
        <button className="glow-on-hover" onClick={addRandomContact}>
          Add A Random Contact
        </button>
        <button className="glow-on-hover" onClick={sortContacts}>
          Sort by Name
        </button>
        <button className="glow-on-hover" onClick={sortPopularity}>
          Sort by Popularity
        </button>
      </div>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr className="contact-row">
              <th id="name-col">Picture</th>
              <th>Name</th>
              <th>Popularity </th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th id="delete-col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => {
              return (
                <tr className="contact-row" key={contact.id}>
                  <td className="col">
                    <img src={contact.pictureUrl} alt={contact.name}></img>
                  </td>
                  <td className="col">{contact.name}</td>
                  <td className="col"> {contact.popularity}</td>
                  <td className="col"> {contact.wonOscar ? "🏆" : ""}</td>
                  <td className="col">{contact.wonEmmy ? "🏆" : ""}</td>
                  <td>
                    <button
                      className="glow-on-hover"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default App;
