import React from 'react';
import './App.css';
import contacts from "./contacts.json";

let contactsCopy = contacts.slice(0,5)
class App extends React.Component {

  constructor(){
    super()

    this.state = {
      fiveContacts: contactsCopy
    }
  }


  addRamdom(){
    let newContacts = this.state.fiveContacts
    newContacts.push(contacts[Math.ceil(Math.random()*contacts.length)])

    this.setState({
      fiveContacts: newContacts
    })
  }

  sortByName = () => {
    contactsCopy.sort((a,b) => a.name.localeCompare(b.name) )
    this.setState({
      fiveContacts: contactsCopy
    })
  }
    sortByPopularity = () => {
      contactsCopy.sort((a,b) => b.popularity - a.popularity)
      this.setState({
        fiveContacts: contactsCopy
      })

  }

  

  render(){
  return (
    <div>
    <h1> IronContacts</h1>
    <button onClick={() => this.addRamdom()}> Add ramdom contacts</button>
    <button onClick={() => this.sortByName()}> Sort by id</button>
    <button onClick={() => this.sortByPopularity()}> Sort by popularity</button>
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Pupularity</th>
          </tr>
        </thead>

        <tbody>
        {this.state.fiveContacts.map(eachContact => {
          return(
          <tr>
            <th scope="row"></th>
            <td><img src={(eachContact.pictureUrl)}/></td>
            <td>{eachContact.name}</td>  
            <td>{eachContact.popularity.toFixed(2)}</td>
          </tr>
          )
            }
          )
        }
        </tbody>
    </table>
    
    </div>
  )
  }
}


export default App;
