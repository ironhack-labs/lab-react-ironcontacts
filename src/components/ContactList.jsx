import ContactItem from "./ContactItem";
import contactsData from "../contacts.json";
import { useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState(contactsData);

  const handleDeleteEvent = (event) => {
    setContacts(contacts.filter((e) => e.id !== event.id));
  };

  function sortByName() {
    const newList = [...contacts];

    const sortedList = newList.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedList);
  }

  function sortByPopularity() {
    const newList = [...contacts];

    const popularityList = newList.sort((a, b) => b.popularity - a.popularity);
    setContacts(popularityList);
  }

  return (
    <div>
      <button>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <table>
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
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <th>
                  <img className="photo" src={contact.pictureUrl}></img>
                </th>
                <th>{contact.name}</th>
                <th>{contact.popularity}</th>
                <th>{contact.wonOscar ? "🏆" : ""}</th>
                <th>{contact.wonEmmy ? "🌟" : ""}</th>
                <th>
                  <ContactItem event={contact} onDelete={handleDeleteEvent} />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
