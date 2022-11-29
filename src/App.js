
import contacts from "./contacts.json"
import Contact from "./components/Contact/Contact"
import { useState } from "react"
function App() {

  const initialContacts = contacts.slice(0, 5)
  const [contactInfo, setContacts] = useState(initialContacts)
  const contactsCopy = [...contactInfo]

  const newContact = () => {
    let index = Math.floor(Math.random() * contacts.length)
    const selectedContact = contacts[index]
    contactsCopy.push(selectedContact)
    setContacts(contactsCopy)
  }

  const orderContactByName = () => {
    contactsCopy.sort((a, b) => a > b)
    setContacts(contactsCopy)
  }



  return (
    <div className='App'>
      <button onClick={newContact}>AÑADIR NUEVO FAMOSO</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th onClick={orderContactByName}>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          <Contact contacts={contactInfo} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
