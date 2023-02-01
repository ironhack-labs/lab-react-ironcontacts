import './App.css';
import contacts from '../src/contacts.json'
import { IronContacts } from './components';
import { useState } from 'react'

function App() {
  const [ list_contacts, setList ] = useState(contacts);
  const addRandomContacts = () => {
    const contactList = contacts;
    const newListContacts = [];
    const len = contactList.length;
    for(let i = 0; i < 5; i++){
        let contact = contactList[Math.floor(Math.random()*len)];
        newListContacts.push(contact);
    }
    setList(newListContacts);
  }

  const sortName = () => {
    const newListContacts = [...list_contacts];
    newListContacts.sort((a,b) => {
      if(a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1;
      }
      return 0;
    });
    setList(newListContacts);
  };

  const sortPopularity = () => {
    const newListContacts = [...list_contacts];
    newListContacts.sort((a,b) =>b.popularity - a.popularity );
    setList(newListContacts);
  }

  const deleteContact = (index) => {
    const newListContactDelete = [...list_contacts];
    newListContactDelete.splice(index,1);
    setList(newListContactDelete);
  }
  return (
    <div className="App">
      <div className="title">
          <h1>IronContacts</h1>
      </div>
      <div className='buttons'>
          <button onClick={addRandomContacts}>Add Random Contact</button>
          <button onClick={sortPopularity}>Sort by popularity</button>
          <button onClick={sortName}>Sort by Name</button>
      </div>
      <div className='table'>
      <table>
            <tr>
                <th><strong>Picture</strong></th>
                <th><strong>Name</strong></th>
                <th><strong>Popularity</strong></th>
                <th><strong>Won Oscar</strong></th>
                <th><strong>Won Emmy</strong></th>
                <th><strong>Action</strong></th>
            </tr>
            {
            list_contacts.map((contactList, index_contact) => (
            <IronContacts
              {...contactList}
              key={index_contact}
              onDelete={()=>deleteContact(index_contact)}
            />
            ))
            }
      </table>
      </div>
    </div>
  );
}

export default App;
