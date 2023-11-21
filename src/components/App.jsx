import contacts from "./../contacts.json";
import { useState } from "react"


function App() {

  const fiveContacts = contacts.slice(0, 5)

  const [listOfContacts, setListOfContacts] = useState(fiveContacts)

  const randomContact = () => {
    return Math.floor(Math.random() * (50 - 0) + 0);
  }

  const pushContact = () => {
    const contactsCopy = [...listOfContacts]
    const newContact = contacts[Math.floor(Math.random() * (50 - 0) + 0)];
    contactsCopy.push(newContact)
    setListOfContacts(contactsCopy)
  }

  const sortContactsByName = () => {
    const contactsCopy = [...listOfContacts]

    contactsCopy.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })

    setListOfContacts(contactsCopy)

  }

  const sortContactsByPopularity = () => {
    const contactsCopy = [...listOfContacts]

    contactsCopy.sort((a, b) => {
      return b.popularity - a.popularity
    })

    setListOfContacts(contactsCopy)

  }

  const removeContact = (id) => {
    console.log(id);
    const newContact = listOfContacts.filter(elm => elm.id != id)
    setListOfContacts(newContact)
  }

  return (
    <div className="App">
      <button onClick={pushContact}>Add Random Contact</button>
      <button onClick={sortContactsByName}>Sort by Name</button>
      <button onClick={sortContactsByPopularity}>Sort by Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>
        {listOfContacts.map(eachContact => {
          return (
            <tr>
              <td><img src={eachContact.pictureUrl} alt="eachContact.name" /></td>
              <td>{eachContact.name}</td>
              <td>{eachContact.popularity}</td>
              <td>{eachContact.wonOscar ? "🏆" : ""}</td>
              <td>{eachContact.wonEmmy ? "🌟" : ""}</td>
              <td><button onClick={() => removeContact(eachContact.id)}>Delete</button></td>
            </tr>)
        })}
      </table>
    </div>
  );
}

export default App;
