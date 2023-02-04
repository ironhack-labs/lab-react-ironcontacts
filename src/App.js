import './App.css';
import Table from 'react-bootstrap/Table';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  const contactos = []
  for(let i = 0; i < 4; i++){
    contactos.push(contacts[i])
  }  

  const [newArr,setNewArr] = useState(contactos);

  function addRandom(){
    const random = (Math.floor(Math.random() * contacts.length));
    const auxRandom = contacts[random];
    const arrExtra = [...newArr, auxRandom];
    setNewArr(arrExtra);
  }

function sortByName(){
  let namesArr = [...newArr]
  namesArr.sort((a,b) => {
    return a.name.localeCompare(b.name)
  })
  setNewArr(namesArr)
}

function sortByPopularity(){
  let namesArr = [...newArr]
  namesArr.sort((a,b) => {
    return b.popularity - a.popularity
  })
  setNewArr(namesArr)

}

function removeContact(contactId){
  const namesArr = [...newArr]
  const auxArray = namesArr.filter((contacto) => {
    return contactId !== contacto.id
  })
  setNewArr(auxArray)

} 

  return (
    <div className="App">   
      <h1>Iron Contacts</h1>
      <button className='boton' onClick={addRandom}>Add Random Contact</button>
      <button className='boton' onClick={sortByPopularity}>Sort by popularity</button>
      <button className='boton' onClick={sortByName}>Sort by name</button>

      <Table striped bordered hover variant="dark">
      <thead>
        <tr >
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won <br/>oscar </th>
          <th>Won <br/>EMMY</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      {

        newArr.map((contacto,posicion) => {
          const{name, popularity, wonOscar, wonEmmy, id}= contacto;
          return (
            <tr>
              <td><img src={contacto.pictureUrl} alt={name}  width={80} /></td>              
              <td>{name}</td>
              <td>{popularity}</td>
              <td>{wonOscar && <img
                      src="https://cdn-icons-png.flaticon.com/512/206/206982.png" alt="oscar" width={50}  /> } 
              </td>
              <td>{wonEmmy && <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Emmy_Icon.png"  alt="emmy" width={35} />}
              </td>
              <td><button onClick={() => removeContact(contacto.id)}>Delete</button></td>
            </tr>
            )
        })
      }
      </tbody>
    </Table>
    </div>
  );
}
export default App;
