import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './table/table'
import Button from './Button/Button'

class App extends Component {
  constructor(){
    super()
    this.activeContacts = contacts.splice(0,5)
    this.remainContacts = contacts 
  }
  state={
    active:this.activeContacts,
    remaning:this.remainContacts
  }
  randomContact=()=>{
    const positionNewELement = Math.round(Math.random()*this.remainContacts.length)
    this.activeContacts.push(this.remainContacts[positionNewELement])
    this.remainContacts.splice(positionNewELement,1)
    this.setState({
      active:this.activeContacts,
      remaning:this.remainContacts
    })
  }

  sortByName=()=>{
    this.activeContacts.sort((a,b)=>{return a.name.localeCompare(b.name)})
    this.setState({
      active:this.activeContacts,
      remaning:this.remainContacts
    })
  }

  sortByPopularity=()=>{
    this.activeContacts.sort((a,b)=>{return -a.popularity+b.popularity})
    this.setState({
      active:this.activeContacts,
      remaning:this.remainContacts
    })
  }
  deleteContact=(idx)=>{
    this.remainContacts.push(this.activeContacts[idx])
    this.activeContacts.splice(idx,1)
    this.setState({
      active:this.activeContacts,
      remaning:this.remainContacts
    })
  }

  render(){
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <Button method={this.randomContact}>Add Randon Contact</Button>
        <Button method={this.sortByName}>Sort by name</Button>
        <Button method={this.sortByPopularity}>Sort by popularity</Button>
        <Table contacts ={this.activeContacts} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
