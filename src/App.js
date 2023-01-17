import { useState } from "react";
import "./App.css";
import contactsArrayFromJSON from "./contacts.json";

function App() {
  const [contactsArray, setContactsArray] = useState(
    contactsArrayFromJSON.slice(0, 5)
  );

  const addRandomContact = () => {
    const newContact =
      contactsArrayFromJSON[
        Math.floor(Math.random() * contactsArrayFromJSON.length)
      ];

    // const contactExists = contactsArrayFromJSON.includes((newContact) => {
    //   return newContact.id !== idOfTheRandomContact;
    // });

    //checking if new contact is already in the initial array, if true, the function is called again until false
    if (contactsArray.find((element) => element.id === newContact.id)) {
      addRandomContact();
    } else {
      setContactsArray([...contactsArray, newContact]);
    }
  };

  const sortByPopularity = () => {
    const popularityOrder = [...contactsArray].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactsArray(popularityOrder);
  };

  const sortByName = () => {
    const alphabeticalOrder = [...contactsArray].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactsArray(alphabeticalOrder);
  };

  const removeContact = (idOfTheContactToDelete) => {
    const newListOfContacts = contactsArray.filter((contactArr) => {
      // whenever I am deleting a contact, that contact equals to the particular id, so that it won't show up in the new array
      return contactArr.id !== idOfTheContactToDelete;
    });

    setContactsArray(newListOfContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>
      <hr />
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <hr />
      <button onClick={sortByName}>Sort by name</button>

      <table className="Main badge">
        <tr>
          <th>
            <h3>Picture</h3>
          </th>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Popularity</h3>
          </th>
          <th>
            <h3>Won Oscar</h3>
          </th>
          <th>
            <h3>Won Emmy</h3>
          </th>
          <th>
            <h3>Actions</h3>
          </th>
        </tr>
        {contactsArray.map((contactDetails) => {
          return (
            <tr>
              <td>
                <img
                  className="Main card badge"
                  style={{ width: "30%", height: "30%" }}
                  src={contactDetails.pictureUrl}
                  alt=""
                />
              </td>
              <td>{contactDetails.name}</td>
              <td>{Math.round(contactDetails.popularity * 100) / 100}</td>
              <td>{contactDetails.wonOscar}</td>
              {contactDetails.wonOscar ? <p>🏆</p> : <p></p>}
              <td>{contactDetails.wonEmmy}</td>
              <td>
                <button
                  onClick={() => {
                    removeContact(contactDetails.id);
                  }}
                >
                  Remove contact
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
