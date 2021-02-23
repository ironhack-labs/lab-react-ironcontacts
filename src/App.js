import contacts from './contacts.json'
import React from 'react';

let onlyFive = contacts.filter((contact, index) => index < 5);
let otherContacts = contacts.filter((contact,index) => index >= 5);

class App extends React.Component {
  state ={
    onlyFive,
    otherContacts
  }

  addRandom(randomC){
    let copyOfOthers = [...onlyFive];
    copyOfOthers.unshift(randomC);
    this.setState({ onlyFive: copyOfOthers })
    
  }

  showContacts(){
    return this.state.onlyFive.map((contact, index) => {

    return(
      <tr key={contact.id}>
        <td><img style={{width:'10vw'}} src={contact.pictureUrl} alt={contact.name}/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity.toFixed(2)}</td>
      </tr>
    )
    
  })
  }


  render(){
    return (
      <div className="App">
        <button onClick={() => this.addRandom(this.state.otherContacts[Math.floor(Math.random() * this.state.otherContacts.length)])}>Add Random</button>
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
