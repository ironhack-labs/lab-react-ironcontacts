// import logo from './logo.svg';
import './App.css';
import Contacts from './contacts.json'
import { useState } from 'react'

function App() {

  const firstFiveActor = Contacts.slice(0, 7)
  console.log(firstFiveActor);

  const [initContacts, setAddContact] = useState(firstFiveActor)

  const addContact = () => {
    const newContact = [...initContacts]
    const randomNumber = Math.floor(Math.random() * (Contacts.length - 7)) + 7
    console.log(newContact);
    if (Contacts[randomNumber]) {
      newContact.unshift(Contacts[randomNumber]);
      Contacts.splice(randomNumber, 1);
      setAddContact(newContact);
    }


  }

  const sortPopularity = () => {
    const newContact = [...initContacts]
    newContact.sort((a, b) => -a.popularity + b.popularity);
    setAddContact(newContact)
  }

  const sortName = () => {
    const newContact = [...initContacts]
    newContact.sort((a, b) => a.name.localeCompare(b.name));
    setAddContact(newContact)
  }



  const removeContact = (name) => {
    const newContact = initContacts.filter((contact) => contact.name !== name);
    setAddContact(newContact);
  }



  return (
    <div className="App">

      <h2>IronContacts</h2>

      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortPopularity}>Sort by Popularity</button>
      <button onClick={sortName}>Sort by Name</button>



      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won Oscar</td>
            <td>Won Emmy</td>
          </tr>
        </thead>
        <tbody>
          {initContacts.map(actor =>
            <tr key={actor.name}>
              <td><img src={actor.pictureUrl} /></td>
              <td>{actor.name}</td>
              <td>{actor.popularity}</td>
              <td>{actor.wonOscar ? '🏆' : ' No tiene '}</td>
              <td>{actor.wonEmmy ? '🏆' : ' No tiene '}</td>
              <td><button onClick={() => removeContact(actor.name)}>Remove Contact</button></td>

            </tr>
          )}

        </tbody>
      </table>





      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}


export default App;
