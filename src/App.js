import "./App.css";
import contacts from "./contacts.json";
import react, { useState } from "react";

function App() {
  const [contact, setContact] = useState(contacts.slice(0, 5));
  const contactCopy = [...contact];

  const addContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (contactCopy.indexOf(randomContact) === -1) {
      contactCopy.push(randomContact);
    }
    setContact(contactCopy);
  };

  const SortContacts = () => {
    const sortedArr = contactCopy.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setContact(sortedArr);
  };

  const SortByPop = () => {
    const sortedArrPop = contactCopy.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setContact(sortedArrPop);
  };

  const deleteContact = (id) => {
    for (let i = 0; i < contactCopy.length; i++) {
      if (contactCopy[i].id === id) {
        contactCopy.splice(i, 1);
      }
    }
    setContact(contactCopy);
  };

  return (
    <div className="contactcontainer">
      <h1>IronContacts</h1>
      <button onClick={() => addContact()}>Add Contact </button>
      <button onClick={() => SortContacts()}>Sort Contact </button>
      <button onClick={() => SortByPop()}>Sort Contact </button>
      <table className="table">
        <thead>
          <tr className="tablehead">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactCopy.map((item) => (
            <tr key={item.id} className="tablebody">
              <td>
                <img
                  className="picture"
                  src={item.pictureUrl}
                  alt="profileImage"
                />
              </td>
              <td>{item.name}</td>
              <td>{Math.round(item.popularity * 100) / 100}</td>
              <td>
                <button onClick={() => deleteContact(item.id)}>
                  Delete Contact{" "}
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
