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

  return <div className="App">
     <button onClick={() => addRandomContact()}>Add Random Contact</button> 
     <button onClick={() => sortByName()}>Sort Contacts by Name</button> 
     <button onClick={() => sortByPopularity()}>Sort Contacts by Popularity</button>
    <p>
    <table>
  <thead>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar?</th>
      <th>Won Emmy?</th>
    </tr>
  </thead>
  <tbody>
    {contactsList.map((e) =>{

      return (
    <tr key= {e.id} >
      <td><img src={e.pictureUrl} alt="celeb pic" /></td>
      <td>{e.name}</td>
      <td>{e.popularity.toFixed(2)}</td>
      <td>{e.wonOscar ?  '🏆' : '' } </td>  {/* using ternary operator */}
      <td>{e.wonEmmy && '🏆' }</td> {/*  using && operator */}
    </tr> )
   })}
  </tbody>
</table>

    </p>
  </div>;
}
export default App;