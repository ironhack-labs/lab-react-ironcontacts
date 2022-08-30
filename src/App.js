import "./App.css";
import contactsData from "./contacts.json";
import { useState } from "react";
function App() {
  const [contacts, setContacts] = useState(contactsData);
  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    setContacts(filteredContact);
  };
  const randomContact = (array) =>{
    const randomFilter = array.sort(()=>{
     return  Math.random()-0.5;
    } )
    setContacts(randomFilter)
    console.log(randomFilter)
  }
  const sortName =(array)=>{
    const filterNameContact = array.sort((a,b) =>{
      return a.name.localeCompare(b.name); 
    });
    setContacts(filterNameContact)
    console.log(filterNameContact)
  }
  const sortPopularity = (array) =>{
    const filterPopularityContact = array.sort((a,b) =>{
      return b.popularity - a.popularity;
    })
    setContacts(filterPopularityContact)
    console.log(filterPopularityContact)
  }
  const number = (num) => num.toFixed(2);
  return (
    <div className="App">
    <div id="Menu">
      <h1>IronContacts</h1>
      <div id="MenuButton">
      <button onClick={() =>randomContact(contacts)} >Add Random Contact</button>
      <button onClick={() => sortPopularity(contacts)} >Sort by popularity</button>
      <button onClick={()=>sortName(contacts)}  >Sort by name</button>
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
        return (
          <tr key={contato.id}>
            <td>
              <img src={contato.pictureUrl} alt="imagePerson" />
            </td>
            <td>{contato.name}</td>
            <td>{number(contato.popularity)}</td>
            <td>
              {contato.wonOscar && (
                <img
                  src="https://img.freepik.com/vetores-gratis/taca-das-tacas-de-ouro_1284-18399.jpg"
                  alt="imageTrophy"
                />
              )}
            </td>
            <td>
              {contato.wonEmmy && (
                <img
                  src="https://i.pinimg.com/originals/90/ef/a0/90efa0f3e41a6df63b5581ca4d0372a3.png"
                  alt="imageTrophyEmmy"
                />
              )}
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
