import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Table from 'react-bootstrap/Table';

function App() {
  let newArrInic = [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4],]
  // console.log(newArr)
  

  const [newArr,setNewArr] = useState(newArrInic)

  function addRandom(){
    let numRandom = (Math.floor(Math.random() * contacts.length));
    // console.log("num -->",numRandom);
    let contactoRandom = contacts[numRandom];
    // console.log(contactoRandom);
    const arrExtra = [...newArr, contactoRandom];
    setNewArr(arrExtra);
  }

function sortByName(){
  let namesArr = [...newArr]
  namesArr.sort((a,b) => {
    return a.name.localeCompare(b.name)
  })
  console.log(namesArr)
  setNewArr(namesArr)
}

function sortByPopularity(){
  let namesArr = [...newArr]
  namesArr.sort((a,b) => {
    return b.popularity - a.popularity
  })
  console.log(namesArr)
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