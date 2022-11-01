import "./App.css";
import allContactArr from "./contacts.json";
import { useState } from "react";

function App() {
  /*Iteración 1*/

  const [contacts, setContact] = useState(allContactArr.slice(0, 5));
  /*const copy = contacts.map((eachElement) => eachElement);*/

  const addContact = () => {
    const randomContactIndex = Math.floor(Math.random() * (allContactArr.length - 5 + 1) + 5)
    const copy = contacts.map((eachElement) => eachElement)
    copy.push(allContactArr[randomContactIndex])
    setContact(copy)
  } 

  const sortByPopularity = () => {
    const copy = contacts.map((elem) => elem)
            copy.sort((elem1, elem2) => {
                if(elem1.popularity > elem2.popularity){
                    return -1
                }else {
                    return 1
                }
            })
            setContact(copy)
  }

  const sortByName = () => {
    const copy = contacts.map((elem) => elem)
            copy.sort((elem1, elem2) => {
                if(elem1.name > elem2.name){
                    return 1
                }else {
                    return -1
                }
            })
            setContact(copy)
  }

  const deleteContact = (contactId) => {

    const filteredContact = contacts.filter((eachElement) => {
        if (eachElement.id === contactId){
            return false 
        } else {
            return true 
        }
    })
    setContact(filteredContact)
}

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button className="topButton" onClick={addContact}>Add Random Contact</button>
      <button className="topButton" onClick={sortByPopularity}>Sort by Popularity</button>
      <button className="topButton" onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {contacts.map((eachElement) => {
          return (
              <tr key={eachElement.id}>
                <td>
                  <img
                    src={eachElement.pictureUrl}
                    alt="pictureUrl"
                    width="50px"
                  />
                </td>
                <td>{eachElement.name}</td>
                <td>{eachElement.popularity.toFixed(2)}</td>
                <td>{eachElement.wonOscar === true ? "🏆" : ""}</td>
                <td>{eachElement.wonEmmy === true ? "🌟" : ""}</td>
                <td><button onClick={() => deleteContact (eachElement.id)}>Delete</button></td>
              </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
