import React, { Component } from 'react'
import './App.css';
import { Contacts } from './components/Contacts';
import contacts from './contacts.json'

const contactsData = contacts.slice(5)

export class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        contacts: contacts.slice(0, 5)
    }

    this.addRandom = this.addRandom.bind(this)
    this.handleSort = this.handleSort.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  } 

  addRandom(){
    //All this shit pour pas qu'il y ait de doublon; y'a peut-être plus simple ...
    const randomNumber = random(0, contactsData.length - 1)
    const randomContact = contactsData[randomNumber]
    contactsData.splice(randomNumber, 1)
    const contactsCopy = [...this.state.contacts]
    contactsCopy.push(randomContact)

    this.setState({contacts: contactsCopy})
  }

  handleSort(cat){
    if(cat === "name"){
      return this.setState({
        contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
      })
    }
    if(cat === "popularity"){
      return this.setState({
        contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
      })
    }
  }

  handleDelete(id){
    this.setState({
      contacts: this.state.contacts.filter(c => c.id !== id)
    })
  }

  render(){
    return <div id='app'>
      <div className="btns">
        <button className='add-btn' onClick={this.addRandom}>Add Random</button> 
        <div className="sort-btns">
          <button className='sortName-btn' onClick={() => this.handleSort("name")}>Sort Alphabetically</button> 
          <button className='sortPopularity-btn' onClick={() => this.handleSort("popularity")}>Sort by Popularity</button> 
        </div>
      </div>
       
      <Contacts contacts={this.state.contacts} handleDelete={this.handleDelete}/>
    </div>
  }
}

export default App;

function random(min,max){
  return Math.round(Math.random() * (max - min)) + min
}