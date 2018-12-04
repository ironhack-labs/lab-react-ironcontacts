import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table'
import Button from './components/Button/Button'
import contacts from './contacts.json' 

class App extends Component {
  constructor(){
    super()
    this.state ={
      contactos: contacts.splice(0,5)
    }
  }

  addRandomContact =() =>{
    let contactosCopia =[...this.state.contactos]
    contactosCopia.push(contacts.splice(Math.random()*contacts.length,1)[0])
    this.setState({
      ...this.state,
      contactos: contactosCopia
    })
}

  sortByName =()=>{
    let contactosCopia =[...this.state.contactos]
    contactosCopia.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      ...this.state,
      contactos: contactosCopia
    })

  }

  sortByPopularity =()=>{
    let contactosCopia =[...this.state.contactos]
    contactosCopia.sort((a, b) => {

      return (a.popularity > b.popularity ? 1: (a.popularity===b.popularity? 0:-1));


    })
    this.setState({
      ...this.state,
      contactos: contactosCopia
    })

  }

  removeContact =(e)=>{

    let contactosCopia =[...this.state.contactos]

    contactosCopia.splice(e.target.id,1)

    this.setState({
      ...this.state,
      contactos: contactosCopia
    })
  }


  render() {
    
    let contactos=this.state.contactos;
    contactos.map((contacto, index)=>{ 
      contacto.deleteButton=<Button callbackFunction={this.removeContact} id={index}> Delete </Button>
      return  contacto
    })

    return (
      <div className="App">
      <h1>IronContacts</h1>
      <Button callbackFunction={this.addRandomContact}> Add Random Contact </Button>
      <Button callbackFunction={this.sortByName}> Sort By Name </Button>
      <Button callbackFunction={this.sortByPopularity}> Sort By Popularity </Button>
      
        <Table contactos={this.state.contactos}/>
      </div>
    );
    
  }
}

export default App;
