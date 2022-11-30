import './App.css';
import { useState } from "react"
import contacts from "./contacts.json";


function App() {
  let firstFive = contacts.slice(0, 5)
const [data, setData]= useState(firstFive)

function addContact() {
  const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
  setData([randomContact, ...data])
}

function sortByName() {
  const sortedName = [...data].sort((a,b) => a.name.localeCompare(b.name));
  setData(sortedName)
}

function sortByPopularity() {
  const sortedPopularity = [...data].sort((a,b) => b.popularity > a.popularity ? 1 : -1)
  setData(sortedPopularity);
}

const  deleteContact = (id) => {
const deletedContacts = [...data].filter(contact => contact.id !== id);
     setData(deletedContacts)};

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button> 
      <table>
  <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>
        </thead>
    <tbody>
      {data.map((Data) => (
          <tr key={Data._id}>
            <td><img src={Data.pictureUrl} alt="profilepic" /></td>
            <td>{Data.name}</td>
            <td>{Data.popularity.toFixed(2)}</td>
            <td>{Data.wonOscar && <p>🏆</p>}</td>
            <td>{Data.wonEmmy && <p>🏆</p>}</td>
            <td>
              <button onClick={()=> {deleteContact(Data.id)}}>Delete</button>
              </td>          
          </tr>
     ))}
 </tbody>
     </table>
     </div>
  );
}

export default App;
