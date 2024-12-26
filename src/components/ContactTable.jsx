import Contact from "./Contact";
import contacts from "../contacts.json";
import { useState } from "react";

function ContactTable() {
  const sampleSize = 4;
  const sampleContacts = [...contacts].slice(0, sampleSize);
  const [remainingContacts, setRemainingContacts] = useState(
    [...contacts]
      .slice(sampleSize, contacts.length)
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );

  const [contactsToShow, setContactsToShow] = useState(sampleContacts);

  const addRandomContact = () => {
    if (remainingContacts.length) {
      setContactsToShow([remainingContacts[0], ...contactsToShow]);
      setRemainingContacts([...remainingContacts].slice(1));
    }
  };

  const sortContactsByPopularity = () => {
    setContactsToShow([...contactsToShow].sort((a, b) => b.popularity - a.popularity));
  };

  const sortContactsByName = () => {
    setContactsToShow([...contactsToShow].sort((a, b) => a.name.localeCompare(b.name)));
  };

  const deleteContact = (contact) => {
    setContactsToShow([...contactsToShow].filter((element) => element.id !== contact.id));
  };

  return (
    <div id="tableContainer">
      <h2>IronContacts</h2>
      <button className="btn btn-command" onClick={addRandomContact}>
        Add Random Contact
      </button>
      <button className="btn btn-command" onClick={sortContactsByPopularity}>
        Sort by popularity
      </button>
      <button className="btn btn-command" onClick={sortContactsByName}>
        Sort by name
      </button>
      <table id="contactTable">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsToShow.map((person) => (
            <Contact
              key={person.id}
              pictureURL={person.pictureUrl}
              name={person.name}
              popularity={person.popularity.toFixed(2)}
              oscar={person.wonOscar && "🏆"}
              emmy={person.wonEmmy && "🌟"}
              deleteContact={() => deleteContact(person)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactTable;
