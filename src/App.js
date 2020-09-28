import './App.css';
import React, {useState} from 'react';
import contacts from './contacts.json'
import styled from "styled-components"

const AppDiv = styled.div`
  img{
    width: 90px;
    height: auto;
  };
  h1{
    font-size: 4.3rem;
  };
  center{
    margin-top: 30px;
  };
  thead{
    font-size: 2rem;
  };
  tr{
    text-align: center;
  };
`

function App() {

  const [Contacts, setContacts] = useState(contacts.slice(0, 5))

  const addContact = () => {
    let random;
    while (!random || Contacts.includes(contacts[random])) {
      random = Math.round(Math.random() * (contacts.length - 1))
    }
    setContacts([...Contacts, contacts[random]])
  }

  const nameSort = () => {
    setContacts([...Contacts].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
  }

  const popularitySort = () => {
    setContacts([...Contacts].sort((a, b) => a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0))
  }

  const deleteContact = (id) => () => {
    setContacts(Contacts.filter(contact => contact.id != id))
  }

  return (
    <AppDiv className="App">
      <h1>IronContacts</h1>
        <button onClick={addContact} >Add Random Contact</button>
        <button onClick={nameSort} >Sort by name</button>
        <button onClick={popularitySort} >Sort by popularity</button>
        <center>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Contacts.map((contact, index) =>
                <tr key={index}>
                  <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td><button onClick={deleteContact(contact.id)} btnType='danger'>Delete</button></td>
                </tr>
              )}
            </tbody>
          </table>
        </center>
    </AppDiv>
  );
}

export default App;
