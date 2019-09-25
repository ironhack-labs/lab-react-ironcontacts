import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';
import styled from 'styled-components';

const Table = styled.table`
  width: 60vw;
  text-align: center;
  margin: 0 auto;
  border-collapse: collapse;
  th{
    border: 1px solid #b1bcd5;
    color:#5a6c96;
    padding: 10px;
  }
`;
const Button = styled.button`
  background:#5a6c96;
  border-radius:3px;
  padding:15px 25px;
  border:none;
  color: white;
  font-size: 1rem;
`

class App extends Component {
  state = {
    contacts:[contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
  };

  addContact = () => {
    this.setState((prevState) => {
      return{
        ...prevState,
        contacts: [...prevState.contacts, contacts[prevState.contacts.length]]
      }
    })
  }

  sortByName = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts:prevState.contacts.sort((a,b) => {
          if (a.name < b.name) return -1
          else if(a.name > b.name) return 1
          else return 0
        })
      }
    })
  }

  sortByPopularity = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        contacts:prevState.contacts.sort((a,b) => {
          return b.popularity-a.popularity
        })
      }
    })
  }

  deleteContact = (name) => {
    this.setState((prevState) => {
      return{
        ...prevState,
        contacts:prevState.contacts.filter((e) => e.name !== name)
      }
    })
  }

  render(){
    const {contacts} = this.state;
    return(
      <div>
        <h1>IronContacts</h1>
        <div className="buttons">
          <Button onClick={this.addContact}>Add Contact</Button>
          <Button onClick={this.sortByName}>Sort by Name</Button>
          <Button onClick={this.sortByPopularity}>Sort by Popularity</Button>
        </div>
        <Table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {contacts.map((contact) => (
            <Contact key={contact.name} data={contact} deleteC={this.deleteContact} />
          ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default App;
