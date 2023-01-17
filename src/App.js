import { useState } from 'react';
import contactsList from './contacts.json';
import './App.css';

function App() {

  const [ contacts, setContacts ] = useState(contactsList.slice(0,5));

  const addRandomContact = () => {
    const currList = [...contacts]; // clone the currently displayed list
    const contactsDisplayedIds = currList.map(contact => contact.id); // IDs of contacts already displayed
    const contactsNotDisplayedYet = contactsList.filter(contact => !contactsDisplayedIds.includes(contact.id) ); // filter to get the list of not displayed contacts
    const randomContactIndex = Math.floor(Math.random() * contactsNotDisplayedYet.length); // generate random index
    const randomContact = contactsNotDisplayedYet[randomContactIndex]; // get corresponding random contact
    currList.push(randomContact); // push the new contact into this clone list
    setContacts(currList); // set new list state
  }

  const sortByName = () => { setContacts([...contacts].sort((a, b) => a.name.localeCompare(b.name))) }

  const sortByPopularity = () => { setContacts([...contacts].sort((a, b) => b.popularity - a.popularity)) }

  const deleteContact = (contactId) => {
    const filteredList = [...contacts].filter(contact => contact.id !== contactId);
    setContacts(filteredList);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={ addRandomContact }>Add random contact</button>
      <button onClick={ sortByName }>Sort by name</button>
      <button onClick={ sortByPopularity }>Sort by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            { contacts.map((contact, i) => {
              return <tr key={ contact.id } className={ i % 2 && "evenLine"}>
                <td><img src={ contact.pictureUrl } alt={ contact.name } height="150px"/></td>
                <td>{ contact.name }</td>
                <td>{ contact.popularity }</td>
                <td>{ contact.wonOscar && <span>🏆</span> }</td>
                <td>{ contact.wonEmmy && <span>🏆</span> }</td>
                <td><button onClick={ () => deleteContact(contact.id) }>Delete</button></td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
