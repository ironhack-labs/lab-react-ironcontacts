import React from "react";
import logo from "./logo.svg";
import "./App.css";

import contacts from "./contacts.json";

function App() {
  const [contactsArr, setContactsArr] = React.useState(contacts.slice(0, 5));

  function addRandomContact() {
    const contactsNotDisplayed = contacts.filter(
      (contact) => !contactsArr.map((el) => el.id).includes(contact.id)
    );

    if (contactsNotDisplayed.length === 0) {
      return;
    }
    // console.log(contactsNotDisplayed);

    const randomContact = [
      contactsNotDisplayed[
        Math.floor(Math.random() * contactsNotDisplayed.length)
      ],
    ];

    // console.log(randomContact);
    const newArr = contactsArr.concat(randomContact);
    // const newArr = [...contactsArr, randomContact] would also work! NP random contact should no longer be in an array then
    setContactsArr(newArr);
  }

  function sortName() {
    const newArr = [...contactsArr].sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContactsArr(newArr);
  }

  function sortPopularity() {
    const newArr = [...contactsArr].sort((a, b) => {
      return a.popularity - b.popularity;
    });
    setContactsArr(newArr);
  }

  function deleteContact(id) {
    const newArr = contactsArr.filter((contact) => contact.id !== id);
    setContactsArr(newArr);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => {
            return (
              <Contact
                key={contact.id}
                {...contact}
                deleteContact={deleteContact}
              />
              // <tr key={contact.id}>
              //   <td>{contact.name}</td>
              //   <td>
              //     <img src={contact.pictureUrl} width="100px" />
              //   </td>
              //   <td>{contact.popularity.toFixed(2)}</td>
              //   <td>
              //     <button onClick={() => deleteContact(contact.id)}>
              //       Delete
              //     </button>
              //   </td>
              // </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Contact(props) {
  const { name, pictureUrl, popularity, id, deleteContact } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={pictureUrl} width="100px" />
      </td>
      <td>{popularity.toFixed(2)}</td>
      <td>
        <button onClick={() => deleteContact(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default App;
