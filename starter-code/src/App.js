import React, { Component } from 'react';
import './App.css';
import ContactRow from './components/ContactRow'
import contacts from './contacts.json'

class App extends Component {

  constructor(){
    super()
    let defaultContacts = []
    for (let i = 0; i < 5; i++) {
      defaultContacts.push({...contacts[i]})
    }
    this.state = {defaultContacts}
  }

  randomContact = ()=>{
    let randomInd = Math.floor(Math.random() * Object.keys(contacts).length + 4)
    const contactArray = this.state.defaultContacts
    contactArray.push({...contacts[randomInd]})
    this.setState(
      {defaultContacts:contactArray}
    )
  }

  sortByName = ()=>{
    let sortByName = this.state.defaultContacts.sort((a,b)=>{
      if(a.name > b.name) return 1 
    })
    this.setState({defaultContacts:sortByName})
  }

  sortByPopularity = ()=>{
    let sortPopularity = this.state.defaultContacts.sort((a,b)=>b.popularity - a.popularity)
    this.setState({defaultContacts:sortPopularity})
  }

  deleteRow(index){
    const contactArray=this.state.defaultContacts
    contactArray.splice(index,1)
    this.setState({defaultContacts:contactArray})
  }

 

  render() {
    return (
      <div className='App'>
        <h1 className='App-title'>IronContacts</h1>

        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popular</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.defaultContacts.map((e,i)=> <ContactRow key={e.name} {...e} delete={()=>this.deleteRow(i)} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
