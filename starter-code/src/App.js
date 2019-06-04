import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Card from './components/stateless/ContactCard'




let arrContacts= contacts.slice(0,5)

class App extends Component {

  constructor(){

    super()
    this.state= {fiveContacts : arrContacts}
    
  }

      getRandomContact=()=>{
        let newContact = [...contacts]
        let randomContact= newContact[Math.floor(Math.random()*(newContact.length))]
        const _fiveContacts=[...this.state.fiveContacts]
        _fiveContacts.push(randomContact)
        this.setState({
          fiveContacts: _fiveContacts
        })
      }

      sortByName=()=>{
        const _fiveContacts=[...this.state.fiveContacts]
        _fiveContacts.sort( (a, b)=> {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.setState({
          fiveContacts: _fiveContacts
        })
      }

      sortByPopularity=()=>{
        const _fiveContacts=[...this.state.fiveContacts]
        _fiveContacts.sort( (a, b)=> {
          if (b.popularity > a.popularity) {
            return 1;
          }
          if (b.popularity < a.popularity) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.setState({
          fiveContacts: _fiveContacts
        })
      }

      deleteContact = idx => {
        const _fiveContacts=[...this.state.fiveContacts]        
        _fiveContacts.splice(idx, 1)
        this.setState({
            fiveContacts: _fiveContacts
        })
    }


  render() {
    return (
     <div>
       <h1>Iron contacts</h1>
       <button onClick={() => this.getRandomContact()}>Add Random Contact</button>
       <button onClick={() => this.sortByName()}>Sort by name</button>
       <button onClick={() => this.sortByPopularity()}>Sort by popularity</button>
       <table>
         <tr>
           <th>Picture</th>
           <th>Name</th>
           <th>Popularity</th>
         </tr>
          {this.state.fiveContacts.map((artist, idx)=> <Card key={idx} {...artist} removeContactFromState={()=> this.deleteContact(idx)} />)}
       </table>
     </div>
    )
  }
}

export default App;
