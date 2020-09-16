import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json'
import styled from "styled-components"

const StyledButton = styled.button`
  margin: 5px;
  padding: 10px 20px;
  background-color: ${props => props.btnType === 'primary' ? 'rgb(100,100,220)' : props.btnType === 'danger' ? 'red' : 'grey'};
  cursor: pointer;
  color: white;
  border-radius: 10px;
  box-shadow:none;
  border:none;
`

const AppDiv = styled.div`
  color: #555;
  h1{
    font-size: 4rem;
  };
  center{
    margin-top: 30px;
  };
  thead{
    font-size: 1.4rem;
  };
  th{
    padding-bottom: 20px;
  };
  tr{
    border: 2px solid black;
    text-align: center;
  };
  img{
    border-radius: 50%;
    width: 80px;
    height: 120px;
    border-radius:10px;
    object-position: center;
    object-fit: scale-down;
  };
  th:first-child,
  td:first-child{
    padding-right: 20px;
  };
  td{
    font-size: 1.1rem;
  }
`

function App() {

  const [myContacts, setMyContacts] = useState(contacts.slice(0, 5))

  const addContact = () => {
    let randomIndex;
    while (!randomIndex || myContacts.includes(contacts[randomIndex])) {
      randomIndex = Math.round(Math.random() * (contacts.length - 1))
    }
    setMyContacts([...myContacts, contacts[randomIndex]])
  }

  const nameSort = () => {
    setMyContacts([...myContacts].sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
  }

  const popSort = () => {
    setMyContacts([...myContacts].sort((a, b) => a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 : 0))
  }

  const deleteContact = (id) => () => {
    setMyContacts(myContacts.filter(contact => contact.id != id))
  }

  return (
    <AppDiv className="App">
      <h1>IronContacts</h1>
      <StyledButton onClick={addContact} btnType='primary'>Add Random Contact</StyledButton>
      <StyledButton onClick={nameSort} btnType='primary'>Sort by name</StyledButton>
      <StyledButton onClick={popSort} btnType='primary'>Sort by popularity</StyledButton>
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
            {myContacts.map((contact, index) =>
              <tr key={index}>
                <td><img src={contact.pictureUrl} alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td><StyledButton onClick={deleteContact(contact.id)} btnType='danger'>Delete</StyledButton></td>
              </tr>
            )}
          </tbody>
        </table>
      </center>
    </AppDiv>
  );
}

export default App;
