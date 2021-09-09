import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import { act } from 'react-dom/test-utils';

function App() {
  let [actors, setActors] = useState(contacts.slice(0,5));

  // Show Table Function
  const ShowTable = () => {
    let list = actors.map(actor=>{
      return (
        <tr>
          <td><img src={actor.pictureUrl} width="50"></img></td>
          <td>{actor.name}</td>
          <td>{actor.popularity}</td>
        </tr>
      )
    })
    return list
  }

  // Random Contact Function
  function randomContact() {
    let randomNumber = Math.floor(Math.random() * (contacts.length -1));
    let newContact = contacts[randomNumber];
    contacts.splice(randomNumber, 1);

    let copyOfActors = [...actors];
    copyOfActors.push(newContact);
    setActors(copyOfActors)
  }

  // Sort by Name Function
  function sortNameContact() {
    let copyOfActors = [...actors];
    copyOfActors.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setActors(copyOfActors);
  }

  // Sort by Popularity Function
  function sortByPopularity() {
    let copyOfActors = [...actors];
    copyOfActors.sort((a, b) => {
      return b.popularity - a.popularity;
    })
    setActors(copyOfActors);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick = {randomContact}>Add Random Contact</button> &nbsp; 
      <button onClick = {sortNameContact}>Sort by Name</button> &nbsp; 
      <button onClick = {sortByPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        <ShowTable />
      </table>
    </div>
  );
}

export default App;
