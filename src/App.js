import './App.css';
import { useState } from 'react';
import contactsArr from './contacts.json';

function App() {

  let fiveContacts = contactsArr.slice(0, 5);

  const [contacts, setContacts] = useState(fiveContacts);

  const remainingContacts = contactsArr.slice(5);
  console.log(remainingContacts);

  const addRandomContact = () => {
    let randomNumber = Math.floor(Math.random() * remainingContacts.length)
    contacts.push(remainingContacts[randomNumber])
    setContacts([...contacts])
  }

  const sortByPopularity = () => {
    contacts.sort((a, b) => a.popularity < b.popularity ? 1 : -1);
    setContacts([...contacts])
  }

  const sortByName = () => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));
    setContacts([...contacts])
  }

  // const removeContact = (e) => {
  //     const array = [...contacts];
  //     const index = array.indexOf(e)
  //     if (index !== -1) {
  //       array.splice(index, 1);
  //       setContacts({contacts: array});
  //     }
  //   };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ironcontacts</h1>
        <div className='Control'>
          <button onClick={addRandomContact}>Add Random Contact</button>
          <button onClick={sortByPopularity}>Sort by Popularity</button>
          <button onClick={sortByName}>Sort by Name</button>
        </div>
        <table className='Table'>
          <thead className='TableHeader'>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscar</th>
              <th>Won Emmy</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='TableBody'>
            {contacts.map(element => {
              return (
                <tr>
                  <td><img src={element.pictureUrl} alt="" width="100px" /></td>
                  <td>{element.name}</td>
                  <td>{element.popularity.toFixed(2)}</td>
                  <td>{element.wonOscar ? '🏆' : ''}</td>
                  <td>{element.wonEmmy ? '🏆' : ''}</td>
                  {/* <td><button onClick={() => removeContact(element.id)}>Delete</button></td> */}
                </tr>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;

// JSON.parse(JSON.stringify)