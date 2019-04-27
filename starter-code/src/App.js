import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      contacts: contacts.slice(0,5),
      contactsAll: contacts
    }
  }

  handleRandom = (e) => {
    let contactsCopy = [...this.state.contacts]

    let randomContact = [...this.state.contactsAll][Math.floor(Math.random() * this.state.contactsAll.length)]
 
    contactsCopy.push(randomContact)
    
    this.setState({
      contacts: contactsCopy
    })
  }

  handleSortName = (e) => {

    let contactsCopy = [...this.state.contacts]

    contactsCopy.sort((a,b) => {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();

    console.log (nameA)
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1
    } return comparison})


    this.setState({
      contacts: contactsCopy
    })

  }
  
  handleSortPop = (e) => {

    let contactsCopy = [...this.state.contacts]

    contactsCopy.sort((a,b) => b.popularity - a.popularity)


    this.setState({
      contacts: contactsCopy
    })

  }

  handleDelete = (e) => {

    let contactsCopy = [...this.state.contacts]

    console.log(e)
    contactsCopy.splice(e, 1)

    this.setState({
      contacts: contactsCopy
    })

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
<h1>IronContacts</h1>

<button onClick={this.handleRandom}>Add Random Contact</button>
<button onClick={this.handleSortName}>Sort by Name</button>
<button onClick={this.handleSortPop}>Sort by Popularity</button>

<table style={{width: "500px"}}>
<tr>
  <th>Picture</th>
  <th>Name</th>
  <th>Populatiry</th>
  <th>Action</th>
</tr>
{
  this.state.contacts.map((contact, idx) => {
return <tr>
  <td><img src={contact.pictureUrl} alt={contact.name} width="15%" /> </td>
  <td>{contact.name}</td>
  <td>{contact.popularity}</td>
  <td><button onClick={() => this.handleDelete(idx)}>Delete</button>
</td>
</tr>
  })
}

</table>

      </div>
    );
  }
}

export default App;
