import React, { Component } from 'react';
import Header from './components/Header.js'
import './App.css';
import contacts from './contacts.json'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts,
      newArr: contacts.splice(0, 5)
    } 
  }

  AddRandomOne() {
    const newContactList = this.state.newArr;
    newContactList.unshift(contacts[Math.floor(Math.random() * contacts.length)])
    
    this.setState({
      newArr: newContactList,
    });

  }

  sortName() {
    const newContactList = this.state.newArr;

    newContactList.sort((a, b) => (a.name.localeCompare(b.name))
    )

    this.setState({ newArr : newContactList });
  }

  popularity() {
    const newContactList = this.state.newArr;

    // sort contacts by popularity using one-line if statement :
    // (if b bigger than(>) a then(?) put it on top position otherwise(:) put it after)
    newContactList.sort((a, b) => (b.popularity > a.popularity ? 1 : -1))

    this.setState({ newArr: newContactList });
  }

  delete(oneContact) {
    const newContactList = this.state.newArr;
    newContactList.splice(oneContact, 1)

    this.setState({ newArr: newContactList });

  }

  render() {
    const newArr = this.state.newArr;


    return (
      <div className="App">
        <Header />
        
        <h3>IronContacs</h3>
        <button onClick={ () => this.AddRandomOne() }>Add Random Contact</button>
        <button onClick={() => this.sortName()}>Sorted Contacts</button>
        <button onClick={() => this.popularity()}>Popularity Contact</button>
              <table>
                <thead>
                  <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                  </tr>
                </thead>
          
          {newArr.map((oneContact, index) => {
              return (
                    <tbody>
                      <tr>
                    <td key={index}><img src={oneContact.pictureUrl} alt="celebs portrait"/></td>
                    <td key={index}>{ oneContact.name }</td>
                    <td key={index}>{oneContact.popularity}</td>
                    <td><button onClick={() => this.delete(oneContact)}>Delete</button></td>
                  </tr>
                  
                    </tbody>
                );
              })}
        </table>

      </div>
    );
  }
}

export default App;
