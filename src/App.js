import './App.css';
import Table from 'react-bootstrap/Table';
import contacts from "./contacts.json";
import { useState } from 'react';

function App() {
  let contactsArray = []
  for(let i = 0; i < 4; i++){
    contactsArray.push(contacts[i])
  }  

  const [newArr,setNewArr] = useState(contactsArray)

  function addRandom(){
    let numRandom = (Math.floor(Math.random() * contacts.length));
    let contactoRandom = contacts[numRandom];
    const arrExtra = [...newArr, contactoRandom];
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
  let namesArr = [...newArr]
  const nuevoArray = namesArr.filter((contacto) => {
    return contactId !== contacto.id
  })
  setNewArr(nuevoArray)

}
  

  return (
    <div className="App">
      

      <h1>Iron Contacts</h1>
      <button onClick={addRandom}>random</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>

      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won oscar</th>
          <th>Won EMMY</th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
      {
        newArr.map((contacto,posicion) => {
          return (
            <tr>
              <td><img src={contacto.pictureUrl} 
              alt={contacto.name}  width="80px" /></td>
              <td>{contacto.name}</td>
              <td>{contacto.popularity}</td>
              <td>{contacto.wonOscar && <img
                      src="https://cdn-icons-png.flaticon.com/512/206/206982.png"
                      alt="oscar"
                      width="50px"
                      />
                  }
              </td>
              <td>{contacto.wonEmmy && <img
                      src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Emmy_Icon.png"
                      alt="emmy"
                      width="30px"
                    />
                  }
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