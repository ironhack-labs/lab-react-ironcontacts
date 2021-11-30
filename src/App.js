import { React, useState } from 'react';
import classes from './App.module.css'
import contactsJson from "./contacts.json";


function App() {
  //States :
  const [contacts, setContacts] = useState(contactsJson.slice(0, 5));
  const [choosenIndexes, setchoosenIndexes] = useState([0, 1, 2, 3, 4]);
  const [error, setError] = useState('');
  //globals :


  //Event Handlres :
  const handleRandomClick = () => {
    let randomIndex = getRandomIndex(contactsJson.length, 5)


    if (!choosenIndexes.includes(randomIndex)) {
      setchoosenIndexes([...choosenIndexes, randomIndex]);
      setContacts([contactsJson[randomIndex], ...contacts]);
      setError('');
      console.log(choosenIndexes);
      return;
    }
    console.log(choosenIndexes);
    setError(contacts.length < contactsJson.length ? 'How lucky you must be to get a duplicate random contact! , please try Again I assure you there is atleast one Contact not added yet :)' : 'There is no more contact to Add :( ')

  }
  const handleSortByNameClick = () => {
    let copy = [...contacts];
    copy.sort((a, b) => a.name.localeCompare(b.name))
    setContacts([...copy])

  }
  const handleByPopularityClick = () => {
    let copy = [...contacts];
    copy.sort((a, b) => b.popularity - a.popularity)
    setContacts(copy)
  }
  const handleDeleteClick = (id) => {
    //Get the original index
    let targetContact = contacts.find(c => c.id === id);
    const index = contactsJson.findIndex(c => c === targetContact)
    //remove from our local choosenIndexRecord so it will beChoosable again
    setchoosenIndexes([...choosenIndexes.filter(c => c !== index)])
    setContacts([...contacts.filter(c => c.id !== id)])
  }
  return (
    <div className={classes.App}>
      <div className={classes.contacts}>
        <h2>Iron Contacts</h2>
        <div className={classes.controls}>
          <button onClick={handleRandomClick}>Add Random</button>
          <button onClick={handleSortByNameClick}>Sort by name</button>
          <button onClick={handleByPopularityClick}>Sort by popularity</button>
        </div>
        <p>{error}</p>
        <table className={classes.personsTable}>
          <tbody>
            <tr >
              <td>Picture</td>
              <td>name</td>
              <td>Popularity</td>
            </tr>
            {
              contacts.map(contact => (
                <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td><button onClick={handleDeleteClick.bind(this, contact.id)}>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
//helpers :
/**
 *
 * @param {the length of Target array} length
 * @param {Skip n number from the start} skip
 * @returns number
 */
function getRandomIndex(length, skip) {
  return Math.floor(Math.random() * (length - skip)) + skip
}