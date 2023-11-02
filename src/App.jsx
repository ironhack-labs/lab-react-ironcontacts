/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import contactsJson from './contacts.json';
import {useState} from 'react';

function App() {
  const [contacts, setContacts] = useState(contactsJson.slice(0,5));
  const contactMap = contacts.map((contact, index)=>{
    const element = 
        <tr key={index}>
          <td><img src={contact.pictureUrl}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity}</td>
          {contact.wonOscar ? <td>🏆</td>: <td></td>}
          {contact.wonEmmy ? <td>🌟</td>: <td></td>}
          <td><button onClick={deleteEntry} id={contact.id}>Delete</button></td>
        </tr>

    return element;  
  })

/* Interacion 3
  Random
*/
  //Interacion 4
  const sortByPopularity = () => {
    setContacts(contacts => [...contacts].sort((a,b) => b.popularity - a.popularity));
  };
  //Interacion 4
  const sortByName = () => {
    setContacts(contacts =>[...contacts].sort((a,b) => a.name.localeCompare(b.name)));
  };
  //Interacion 5 //esquisito!!!
  const deleteContact = (id) => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  }; //
  
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={randomContacts}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      <table> 
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>  
        </thead>
        <tbody>
          {contactMap}
        </tbody>
      </table>
    </div>
  );
}

export default App;
