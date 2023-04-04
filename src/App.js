import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsState, setContactsState] = useState(contacts.slice(0, 5));
  const [contactsRemain, setContactsRemain] = useState(contacts.slice(5));
  // console.log("contactsRemain: ", contactsRemain);
  // console.log("contactsState: ", contactsState);

  const clickHandler = () => {
    const randomIndex = Math.floor(Math.random() * contactsRemain.length);
    const newContact = contactsRemain[randomIndex];
    const newRemain = contactsRemain.filter((contact, index) => {
      return index !== randomIndex;
    });

    setContactsRemain(newRemain);
    setContactsState((prevState) => {
      return [...prevState, newContact];
    });
  };

  const sortContacts = (value) => {
    const arr = [...contactsState];
    if (value === "name") {
      arr.sort((first, second) => {
        if (first.name.toLowerCase() < second.name.toLowerCase()) {
          return -1;
        }
        if (first.name.toLowerCase() > second.name.toLowerCase()) {
          return 1;
        }

        return 0;
      });
    } else {
      arr.sort((first, second) => second[value] - first[value]);
    }
    setContactsState(arr);
  };

  const deleteContact = (id) => {
    const arr = contactsState.filter((contact) => contact.id !== id);
    setContactsState(arr);
  };

  return (
    <div className="App">
      <h1>Iron Contacts</h1>
      <button onClick={clickHandler}>Add random contact</button>
      <button
        onClick={() => {
          sortContacts("name");
        }}
      >
        Sort contacts by Name
      </button>
      <button
        onClick={() => {
          sortContacts("popularity");
        }}
      >
        Sort contacts by Popularity
      </button>
      <table id="contactList">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contactsState.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏆"}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteContact(contact.id);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
