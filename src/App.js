
import { useState } from 'react';
import contactsArr from "./contacts.json";

import './App.css';



function App() {
  let fiveContacts = contactsArr.slice(0,5);

  const [contacts, setContacts] = useState(fiveContacts);

  const addRandomContact = () => {
  if(!contactsArr.length){ return false;}

    const randomContact = Math.floor(Math.random() * (contactsArr.length));
    const newRandomContact = [...contacts,contactsArr[randomContact]]
   contactsArr.splice(randomContact,1);
    setContacts(newRandomContact);
  }


  const sortByName = () => {
    let selectedContacts = [...contacts];

    selectedContacts.sort((a,b) =>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

    setContacts(selectedContacts);
  }



  const sortByPopularity = () => {

    const selectedContacts = [...contacts.sort((a, b) => { 
      if(a.popularity > b.popularity) {return -1;} 
      if(a.popularity < b.popularity) {return 1;} 
      return 0}),];
    setContacts(selectedContacts)


  }



  const deleteContact = contactId =>{
    const newContacts = contacts.filter( element => element.id !== contactId);
    setContacts(newContacts);
  }

  return (

    <main className="container">
      <div className='wrapper'>
    <section className="buttons">
        <button onClick={() => addRandomContact()} className="btn">
        { contactsArr.length ? 'Add Random Contact' : 'No contacts'}
        </button>   
        <button onClick={sortByName}>Sort By Name</button>
      <button  onClick={sortByPopularity}>Sort By Popularity</button>



</section>




    <div className="App">
 <table className="contact-table">
    <thead>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won an Oscar</th>
        <th>Won an Emmy</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
      {fiveContacts.map(contact=>{
        return <tr key={contact.id}>
          <td><img src={contact.pictureUrl} className="contact-picture" alt={contact.name}></img></td>
          <td>{ contact.name }</td>
          <td>{ contact.popularity.toFixed(2) }</td>
          <td>{ contact.wonOscar && "🏆" }</td>
          <td>{ contact.wonEmmy && "🏆" }</td>
          <td><button onClick={deleteContact}  key={contact.id}>Delete</button></td>
        </tr>
      })}
      </tbody>
    </table>
    </div>
    </div>
    </main>
  );
}

export default App;
