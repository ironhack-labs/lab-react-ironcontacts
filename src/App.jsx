import "./App.css";
import contacts from "./contacts.json";
import React, {useState} from 'react';
function App() {
  const [newArr, setNewArr] = useState(contacts.slice(0, 5));
  const remaining = contacts.slice(5);

  function RandomCeleb(){
    const randomIndex = Math.floor(Math.random() * remaining.length);
    setNewArr([...newArr, remaining.splice(randomIndex, 1)[0]]);
  }

  function orderByPopularity(){
    const orderedList = newArr.sort((a, b) => {
      return b.popularity - a.popularity;
    })
    setNewArr([...orderedList]);
  }

  function orderByName(){
    const orderedList = newArr.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    setNewArr([...orderedList]);
  }

  function deleteContact(contactId){
    const newList = newArr.filter((element) => {
      return element.id !== contactId;
    })
    setNewArr([...newList]);
  }
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={() => {RandomCeleb()}}>Add Random Celebrity</button>
      <button onClick={() => {orderByName()}}>Order by name</button>
      <button onClick={() => {orderByPopularity()}}>Order by popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {newArr.map((contact)=> {
          return <tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt="pic" width="200" height="200"/></td>
                  <td><p>{contact.name}</p></td>
                  <td><p>{contact.popularity}</p></td>
                  <td><p>{contact.wonOscar ? "🏆" : "No"}</p></td>
                  <td><p>{contact.wonEmmy ? "🏆" : "No"}</p></td>
                  <td><button onClick={() => {deleteContact(contact.id)}}>Delete</button></td>
                </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
