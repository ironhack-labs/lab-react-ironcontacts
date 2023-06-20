// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

function App() {

  const firstFive = contacts.slice(0, 5);
  const[contactsArray, setContactsArray] = useState(firstFive)

  const randomizeContacts = () => {
    const shuffledContacts = contacts.sort(() => 0.5 - Math.random());
    const randomFive = shuffledContacts.slice(0, 5);
    setContactsArray(randomFive);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactsArray].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContactsArray(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contactsArray].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContactsArray(sortedContacts);
  };

  const deleteContact = (id) => {
    const newListContact = contactsArray.filter(element => element.id !== id)
    setContactsArray(newListContact);
  }

  return (


    <div className="App">
      <h1>IconContacts</h1>
      <button onClick={randomizeContacts}>Random Contacts</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <button onClick={sortByName}>Sort By Name</button>
      <table className="Header-Table">
        <tr className="Header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
      </table>
      
      {contactsArray.map(element => {
        return (
          <table className="Content">
            <tr>
              <td><img src={element.pictureUrl}/></td>
              <td className="Name">{element.name}</td>
              <td className="Popularity">{element.popularity}</td>
              <td>{element.wonOscar && <td className="Trophy">🏆</td>}</td>
              <td><button onClick={ () => {deleteContact(element.id)} } className="Delete-Button">Delete</button></td>
            </tr>
        </table>
        );
      })}
      
    </div>
  );
}

export default App;
