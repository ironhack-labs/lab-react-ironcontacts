
import './App.css';
import React, {useState} from 'react';
import contactData  from "./contacts.json"

function App() {
const [contacts, setContacts] = useState(contactData.slice(0,5));
const randomContact = () =>{
  const random = contactData[Math.floor(Math.random() * contactData.length)];
  setContacts([random, ...contacts])
}




const popularitySort = () =>{
  contacts.sort((a,b)=>{return b.popularity - a.popularity})

  setContacts([...contacts])
}

const nameSort = () =>{
  contacts.sort((a,b)=>{
    return a.name.localeCompare(b.name)
  })
  setContacts([...contacts])
}


// const nameSort = ()=>{
  
//   let name = [...contacts.sort((a,b)=>{
//     if(a.name < b.name) { return -1; }
//     if(a.name > b.name) { return 1; }
//     return 0;
//   })]
//   setContacts(name)
// }
const deleteContacts = (contactId) => {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id !== contactId;
  });

  setContacts(filteredContacts);
};


  return (
    <div className="App">
    <h1>IronContacts</h1>

    <button onClick={randomContact}>Add Random Contact</button>
    <button onClick={popularitySort}>Sort by popularity</button>
    {/* <button onClick={() => nameSort()}>Sort by name</button> */}
    <button onClick={() => nameSort()}>Sort by name</button>

    <table>

          <tbody>
          <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
   
        </tr>
        </tbody>
  

        {contacts.map((contact)=>{
          return (
        <tr>
        <td><img src={contact.pictureUrl} alt="" width="100px"/>
        </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar ? "🏆" : ""}</td>
          <td>{contact.wonEmmy ? "🏆" : ""}</td>
          <button onClick={() => deleteContacts(contact.id)}>Delete</button>
        </tr>)

  })}
  </table>
    </div>
  );
}

export default App;
