import { useState } from "react";

function compareName( a, b ) {
  const aName = a.name.split(" ");
  const bName = b.name.split(" ");
  if (aName[0] < bName[0]) {
    return -1;
  }
  if (aName[0] > bName[0]) {
    return 1;
  }
  return 0;
}

function Contacts({ allContacts }) {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const addRandom = () => {
    const array = allContacts.filter((e) => !contacts.includes(e));
    const randomElement = array[Math.floor(Math.random() * array.length)];

    setContacts((oldContacts) => [...oldContacts, randomElement]);
  };

  const sortName = () => {
    const contactsSorted = [...contacts].sort(compareName);
    setContacts(contactsSorted);
  };

  const sortPopularity = () => {
    const contactsSorted = [...contacts].sort((a, b) => a.popularity - b.popularity);
    setContacts(contactsSorted);
  };

  const deleteContact = (contactId) => {
    const filteredContacts = contacts.filter((contact) => {
      return contact.id !== contactId;
    });

    setContacts(filteredContacts);
  };

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">Picture</th>
            <th className="tg-0lax">Name</th>
            <th className="tg-0lax">Popularity</th>
            <th className="tg-0lax">Won an Oscar</th>
            <th className="tg-0lax">Won an Emmy</th>
            <th className="tg-0lax">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td className="tg-baqh">
                <img className="imgContact" src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td className="tg-0lax">{contact.name}</td>
              <td className="tg-0lax">{contact.popularity}</td>
              <td className="tg-0lax">{!contact.wonOscar ? "" : "🏆"}</td>
              <td className="tg-0lax">{!contact.wonEmmy ? "" : "🏆"}</td>
              <td className="tg-0lax">
                <button onClick={() => deleteContact(contact.id)} className="btn-delete">
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

export default Contacts;
