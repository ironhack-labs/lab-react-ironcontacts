import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import React from 'react';

class App extends React.Component{
  state={
    contacts: contacts.splice(0,5)
  }

addRandomCelebrity = ()=>{
  let indexRandom = Math.floor(Math.random() * (contacts.length - 0)) + 0
  let newCelebrity = contacts[indexRandom]
  this.setState ((previousState)=>{
    return {
      contacts:previousState.contacts.concat(newCelebrity)
    }
  })
}

sortCelebrities = () =>{
  const {contacts} = this.state
  this.setState ((previousState)=>{
    return {
      contacts: previousState.contacts.sort((a, b)=>{
        if(a.name > b.name){
          return 1
        } else if (a.name < b.name){
          return -1
        } else {
          return 0
        }
      })
    }
  })
}


deleteCelebrity = (id) =>{
  this.setState((previousState)=>{
      return {
          contacts: previousState.contacts.filter((contact)=>{
              return contact.id !== id
          })
      }
  })
}

sortByPopularity = () =>{
  const {contacts} = this.state
  this.setState ((previousState)=>{
    return {
      contacts: previousState.contacts.sort((a, b)=>{
        if(a.popularity > b.popularity){
          return -1
        } else if (a.popularity < b.popularity){
          return 1
        } else {
          return 0
        }
      })
    }
  })
}



  render(){
    const {contacts} = this.state
    return (
      <div className="App">
      <button onClick ={this.addRandomCelebrity}>Add Random</button>
      <button onClick = {this.sortCelebrities}>Sort by </button>
      <button onClick = {this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <tr className="aligning">
        <th className="test">Picture</th>
        <th className="test">Name</th>
        <th className="test">Popularity</th>
        <th className="test">Action</th>
      </tr>
      {contacts.map((contact, index)=>{
                    return (
                      <tr className="aligning" key={contact.id}>
                      <td key={index}><img width="70px" src={contact.pictureUrl} alt=""/></td>
                      <td key={index}>{contact.name}</td>
                      <td key={index}>{contact.popularity.toFixed(2)}</td>
                      <button onClick={() => this.deleteCelebrity(contact.id)}>Delete</button>
                      </tr>
                    ) 
                })}
    </table>
      </div>
    );
  }

}

export default App;
