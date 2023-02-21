import { useState } from "react";
import contactsFromJSON from "../contacts.json";
import ContactRow from "../components/ContactRow";

function ContactList() {
  const [contacts, setContacts] = useState(contactsFromJSON);

  const sortContacts = () => {
    let sortedContacts = [...contacts];
    sortedContacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    });
    setContacts(sortedContacts);
  };

  return (
    <div className="ContactsTable">
      <h1>IronContacts</h1>

      <div className="buttons">
        <button>Add Random Contact</button>
        <button onClick={sortContacts}>Sort by Name</button>
        <button>Sort by Popularity</button>
      </div>

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
              <ContactRow
                key={contact.id}
                contact={contact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
