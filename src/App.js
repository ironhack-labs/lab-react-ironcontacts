import './App.css';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  let newArrInic = contacts.slice(0,5)

  const [newArr,setNewArr] = useState(newArrInic)

  function addRandom(){
    let numRandom = (Math.floor(Math.random() * contacts.length));
    let contactRandom = contacts[numRandom];
    const arrExtra = [...newArr, contactRandom];
    setNewArr(arrExtra);
  }

function sortByName(){
  let namesAlpha = [...newArr]
  namesAlpha.sort((a,b) => {
    return a.name.localeCompare(b.name)
  })
  setNewArr(namesAlpha)
}

function sortByPopularity(){
  let popularitySort = [...newArr]
  popularitySort.sort((a,b) => {
    return b.popularity - a.popularity
  })
  setNewArr(popularitySort)
}

function removeContact(contactId){
  let remove = [...newArr]
  const nuevoArray = remove.filter((contacto) => {
    return contactId !== contacto.id
  })
  setNewArr(nuevoArray)

}
  

  return (
    <div className="App">
      

      <h1>Iron Contacts</h1>
      <div className='btn'>
        <button onClick={addRandom}>Add random</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
        <button onClick={sortByName}>Sort by name</button>
      </div>
      <table>
      
      <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Action</th>
        </tr>
     
     
      {newArr.map((contacto,  posicion) => (
          <tr key={contacto.id}>
            <td>
              <img width="100px" src={contacto.pictureUrl} alt=""></img>
            </td>
            <td>{contacto.name}</td>
            <td>{contacto.popularity.toFixed(2)}</td>
            <td>{contacto.wonOscar && ("🏆")}</td>
            <td>{contacto.wonEmmy && ("⭐" )}</td>
            <td><button onClick={() => removeContact(contacto.id)}>Delete</button></td>
          </tr>
        ))}
   
    </table>
    </div>
  );
}

export default App;