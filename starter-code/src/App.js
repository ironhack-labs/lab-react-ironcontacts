import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsJson from './contacts'
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

console.log(contactsJson)
window.contactsJson = contactsJson.length


class App extends Component {



  state = {
    contacts: contactsJson.splice(0, 5),
    restOfContacts: contactsJson
  }


  showContacts = () => {
    return this.state.contacts.map((eachContact, i) => {
      return (




        <tr key={i}>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity}</td>
          <td><img src={eachContact.pictureUrl} width='100px' alt='pic' /></td>
          <td><Button color="danger" onClick={() => this.delete(i)}>Delete</Button></td>
        </tr>
      )
    })
  }


  delete = (e) => {
    let newContacts = [... this.state.contacts]
    newContacts.splice(e, 1)
    this.setState({
      contacts: newContacts,
    })
  }

  addRandomContact = () => {
    console.log(this)


    let newContacts = [...this.state.contacts]

    let randomIndex = Math.floor(Math.random() * this.state.restOfContacts.length)

    let randomContact = this.state.restOfContacts[randomIndex]

    let newRestOfContacts = [... this.state.restOfContacts]

    newRestOfContacts.splice(randomIndex, 1)

    newContacts.push(randomContact)

    this.setState({
      contacts: newContacts,
      restOfContacts: newRestOfContacts,
    })

    console.log(this.state)
  }

  sortByName = () => {
    let newContacts = [... this.state.contacts]
    let sortedContacts = newContacts.sort((a, b) => {
      if (a.name > b.name) {
        return 1
      } if (a.name < b.name) {
        return -1
      } else {
        return 0
      }
    })
    this.setState({
      contacts: sortedContacts,
    })
  }

  sortByPopularity = () => {
    let newContacts = [... this.state.contacts]
    let sortedContacts = newContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1
      } if (a.popularity < b.popularity) {
        return -1
      } else {
        return 0
      }
    })
    this.setState({
      contacts: sortedContacts,
    })
  }

  sortThem = (kind, order) => {
    this.setState({
      contacts: [... this.state.contacts].sort((a, b) => a[kind] - b[kind]),

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>

        <Button outline color="primary" onClick={this.sortByName}>Name</Button>
        <Button outline color="primary" onClick={this.addRandomContact}>Random</Button>
        <Button outline color="primary" onClick={this.sortByPopularity}>Popularity</Button>
        {/* <Button outline color="primary" onClick={() => this.sortThem('popularity', -1)}>Sort Pop</Button>
        <Button outline color="primary" onClick={() => this.sortThem('name', -1)}>Name ?</Button> */}

        <Table bordered responsive>
          <thead>
            <tr>

              <th>Name</th>
              <th>Picture</th>
              <th>Popularity</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>



            {this.showContacts()}



          </tbody>
        </Table>




      </div>
    );
  }
}

export default App;
