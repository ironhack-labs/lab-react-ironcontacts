import './App.css';
//import ContactList from './components/ContactList'
import React, { useState } from 'react';
import contact from './contacts.json'


function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5))

  const addContact = () => {
    const randContact = contact[Math.floor(Math.random() * contact.length)]
      setContacts((contactList) => [...contactList, randContact])
  }

  const sortNames = () => {
    const sortedContacts = contacts.sort((a, b) => a.name > b.name ? 1 : -1);
    setContacts(() => [...sortedContacts]);
  }

  const sortPopularity = () => {
    const sortedContacts = contacts.sort((a, b) => b.popularity - a.popularity);
    setContacts(() => [...sortedContacts]);
  };

  const deleteContact = (id) => {
    const deleteContact = contacts.filter((contacts) => contacts.id !== id)
    setContacts(() => [...deleteContact]);
  }
  
  return (
    <>
      <h2> IronContact</h2>
      <section className="App_Buttons_wrapper">
          <button onClick={addContact} >Add Random Contact</button>
          <button onClick={sortNames} > Sort by Name</button>
          <button onClick={sortPopularity} >Sort by Popularity</button>
        </section>

      <table>

        <tbody>

          <tr>
            <td> Picture</td>
            <td> Name</td>
            <td> Popularity</td>
            <td> delete</td>

          </tr>

          {contacts.map((elm =>
            <tr key={elm.id}>
              <td><img className= "pictureUrl" src={elm.pictureUrl} alt={elm.name} /></td>
              <td>{elm.name}</td>
              <td>{elm.popularity}</td>
              <td><button onClick={()=>deleteContact(elm.id)}>Delete</button></td>
            </tr>))}

         </tbody>
      </table>


  //   </>
  );
}


// return
// <h1> hola</h1>
// {contacts.map((contacts => 
// <tr key={contact.id}>
//     <td><img src={contact.pictureUrl} alt={contact.name} /></td>
//         <td>{contact.name}</td>
//         <td>{Math.floor(contact.popularity)}</td>
//         </tr>
// ))}

export default App;
