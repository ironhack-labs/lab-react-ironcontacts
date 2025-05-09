import { useState } from "react";
import "./App.css";
import contactData from "./contacts.json";

function App() {
  const firstFiveContacts = contactData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFiveContacts);
  const [remainingContacts, setRemainingContacts] = useState(
    contactData.slice(5)
  );

  const generateTableData = (arr) => {
    return arr.map((contact, index) => (
      <tr key={index}>
        <td>
          <img src={contact.pictureUrl} alt={`Photo of ${contact.name}`} />
        </td>
        <td>{contact.name}</td>
        <td>{+contact.popularity.toFixed(2)}</td>
        <td>{contact.wonOscar ? "🏆" : ""}</td>
        <td>{contact.wonEmmy ? "🌟" : ""}</td>
        <td>
          <button onClick={() => handleDeleteBtn(contact)}>Delete</button>
        </td>
      </tr>
    ));
  };

  const generateRandomContact = () => {
    const totalRemaining = remainingContacts.length;
    if (totalRemaining > 0) {
      const randomIndex = Math.floor(Math.random() * totalRemaining);
      const randomContact = remainingContacts[randomIndex];

      // Remove the selected contact from remainingContacts
      const updatedRemainingContacts = [...remainingContacts];
      updatedRemainingContacts.splice(randomIndex, 1);
      setRemainingContacts(updatedRemainingContacts);

      return randomContact;
    }
    return null;
  };
  const handleRandomBtnClick = () => {
    const randomContact = generateRandomContact();
    if (randomContact) {
      setContacts([...contacts, randomContact]);
    }
  };
  const handleSortByNameBtn = () => {
    const sortedContacts = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sortedContacts);
  };
  const handleSortByPopularityBtn = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  const handleDeleteBtn = (selectedContact) => {
    //Add element back to "remaining"
    setRemainingContacts([...remainingContacts, selectedContact]);
    //Remove element from contacts
    const updatedContacts = contacts.filter(
      (contact) => contact !== selectedContact
    );
    setContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="btn-box">
        <button onClick={handleRandomBtnClick}>Add random contact</button>
        <button onClick={handleSortByNameBtn}>Sort by name</button>
        <button onClick={handleSortByPopularityBtn}>Sort by popularity</button>
      </div>
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
            <td>Delete?</td>
          </tr>
        </thead>
        <tbody>{generateTableData(contacts)}</tbody>
      </table>
    </div>
  );
}

export default App;
