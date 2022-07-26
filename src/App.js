import contacts from "./contacts.json";
import { useState } from "react";
import './App.css';



function App() {

  const [contactsArr, setContact] = useState(contacts.slice(0, 5));

  const addRandomContact = (newContact) => {
    setContact((prevContacts) => {
      const newContacts = [...prevContacts];
      const unusedContacts = contacts.filter(e => !prevContacts.includes(e))
      newContacts.push(unusedContacts[Math.floor(Math.random()*unusedContacts.length)])
      return newContacts
    })
  }

  const sortContactByName = () => {
    setContact((prevContacts) => {
      const newContacts = [...prevContacts];
      const sortedByNameContacts = newContacts.sort((a, b) => a.name.localeCompare(b.name))
      return sortedByNameContacts 
    })
  }

  const sortContactByPopularity = () => {
    setContact((prevContacts) => {
      const newContacts = [...prevContacts];
      const sortedByPopularity = newContacts.sort((a, b) => b.popularity - a.popularity)
      return sortedByPopularity
    })
  }


  return (
    <>

      <button onClick={addRandomContact}>Add new Random Cantact</button>
      <button onClick={sortContactByName}>Sort by Name</button>
      <button onClick={sortContactByPopularity}>Sort by Popularity</button>      

      {/* <button onClick={addRandomContact}>Sort by Popularity</button>             */}

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {contactsArr.map((e) => {
          return (
            <><tr>
              <td><img src={e.pictureUrl}></img></td>
              <td>{e.name}</td>
              <td>{e.popularity}</td>
              <td>{e.wonOscar ? <>🏆</> : <>😢</>}</td>
              <td>{e.wonEmmy ? <>🏆</> : <>😢</>}</td>
            </tr>
            </>
          )
        })}

      </table>

    </>
  );
}

export default App;
