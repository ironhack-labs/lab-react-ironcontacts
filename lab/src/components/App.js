import React, { Component } from 'react';
import './App.css';
import contacts from '../contacts.json'


class App extends Component {

  constructor() {
    super()

    this.state = {
      fiveContacts: contacts.slice(0, 5)
    }
  }

  // >>>>>> ITERATION 1 <<<<<<
  displayContacts = () => {

    return this.state.fiveContacts.map((elm, index) => {

      return (  
        <tr key={index}>
          <td ><img src={elm.pictureUrl} alt={elm.name} /></td>
          <td>{elm.name}</td>
          <td>{elm.popularity.toFixed(2)}</td> 
          <td><button className="btn btn-dark" onClick={() => this.removeContact(index)}>Delete</button></td>
        </tr>   
      )                         
    }) 
  }

  // >>>>>> ITERATION 2 <<<<<<
  randomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length) 
    return contacts[randomIndex] 
  }

  addRandomContact = () => {

    const fiveContactsCopy = [...this.state.fiveContacts]    
    fiveContactsCopy.push(this.randomContact())

    this.setState({
      fiveContacts: fiveContactsCopy      
    })
  }

  // >>>>>> ITERATION 3 <<<<<<
  sortByName = () => {
    const fiveContactsCopy = [...this.state.fiveContacts]
    fiveContactsCopy.sort((a, b) => {
      return a.name < b.name ? -1 : 1
    })

    this.setState({
      fiveContacts: fiveContactsCopy
    })
  }

   sortByPopularity = () => {
    const fiveContactsCopy = [...this.state.fiveContacts]
    fiveContactsCopy.sort((a, b) => {
      return b.popularity - a.popularity 
    })

    this.setState({
      fiveContacts: fiveContactsCopy
    })
   }
  
  // >>>>>> ITERATION 4 <<<<<<
  removeContact = contactIndex => {
    const fiveContactsCopy = [...this.state.fiveContacts]

    fiveContactsCopy.splice(contactIndex, 1)

    this.setState({
      fiveContacts: fiveContactsCopy

    })
    
  }

  render() {

    return (

      <>    
        <table className="table table-hover table-dark">
                        
          <thead>
            <tr>           
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">Action</th>
            </tr>
            <tr>           
              <th scope="col"><button className="btn btn-dark btn-sm" onClick={this.addRandomContact}>Add Random Contact</button></th>
              <th scope="col"><button className="btn btn-dark btn-sm" onClick={this.sortByName}>Sort by Name</button></th>
              <th scope="col"><button className="btn btn-dark btn-sm" onClick={this.sortByPopularity}>Sort by Popularity</button></th>             
            </tr>
          </thead>

          <tbody>
            {this.displayContacts()}
          </tbody>      
        
        </table>
      </>

    

    )
  }
}

export default App;
