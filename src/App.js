import contacts from './contacts.json'
import React from 'react';


let onlyFive = contacts.filter((contact, index) => index < 5);
let otherContacts = contacts.filter((contact,index) => index >= 5);

class App extends React.Component {
  state ={
    firstFive: onlyFive,
    otherContacts: otherContacts
  }

  sortName(){
    let copyFive = [...this.state.firstFive];
    copyFive.sort((a,b) => a.name.localeCompare(b.name));
    this.setState({firstFive: copyFive })
  }

  addRandom(randomC){
    let copyOfOthers = [...this.state.firstFive];
    copyOfOthers.unshift(randomC);
    this.setState({ firstFive: copyOfOthers })
    
  }

  showContacts(){
    return this.state.firstFive.map((contact, index) => {

    return(
      <tr key={contact.id}>
        <td><img style={{width:'10vw'}} src={contact.pictureUrl} alt={contact.name}/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
        <button onClick={(er) => this.deleteContact(contact, index)}>Delete</button>
      </tr>
    )
    
  })
  }

  deleteContact(contact, index){
    let copyContacts = [...this.state.firstFive];
    copyContacts.splice(index, 1);
    this.setState({firstFive: copyContacts});
  }


  render(){
    return (
      <div className="App1">
        <button onClick={() => this.addRandom(this.state.otherContacts[Math.floor(Math.random() * this.state.otherContacts.length)])}>Add Random</button>
        <button onClick={() => this.sortName()}>Sort by Name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.showContacts()}
            
          </tbody>
        </table>
      </div>
    );

  }
}

export default App;
