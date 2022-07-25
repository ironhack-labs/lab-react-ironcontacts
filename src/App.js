
import './App.css';
import contactsList from './contacts.json';

import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsList.slice(0,5))
  const [remainingContacts, setRemainingContacts] = useState(contactsList.slice(5))

  const addRamdomContact = () =>{

    const remainingContactsRandomIndex = Math.floor(Math.random()*remainingContacts.length);

    const contactsCopy = [...contacts];
    const remainingContactsCopy = [...remainingContacts];

    //splice returns an array of length 1
    const chosenContactArray = remainingContactsCopy.splice(remainingContactsRandomIndex, 1);

    contactsCopy.push(chosenContactArray[0]);

    setContacts(contactsCopy);
    setRemainingContacts(remainingContactsCopy);
  };

    const removeContactById = (contactId) => {
    const contactsCopy = [...contacts];
    const remainingContactsCopy = [...remainingContacts];
    const contactIndexToRemove = contactsCopy.findIndex(individualContact => {
  return individualContact.id === contactId;
  });

  //splice returns an array of length 1
  const removedContactArray = contactsCopy.splice(contactIndexToRemove, 1);
  remainingContactsCopy.push(removedContactArray[0]);

  setContacts(contactsCopy);
  setRemainingContacts(remainingContactsCopy);
};

  const sortByName = () => {
    const contactsCopy = [...contacts];
    contactsCopy.sort((a,b) => {
      return a.name.localeCompare(b.name);
    })
    
    setContacts(contactsCopy);
  }

  const sortByPopularity = () => {
    const contactsCopy = [...contacts];
    contactsCopy.sort((a,b) => {
      return b.popularity - a.popularity
  })
  setContacts(contactsCopy);
}

  return (
    <div className="App">
    <h1>IronContacts</h1>
    <div>
      <button onClick={addRamdomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
    </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(individualContact=>{
          return (
            <tr>
            <td>
              <img className='contactImg' src={individualContact.pictureUrl} alt='contact face'/>
            </td>
              <td>{individualContact.name}</td>
              <td>{individualContact.popularity}</td>
              <td>{individualContact.wonOscar ? '🏆' : ''}</td>
              <td>{individualContact.Emmy ? '🏆' : ''}</td>
              <td>
                <button onClick={() => removeContactById(individualContact.id)}>Delete</button>
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
