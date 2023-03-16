import './App.css';
import { useState } from "react";
import contacts from "./contacts.json";

function App() {
  let fiveContact = contacts.slice(0, 5)
  const [data, setData]= useState(fiveContact)

  function addContact() {
    const randomContact = contacts[Math.floor(contacts.lenght * Math.random())];
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
    return (
    <div className="App">
      <h2>IronContact</h2>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by name</button>
      <button onClick={sortByPopularity}>Sort by popularity</button> 
      <table>

      <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Actions</th>
        </tr>

        {data.map((Data) => (
          <tr key={Data._id}>
            <td><img src={Data.pictureUrl} alt="profilepic" /></td>
            <td>{Data.name}</td>
            <td>{Data.popularity.toFixed(2)}</td>
            <td>{Data.wonOscar && <p>🏆</p>}</td>
            <td>{Data.wonEmmy && <p>🏆</p>}</td>
          </tr>
     
     )
     )
     }


      </table>
    </div>
  );
}

export default App;
