import React from 'react';
import './App.css';
import contacts from './contacts.json';


function App() {
  const firstContacts = contacts.slice(0,5); 

  let [contactsList, setContactsList ] = React.useState(firstContacts);
   
  const displayContacts = (list) => {
    return list.map((contact) =>{
      return (
        <tr>
          <td><img src={contact.pictureUrl}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button onClick={() => deleteContact(contact.id)}>Delete Contact</button></td>
        </tr>
        
      );
    })
  };

  const randomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 5) + 5);
    const randomContact = contacts[randomIndex];

    setContactsList([...contactsList, randomContact])          
  };

  const sortContactsByName = () => {
    const sortList = [...contactsList];
    sortList.sort((a,b) => { return a.name.localeCompare(b.name) });

    setContactsList(sortList);
  };

  const sortContactsByPopularity = () => {
    const sortList = [...contactsList];
    sortList.sort((a,b) => { return b.popularity - a.popularity });
    setContactsList(sortList);
  }

  const deleteContact = (id) => {
    const deleteId = contactsList.findIndex(contact => contact.id === id);

    const list = [...contactsList];

    list.splice(deleteId, 1);

    setContactsList(list);
  }

  return (
    <div>
      <h1>IronContacts</h1>
      <button onClick={() => sortContactsByName()} >Sort By Name</button>
      <button onClick={() => sortContactsByPopularity()} >Sort By popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popurarity</th>
        </tr>
        {displayContacts(contactsList)}
      </table> 
      <button onClick={() => randomContact()} >Add Random Contact</button>
    </div>
  );
}

export default App;
