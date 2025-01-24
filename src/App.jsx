import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsList, setcontactsList] = useState(contacts.slice(0, 5));

  const AddRandomContact = () => {
    const remainingContacts = contacts.filter(
      (contact) => !contactsList.includes(contact)
    );

    if (remainingContacts.length) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setcontactsList([...contactsList, randomContact]);
    }
  };

  const sortByName = () => {
    const sortedContacts = [...contactsList].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setcontactsList(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsList].sort(
      (a, b) => b.popularity - a.popularity
    );
    setcontactsList(sortedContacts);
  };

  const DeleteContact = (id) => {
    const updatedContacts = contactsList.filter((contact) => contact.id !== id);
    setcontactsList(updatedContacts);
  };
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={AddRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width={"80"} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🌟" : ""}</td>
              <td>
                <button onClick={() => DeleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
