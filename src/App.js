import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react"

function App() {
  const data = [...contacts]
  const people = data.slice(0, 5)

  const [celebritys, newCelebritys] = useState(people)

  const addHandler = () => {
    const data = [...contacts]
    const newCeleb = data[Math.floor(Math.random() * (data.length - 6)) + 6]

    newCelebritys((prevState) => {
      return [...prevState, newCeleb]
    })

  }
  const sortNameHandler = () => {
    const text = [...celebritys]
    const byName = text.sort((a,b) => a.name < b.name ? -1 : 1,) 
    console.log(byName)
    newCelebritys(byName)
  }
  const sortPopularityHandler = () => {
    const text = [...celebritys]
    const byPopularity = text.sort((a,b) => b.popularity - a.popularity,) 
    newCelebritys(byPopularity)
}
  const deleteActor = (perso) => {
    const text = [...celebritys]
    const newArray = text.filter(person => {
      return person.name !== perso
    })
    newCelebritys(newArray)
  }

  
  return <div className="App">
    <h1>IronContacts</h1>
    <button onClick={addHandler}>Add a Celebrity</button>
    <button onClick={sortNameHandler}>Sort by Name</button>
    <button onClick={sortPopularityHandler}>Sort by Popularity</button>
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
        {celebritys.map(contact => {
          return (
            <tr key={Math.random()}>

              <td><img className="pic" src={contact.pictureUrl} alt="not found" /></td>


              <td>{contact.name}</td>


              <td>{contact.popularity}</td>


              {contact.wonOscar ? <td>🏆</td> : <td>No</td>}


              {contact.wonEmmy ? <td>🏆</td> : <td>No</td>}

            <td><button onClick={() => deleteActor(contact.name)}>Delete</button></td>

            </tr>

          )
        })}
      </tbody>
    </table>
  </div>
}

export default App;
