import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";
function App() {
  const contactsFive = contactsData.slice(0,5)
  const [contacts, setContacts] = useState(contactsFive);
  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContact);
  };
  const randomContact = () =>{
   const randomData = Math.floor(Math.random()*contactsData.length)
   const contactsRandom = [contactsData[randomData],...contacts]
   setContacts(contactsRandom)
    for(let i = 0;i<contacts.length;i++ ){
    if(contactsData[randomData].id === contacts[i].id ){
      return randomContact()
   }
  }
  }
  const sortName =()=>{
    const filterNameContact =[...contacts].sort((a, b) => a.name > b.name ? 1 : -1)
   setContacts(filterNameContact)
  }
  const sortPopularity = () =>{
    const filterPopularityContact = [...contacts].sort((a,b) =>{
      return b.popularity - a.popularity;
    })
    setContacts(filterPopularityContact)
  }
  return (
    <div className="App">
    <div id="Menu">
      <h1>IronContacts</h1>
      <div id="MenuButton">
      <button onClick={() =>randomContact(contacts)} >Add Random Contact</button>
      <button onClick={() => sortPopularity(contacts)} >Sort by popularity</button>
      <button onClick={()=>sortName()}  >Sort by name</button>
      </div>
      </div>
      <table>
        <thead>
          <tr key="title">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((contato) => {
          console.log(contacts)
        return (
          <tr key={contato.id}>
            <td>
              <img src={contato.pictureUrl} alt="imagePerson" />
            </td>
            <td>{contato.name}</td>
            <td>{contato.popularity.toFixed(2)}</td>
            <td>
              {contato.wonOscar && '🏆'}
            </td>
            <td>
              {contato.wonEmmy && '🏆'}
            </td>
            <td>
              <button onClick={() => deleteContact(contato.id)}>Delete</button>
            </td>
          </tr>
        );
      })}

        </tbody>      
      </table>
    </div>
  );
}

export default App;
