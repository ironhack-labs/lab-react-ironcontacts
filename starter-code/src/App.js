import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import cont from './contacts.json';

let contacts5 = [];
for (let i = 0; i < 5; i++) {
    contacts5.push(cont[i]);
}


class App extends Component {
  
  state = {
    contacts: contacts5
  }

  clickHandler = () => {
  
    for (let i = 0; i < cont.length; i++) {
      let random = cont[Math.round(Math.random() * (cont.length - 1))];
      if (!contacts5.includes(random)) {
        contacts5.push(random);
        break;
      } 
    }
    this.setState({
      contacts: contacts5
      
  })
  }

    sortByName = () => {
      contacts5.sort((a, b) => {
        return a.name.localeCompare(b.name);
     });
     this.setState({
      contacts: contacts5
      
  })
}
    
sortByPopularity = () => {
  contacts5.sort((a, b) => {
    return b.popularity - a.popularity;
 });
 this.setState({
  contacts: contacts5
  
})
}  

delete = (id) => {
  contacts5 = contacts5.filter(contact => contact.id !== id)
  this.setState({
    contacts: contacts5  
  })
}
    
      

  render() {
    const {contacts} = this.state;
    return (
      <div>
      
      <h1>Iron Contacts</h1>
            
                        
        
            <table>
              <tr>
                <td><button onClick={this.clickHandler}>Add random contact</button></td>
                <td><button onClick={this.sortByName}>Sort by name</button></td>
                <td><button onClick={this.sortByPopularity}>Sort by popularity</button></td>
              </tr>
              <tr>
                <td><b>Picture</b></td>
                <td><b>Name</b></td>
                <td><b>Popularity</b></td>
                <td><b>Action</b></td>
              </tr>
              </table>
  
              {
              contacts.map(contact => (
            
            
            <table>
                 <tr>
                    <td>
                        <img height="100" width="auto" src={contact.pictureUrl} />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td><button onClick={() => this.delete(contact.id)}>Delete</button></td>
                </tr>
            </table>
              ))}
            
      </div>
    )
  }
}

export default App;
