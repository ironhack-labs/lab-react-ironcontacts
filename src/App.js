import './App.css';
import contactList from './contacts.json';
import { useState } from 'react';

function App() {

  const firstFiveContactsArray = contactList.slice(0, 5);
  const restOfContactsArray = contactList.slice(6, contactList.length);
  // console.log(restOfContactsArray);

  const randomContact = restOfContactsArray[Math.floor(Math.random() * restOfContactsArray.length)];
// console.log(randomContact)
  const [contacts, setContacts] = useState(firstFiveContactsArray);
  

  const addRandomContact = () => {

    const updatedContacts = [...contacts, randomContact];
    setContacts(updatedContacts);
    console.log(updatedContacts)
  };

    const sortedByName = () => { 
      const sortedContacts = [...contacts.sort((a, b) => a.name.localeCompare(b.name)),];
    setContacts(sortedContacts)
    console.log(sortedContacts)

  }
  
  const sortByPopularity = () => {
    
    const sortedContacts = [...contacts.sort((a, b) => { 
      if(a.popularity > b.popularity) {return -1;} 
      if(a.popularity < b.popularity) {return 1;} 
      return 0}),];
    setContacts(sortedContacts)
    console.log(sortedContacts)

  }
//make a function that picks a random ._id from the lists of contacts 
//and checks that the contacts array does not already have it.

  return (
    <div className="App">
      <h2> List of Contacts </h2>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortedByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th> 
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>


          { contacts.map((contact)=> {
             
             // eslint-disable-next-line no-lone-blocks
             { const deleteContact = contactId => {
            const filteredContacts = contacts.filter(contact => {
            return contact.id !== contactId
            })
             

            setContacts(filteredContacts)
            }

            return (
          <tbody key={contact.id}>
            <tr>
              <td><img src={contact.pictureUrl} alt="" style={{width: '50px'}} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              {contact.wonOscar && <td>🏆</td>}
              {!contact.wonOscar && <td></td>}
              {contact.wonEmmy && <td>🏆</td>}
              {!contact.wonEmmy && <td></td>}
              <td><button onClick={() => deleteContact(contact.id)} key={contact.id}>Delete</button></td>
            </tr>
          </tbody>
          )
          }})}
          
                  

                  
                  
      </table>

    </div>
  );
}


export default App;
