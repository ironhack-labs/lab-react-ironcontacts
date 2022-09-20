// import logo from './logo.svg';
import './App.css';
import contactsDB from '../src/contacts.json'
import { useState } from 'react'


function App() {
  const firstFive = contactsDB.slice(0,5)
  
  const [contacts, setContacts] = useState(firstFive)
  const remaining = contactsDB.slice(5)
  const randomNum = Math.floor(Math.random()*remaining.length)
  const newArr = [...contacts, remaining[randomNum]]
  const toBeSortedName = [...newArr]
  const toBeSortedPop = [...newArr]

  const sortedName = toBeSortedName.sort((a,b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
  })

  const sortedPop = toBeSortedPop.sort((a,b) => {
    if (a.popularity < b.popularity) {
      return -1;
    }
    if (a.popularity > b.popularity) {
      return 1;
    }
  })

  const removeCeleb = (name) => {
    const contactsCopy = [...contacts];
    const updateCelebList = contactsCopy.filter( contact => contact.name !== name)
    setContacts(updateCelebList);
}


  return (
    <div className="App">
    <div>
      <h1>IronContacts</h1>
    </div>
    <div className='btnsDiv'>
    <button className="button" onClick={() => setContacts(newArr)} type="submit">Add random celeb</button>
    <button className="button" onClick={() => setContacts(sortedName)}>Sort alphabetically</button>
    <button className="button" onClick={() => setContacts(sortedPop)}>Sort by popularity</button>
    </div>  
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Delete</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      {contacts.map(contact => {
        return(<tr>
          <td><img src={contact.pictureUrl} alt="pic"></img></td>
          <td>{contact.name}</td>
          <td>{Math.floor(contact.popularity)}</td>
          <td><button className="btn" onClick={() => removeCeleb(contact.name)}>Delete</button></td>
          {contact.wonOscar && <td>🏆</td>}
          {contact.wonEmmy && <td>🏆</td>}
          
        </tr>
        )
      })}
      </table>
    </div>
  );
}

export default App;
