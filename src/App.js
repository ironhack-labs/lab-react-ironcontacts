import { useState } from 'react';
import './App.css';
import contactsData from './contacts.json'

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0,5))

  console.log(contacts);


  const deleteContact = (id) => {
    const filteredContact = contacts.filter(contact =>{
      return contact.id !== id
    })

    setContacts (filteredContact)

  }

  function random() {

    let randomNo5 = contactsData.slice(5).filter(contact => contacts.includes(contact) === false)
    let randomItem = randomNo5[Math.floor(Math.random()*randomNo5.length)]



    setContacts([randomItem, ...contacts])
  }

  function sortPopularity() {
    
    setContacts([...contacts].sort((a,b)=>{ return b.popularity - a.popularity }))
} 


  function sortName() {
    setContacts([...contacts].sort((a,b)=> (a.name > b.name)? 1 : (b.name > a.name)? -1 : 0 ))
}



  return (
    <div className="App">


      <button onClick={random}>Add random contact</button>
      
      <button onClick={sortPopularity}>sort by popularity</button>

      <button onClick={sortName}>sort by name</button>

      
        <tr>
          <th>Picture:</th>
          <th>Name:</th>
          <th>Popularity:</th>
          <th>Has an oscar:</th>
          <th>Has an emmy:</th>
        </tr>
      {contacts.map((contact) => (
      <table key={contact.id}>
        
        <tr>

        <th><img src={contact.pictureUrl} alt="contact pic" /></th>
          <th>{contact.name}</th>
          <th>{contact.popularity}</th>
          <th>{contact.wonOscar === true && "🏆"} </th>
          <th>{contact.wonEmmy === true && "🏆"}</th>
          <th><button onClick={()=>deleteContact(contact.id)}>DELETE</button></th>
        </tr>
        
      </table>
        ))}
      
    </div>
  );
}

export default App;
