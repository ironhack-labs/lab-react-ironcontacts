import "./App.css";
import contacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contactsArr, setContactsArr] = useState(contacts.slice(0, 5)); //5

  function getRandomContact() {
    const remainingContacts = contacts.slice(5);
    console.log(remainingContacts);

    // ADD TO THE CONTACT
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    console.log(randomContact);
    setContactsArr([...contactsArr, randomContact]); //push to the contactsArr
  }

  function sortName() {
    const newNameArr = [...contactsArr];
    newNameArr.sort((a, b) => {
      return a.name.localeCompare(b.name); //return without -> can work?!?!?
    });
    console.log(newNameArr) // new array
    setContactsArr(newNameArr) //update
  }
  function sortPopularity() {
    const newNameArr = [...contactsArr];
    newNameArr.sort((a, b) => {
      return b.popularity - a.popularity; //return without -> can work?!?!?
    });
    console.log(newNameArr) // new array
    setContactsArr(newNameArr) //update

  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="button-top">
        <button onClick={getRandomContact}>Get Random Contact</button>
        <button onClick={sortName}>Sort by Name</button>
        <button onClick={sortPopularity}>Sort by Popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contactsArr.map((contact) => {
            return (
              <tr contact={contact} key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width="150"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
