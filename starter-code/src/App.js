import React, { Component } from 'react';

import contacts from './contacts.json'
import styled from 'styled-components';
import { Button, Navbar, Table, Section, Img } from './styles'
import './App.css';


class App extends Component {
  contactSlice = contacts.slice(0, 5)
  state = {
    data: this.contactSlice
  }

  addRandomContact = () => {
    const newContacts = [...this.state.data]
    const filterContacts = contacts.filter(e => !newContacts.includes(e))
    const contact =
      filterContacts[Math.floor(Math.random() * filterContacts.length)]
    if (filterContacts.length === 1) {
      return
    } else {
      newContacts.push(contact)
    }
    this.setState({ data: newContacts })
    console.log(this.state.data)
  }

  sortByName = () => {
    const newContacts = [...this.state.data]
    const sortedContacts = newContacts.sort((a, b) => (a.name < b.name ? -1 : 1))
    console.log(sortedContacts)
    this.setState({ data: sortedContacts })
  }


  sortByPopularity = () => {
    const newContacts = [...this.state.data]
    const sortedContacts = newContacts.sort((a, b) => (a.popularity < b.popularity ? -1 : 1))
    console.log(sortedContacts)
    this.setState({ data: sortedContacts })
  }

  hanldleDelete = celebrityIndex =>{
    const newContacts= this.state.data
    newContacts.splice(celebrityIndex, 1)
    this.setState({data: newContacts})

  }
  render() {
    return (
      <Section>
        <h1>Iron Contacts</h1>
        <Navbar>
          <Button onClick={this.sortByName}>Sort by name</Button>
          <Button onClick={this.sortByPopularity}>Sort by Popularity</Button>
          <Button onClick={this.addRandomContact}>Add character</Button>
        </Navbar>        
        <Table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>            
          <tbody>
            {this.state.data.map((e, i, a) => {
              return (
                <tr key={e.index}>
                  <td><Img src={e.pictureUrl} /></td>
                  <td>{e.name}</td>
                  <td>{(e.popularity).toFixed(2)}</td>
                  <td><Button type="Delete" onClick={this.hanldleDelete}>Delete</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </Section>
    )
  }
}
export default App;

