import "./App.css";
import data from './contacts.json';
import { useState } from "react";
const sliced = data.splice(0, 5)


function App() {
  const [contacts, setContacts] = useState(sliced)
  // console.log(contacts)
  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      
<div className="button-style">
      <button onClick={() => {
      let randomIndex = Math.floor(Math.random() * data.length - 1)
      if (randomIndex < 0){
        setContacts(contacts)
        return 
      }
        const newArray = [...contacts, data[randomIndex]]
        // console.log(data)
        // console.log(randomIndex)
        // console.log(contacts)
        data.splice(randomIndex, 1)
        setContacts(newArray)
      }}>
        Add Random Contact
      </button>

      <button onClick={() => {
        const sorted = contacts.toSorted((a, b) => {
          return b.popularity - a.popularity
        })
        setContacts(sorted)
      }}>
        Sort by popularity
      </button>

      <button onClick={() => {
        const sorted = contacts.toSorted((a, b) => {
          return a.name.localeCompare(b.name);
        })
        setContacts(sorted)
      }}>
        Sort by name
      </button>
      </div>

      <div className="conteiner">
        <table className="style">
          <thead className="list" >
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th> Actions </th>
            </tr>
          </thead>
          <tboby>
            {contacts.map(item => (

              <tr key={item.id}>
                <td>
                  <img src={item.pictureUrl} alt={item.name}
                    width={150}
                    height={200} />
                </td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.popularity}
                </td>
                <td>
                  {item.wonOscar && <span>🏆</span>}
                </td>
                <td>
                  {item.wonEmmy && <span>🌟</span>}
                </td>
                <td>
                  <button onClick={() => {
                    const filtered = contacts.filter(el => el.id !== item.id)
                    setContacts(filtered)
                  }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tboby>
        </table>
      </div>
    </div>
  );
}

export default App;
