import React, {useState} from 'react'
import './App.css';
import contacts from "./contacts.json";

function App() {
const [contact, setContacts]= useState(contacts.slice(0, 5))
console.log(contact)
const random = (event) => {
  event.preventDefault()
  let newRandomContact = contacts[Math.floor(Math.random()* contacts.length)]
  setContacts([...contact,newRandomContact])
}

const sortAlph = (event) => {
  event.preventDefault()
  let sortedByName= contact.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})
  setContacts([...sortedByName])
}

const sortPop = (event) => {
  event.preventDefault()
  let sortedByPop= contact.sort(function(a, b){
  return b.popularity - a.popularity;
})
  setContacts([...sortedByPop])
}

const deleteArtist = (id) => {

  // event.preventDefault()
  const listaArtista = contact.filter((element) => {
    return element.id !== id
  })
  setContacts([...listaArtista])
}

  return (
    <>
    <button onClick={random}>Add Random Contact</button>
    <button onClick={sortAlph}>Sort by Name</button>
    <button onClick={sortPop}>Sort by Popularity</button>
    <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Action</th>
    </tr>
        {
          contact.map((e, id)=>{
            return(
            <tr key={id}>
              <td><img style={{width:90}} src={e.pictureUrl}/></td>
              <td>{e.name}</td>
              <td>{e.popularity}</td>
              <td><button onClick={() => deleteArtist(e.id)}>Eliminar</button></td>
            </tr>
            )
          })
      }
    </table>
    </>
  );
}
export default App;