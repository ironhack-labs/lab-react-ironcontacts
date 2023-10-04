import { useState } from "react";
import "./App.css";
import ContactsDataBase from "./contacts.json"


function App() {

  const [contactsData, setContactsData] = useState(ContactsDataBase.slice(0,5))

  const handleAddRandom = () => {
    const remainingContacts = ContactsDataBase.filter(contact => !contactsData.includes(contact))
    if(remainingContacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingContacts.length)
    const randomContact = remainingContacts[randomIndex];

    setContactsData([...contactsData, randomContact]);

  }

  const handleNameSort = () => {
    setContactsData([...contactsData].sort((n1, n2) => n1.name.localeCompare(n2.name)))
  }

  const handlePopularitySort = () => {

    const popularity = [...contactsData].sort((p1, p2) => p2.popularity - p1.popularity)
    
    setContactsData(popularity)
  }

  const onDeleteTask = (name) => {
    setContactsData(contactsData.filter(task => task.name !== name))
  }

  return (

    <div className="App">
      <div className="add-random-button mb-4">
        <button className="btn btn-primary me-2" onClick={handleAddRandom}>Add Random Contact</button>
        <button className="btn btn-primary me-2" onClick={handleNameSort}>Sorted by name</button>
        <button className="btn btn-primary " onClick={handlePopularitySort}>Sorted by popularity</button>
      </div>
      <table>
        <thead >
          <tr>
            <th >Picture</th>
            <th >Name</th>
            <th > Popularity</th>
            <th className="px-4">Won Oscar</th>
            <th >Won Emmy</th>
            <th className="px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contactsData.map(contact => (
          <tr key={contact.name}>
            <td>
              <img src={contact.pictureUrl} alt="image" style={{width: "50px"}} key={contact.name}/>
            </td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar ? "🏆" : ""}</td>
            <td>{contact.wonEmmy ? "🌟" : ""}</td>
            <i className="btn btn-danger" role="button" onClick={() => onDeleteTask(contact.name)}>Delete</i>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default App;
