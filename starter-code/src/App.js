import React, { Component } from 'react';
import contacts from './contacts.json'
import './App.css';
import { Card, Button } from 'antd';


class App extends Component {
  state= {
    contacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  addContact = () => {
 contacts.slice(0,4)

 function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
 shuffle(contacts)
    
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: [...prevState.contacts, contacts[prevState.contacts.length]]
      };
    });
  }

  sortContactsAlphabetically = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort((a, b) => {
          if (a.name > b.name ) return 1;
          else if (a.name < b.name) return -1;
          else return 0;
        })
      };
    });
  };

  sortContactsNumerically = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.sort((a, b) => {
          if (a.popularity > b.popularity ) return 1;
          else if (a.popularity < b.popularity) return -1;
          else return 0;
        })
      };
    });
  };

  deleteContact = (name) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        contacts: prevState.contacts.filter((e) => e.name !== name)
      };
    });
  };

  render() {
    let {contacts} = this.state
    
    return (
      <div className="App">
      <header>
        <h1>Contacts</h1>
        <div className='buttons-div'>
        <Button onClick={this.addContact}>Randomea este pedo</Button>
        <Button onClick={this.sortContactsAlphabetically}>Sort by name</Button>
        <Button onClick={this.sortContactsNumerically}>Sort by popularity</Button>
        </div>
        </header>

        <div style={{ background: '#ECECEC', padding: '30px', display:'flex', justifyContent:'center'}}>
    <Card title="Contacts" style={{ width: 400}}>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map ((contact) => {
            return(
            <tr key={contact.name}>
            <td><img style={{height: '100px', width:'100px'}} src={contact.pictureUrl} alt=""/></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td><Button type='danger'  onClick={() => this.deleteContact(contact.name)}>Delete</Button></td>
          </tr>
            )
          })}
          </tbody>
        </table>
    </Card>
  </div>
        
      
      </div>
    );
  }
}

export default App;
