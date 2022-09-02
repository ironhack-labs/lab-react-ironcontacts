import { useState } from "react";
import contactsData from "../../data/contacts.json";
// import ContactItem from "./ContactItem";

function ContactsTable() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleAddRandomContact = () => {
    const pendingContacts = contactsData.filter((c) => !contacts.includes(c));
    const random =
      pendingContacts[Math.floor(pendingContacts.length * Math.random())];

    if (random) {
      setContacts([random, ...contacts]);
    }
  };

  const handleSortByPopularity = () => {
    setContacts([...contacts.sort((a, b) => b.popularity - a.popularity)]);
  };

  const handleSortByName = () => {
    setContacts([...contacts.sort((a, b) => a.name.localeCompare(b.name))])
  };

  const handleDeleteItem = (contact) => {
    setContacts(contacts.filter((c) => contact.id !== c.id))
  }

  return (
    <div>
      <button
        onClick={handleAddRandomContact}
        className="btn btn-sm btn-primary me-2"
      >
        Add random artist
      </button>
      <button
        onClick={handleSortByPopularity}
        className="btn btn-sm btn-primary me-2"
      >
        Sort by Popularity
      </button>
      <button
        onClick={handleSortByName}
        className="btn btn-sm btn-primary me-2"
      >
        Sort by Name
      </button>
      <table className="table">
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  width="100px"
                />
              </td>
              <td>
                <h3>{contact.name}</h3>
              </td>
              <td>
                <h3>{contact.popularity.toFixed(2)}</h3>
              </td>
              <td>
                {contact.wonOscar ? (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gold_Cup_icon.svg/1200px-Gold_Cup_icon.svg.png"
                    alt="Oscar"
                    width="50px"
                  />
                ) : (
                  ""
                )}
              </td>
              <td>
                {contact.wonEmmy && (
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Gold_Cup_icon.svg/1200px-Gold_Cup_icon.svg.png"
                    alt="Emmy"
                    width="50px"
                  />
                )}
              </td>
              <td><button onClick={() => handleDeleteItem(contact)} className="btn btn-sm btn-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactsTable;
