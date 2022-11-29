// src/App.js
import { useState } from "react";
import "./App.css";
import contactsJson from './contacts.json'


function App() {
  const contactsArr = [{
    "name": "Idris Elba",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
    "popularity": 11.622713,
    "id": "11731993-0604-4bee-80d5-67ad845d0a38",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Johnny Depp",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
    "popularity": 15.656534,
    "id": "7dad00f7-3949-477d-a7e2-1467fd2cfc06",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Monica Bellucci",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/qlT4904d8oi2NIs28RrgnIZDFZB.jpg",
    "popularity": 16.096436,
    "id": "0ad5e441-3084-47a1-9e9b-b917539bba71",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Gal Gadot",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/34kHAyBaBhq2kUrmhM15paEBuuI.jpg",
    "popularity": 10.049256,
    "id": "b497e3c4-50bb-4ae2-912f-eb36802c5bc2",
    "wonOscar": false,
    "wonEmmy": false
  },
  {
    "name": "Ian McKellen",
    "pictureUrl": "https://image.tmdb.org/t/p/w500/coWjgMEYJjk2OrNddlXCBm8EIr3.jpg",
    "popularity": 10.070132,
    "id": "0067ae32-97b6-4431-898e-eb1c10150abb",
    "wonOscar": false,
    "wonEmmy": false
  },]
  const [contacts, setContacts] = useState(contactsArr)

  const handleClick1 = () => {
    setContacts(current => [...current, contactsJson[(current.length + 1)]])
  }

  const handleClick2 = () => {
    setContacts(current => [...current].sort((a, b) => { return a.popularity < b.popularity ? 1 : a.popularity > b.popularity ? -1 : 0 }));
  }

  const handleClick3 = () => {
    setContacts(current => [...current].sort((a, b) => { return a.name > b.name ? 1 : a.name < b.name ? -1 : 0 }));
  }
  const handleClick4 = (id) => {

    setContacts(current => [...current].filter(contact => contact.id !== id));
  }


  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={handleClick1}>Add Random Contact</button>
      <button onClick={handleClick2}>sort by popularity</button>
      <button onClick={handleClick3}>sort by name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar</th>
            <th>Emmy</th>
          </tr>
        </thead>
        <tbody>
          {
            contacts.map(contact => {
              return (<tr key={contact.id}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? '🏆' : '😫'}</td>
                <td>{contact.wonEmmy ? '🥇' : '😫'}</td>
                <td><button onClick={() => handleClick4(contact.id)}>Delete</button></td>

              </tr>)
            })

          }
        </tbody>
      </table>
    </div>
  )
}
export default App;
