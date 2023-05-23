import { useState } from 'react';
import './App.css';
import contacts from "./contacts.json";

function App() {

  let fiveContacts = [...contacts].splice(0, 5)
  // fiveContacts = fiveContacts.splice(0, 5)

  const [contactList, setContactList] = useState(fiveContacts)

  const handleAddContact = () => {
    let randomNum = Math.floor(4 + Math.random() * (contacts.length - 4 - 1))
    let newRandomContact = contacts[randomNum]
    let newList = [...contactList]

    !newList.includes(newRandomContact) ? newList.push(newRandomContact) : alert('contact repeated')
    // !newList.includes(newRandomContact) ? newList.push(newRandomContact) : handleAddContact() 
    setContactList(newList)
  }

  const handleSortName = () => {
    let newList = [...contactList]
    newList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    setContactList(newList)
  }

  const handleSortPopularity = () => {
    let newList = [...contactList]
    newList.sort((a, b) => a.popularity > b.popularity ? -1 : 1)
    setContactList(newList)
  }

  const handleRemoveContact = (id) => {
    let newList = contactList.filter(contact => contact.id != id)
    setContactList(newList)
  }

  return (
    <div className="App">
      <h1> IRON CONTACTS </h1>

      <button onClick={handleAddContact}> ADD RANDOM CONTACT </button>
      <button onClick={handleSortName}> SORT CONTACTS BY NAME </button>
      <button onClick={handleSortPopularity}> SORT CONTACTS BY POPULARITY </button>

      <table>
        <thead>
          <tr>
            <th> Picture </th>
            <th> Name </th>
            <th> Popularity </th>
            <th> Won Oscar </th>
            <th> Won Emmy </th>
            <th>  </th>
          </tr>
        </thead>

        <tbody>

          {
            contactList.map(({ name, pictureUrl, popularity, id, wonOscar, wonEmmy }) => {
              return (
                <tr key={id}>
                  <td> <img src={pictureUrl} alt={name} /> </td>
                  <td> <p>{name}</p> </td>
                  <td> <p>{popularity.toFixed(2)}</p> </td>
                  <td> <p> {wonOscar && "🏆"}</p> </td>
                  <td> <p> {wonEmmy && "🏆"}</p> </td>
                  <td> <button onClick={() => handleRemoveContact(id)}> REMOVE CONTACT </button> </td>
                </tr>

              )
            })
          }

        </tbody>
      </table>

    </div>
  )
}

export default App;

