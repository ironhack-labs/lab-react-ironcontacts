import "./App.css";

import { useState } from 'react';

import contacts from './contacts.json'




function App() {

  let fiveContacts = contacts.slice(0,5)

  let restOfContacts= contacts.slice(5,contacts.length)

  const [contactsList, setContacts] = useState(fiveContacts);

  let randomContact = restOfContacts[Math.floor(Math.random() * restOfContacts.length)]

  
  let addRandomContact = () =>{
    setContacts([randomContact, ...contactsList])
  }

  let sortByName = () =>{
    const sortedNames = [...contactsList].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  setContacts(sortedNames);
}

let sortByPopularity = () => {
  const sortByPop =  [...contactsList].sort((a,b) =>
  b.popularity-a.popularity)
  setContacts(sortByPop)
}

let deleteContact = (id) => {
  const filteredContacts = contactsList.filter(contact => {
    return contact.id !== id;
  });

  setContacts(filteredContacts);
};

  return <div className="App">
     <button onClick={() => addRandomContact()} className="button">Add Random Contact</button> 
     <button onClick={() => sortByName()} className="button">Sort Contacts by Name</button> 
     <button onClick={() => sortByPopularity()} className="button">Sort Contacts by Popularity</button>
    <p>
    <table id="table">
  <thead id="tableHead">
    <tr>
      <th className="columns">Picture</th>
      <th className="columns">Name</th>
      <th className="columns">Popularity</th>
      <th className="columns">Won Oscar?</th>
      <th className="columns">Won Emmy?</th>
      <th className="columns">Delete?</th>
    </tr>
  </thead>
  <tbody id="tableBody">
    {contactsList.map((e) =>{

      return (
    <tr key= {e.id} >
      <td className="rows"><img src={e.pictureUrl} alt="celeb pic" id="contactPicture" /></td>
      <td className="rows">{e.name}</td>
      <td className="rows">{e.popularity.toFixed(2)}</td>
      <td className="rows">{e.wonOscar ?  '🏆' : '' } </td>  {/* using ternary operator */}
      <td className="rows">{e.wonEmmy && '🏆' }</td> {/*  using && operator */}
      <td className="rows"><button onClick={() => deleteContact(e.id)}>Delete</button></td>
    </tr> )
   })}
  </tbody>
</table>

    </p>
  </div>;
}
export default App;