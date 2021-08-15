import {useState} from 'react'
import './App.css';
import contactsData from "./contacts.json";


function App() {

  const firstFive = contactsData.slice(0, 5)
  const [contacts, setContacts] = useState(firstFive)

  const handleAddRandom = () => {
    const randContact = contacts[Math.floor(Math.random() * contacts.length -1)]

    const newContacts = [...contacts, randContact]
    setContacts(newContacts)
  }

  const handleSort = () => {
    let newContactsArray = [...contacts]
    newContactsArray.sort((a,b) => {
      if(a.name < b.name) return -1
      if(a.name > b.name) return 1
      return 0;
    })
    console.log(newContactsArray)
    setContacts(newContactsArray)
  }

  const handleDelete = (id) => {
    const updatedArr = contactsData.filter(contact => contact.id !== id)
    setContacts(updatedArr)
  }

  return (
    <div className="App">
        <h1>IronContacts</h1>
        <section className="table">
        <button onClick={handleAddRandom}>Add Random Contact</button>
        <button onClick={handleSort}>Sort by Name</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>

          {contacts.map (contact => (
                <tr key={contact.id}>
                <td ><img key={contact.pictureUrl} src={contact.pictureUrl} width="50px" alt="profile pic"/></td>
                <td key={contact.name} >{contact.name}</td>
                <td key={contact.popularity} >{contact.popularity.toFixed(2)}</td>
                <button onClick={handleDelete}>Delete</button>
                </tr>
                ))}

        </table>
      </section>
    </div>
  );
}

export default App;
