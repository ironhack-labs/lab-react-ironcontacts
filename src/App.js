import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json'
import {cloneElement, useState} from 'react';


function App() {

  const [ contacto, setContacts ] = useState(allContacts.slice(0, 5))

  const handleAddContact = () => {
    console.log("funciona el boton de añadir");
    const indexRandom = Math.floor(Math.random() * allContacts.length)
    const randomContact = allContacts[indexRandom]

    const cloneContacts = JSON.parse( JSON.stringify( contacto ))
    cloneContacts.push(randomContact)
    setContacts(cloneContacts)
  }

  const handleSortbyPopularity = () => {
    const cloneContacts = JSON.parse( JSON.stringify( contacto ))
    cloneContacts.sort((contact2, contact1) => {
      if(contact2.popularity > contact1.popularity){
        return -1
      } else if(contact2.popularity < contact1.popularity) {
        return 1
      } else {
        return 0
      }
    })

    setContacts( cloneContacts )
  }

  const handleSortByName = () => {
    const cloneContacts = JSON.parse( JSON.stringify( contacto ))
    cloneContacts.sort((contact2, contact1) => {
      if(contact2.name > contact1.name) {
        return 1
      } else if(contact2.name < contact1.name) {
        return -1
      } else {
        return 0
      }
    })

    setContacts( cloneContacts )

  }

  const handleDeleteContact = (index) => {
    const cloneContacts = JSON.parse( JSON.stringify( contacto ))
    cloneContacts.splice(index, 1)

    setContacts( cloneContacts )
  }
  return (
    <div>
  
    <h1>Contacts</h1>
    <button onClick={ handleAddContact }>Add Random Contact</button>
    <button onClick={ handleSortbyPopularity }>Sort by Popularity</button>
    <button onClick={ handleSortByName }>Sort by Name</button>
    <table >
      <tr>
        <td>Picture</td>
        <td>Name</td>
        <td>Popularity</td>
        <td>Won Oscar</td>
        <td>Won Emmy</td>
        <td>Actions</td>
      </tr>
    {contacto.map((eachContact, index) => {
      return(
        
        <tr key={ eachContact.id }>
          <td><img src={eachContact.pictureUrl} alt="foto de famoso" width={130}></img></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td>{eachContact.wonOscar === true || eachContact.wonEmmy === true ? "🏆" : ""}</td>
          <td><button onClick= { () => handleDeleteContact(index) }>Delete</button></td>
        </tr>
      )

    })}

     </table>
    </div>
  );
}

export default App;
