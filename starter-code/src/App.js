import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts'
import Cardlist from './components/Cardlist'

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  }
  //funcion va aqui 
  addRandomContact = () =>{
    const indexRandom = Math.floor(Math.random() * contacts.length)
    const extractRandom = contacts[indexRandom]
    // console.log(extractRandom)
    this.setState({contacts: [...this.state.contacts, extractRandom]})
  }
  //funcion sort name
  sortName = () => {
    this.setState({ contacts: this.state.contacts.sort((a,b) => a.name.localeCompare(b.name))})
  }
  //funcion sort popularity
  // sortPopularity =()=>{
  //   this.setState({contacts: [this.state.contacts.sort((a,b) => a.popularity.localeCompare(a.popularity-b.popularity))]})
  // }

  sortPopularity =()=>{
    this.setState({contacts: this.state.contacts.sort((a,b) =>b.popularity - a.popularity)})
  }
  deleteContact = (id) => {
    const contactCopia = [...this.state.contacts]
    contactCopia.splice(id,1)
    this.setState({contacts: contactCopia})
  }
  render() {
    return (
  
      <div className='fondo'>
        <h2>IronContacts</h2>
        <div className="caja-btn">
        <button className="btn-card" onClick={this.addRandomContact}>Add random contact</button>
        <button className="btn-card" onClick={this.sortName}>Sort by name</button>
        <button className="btn-card" onClick={this.sortPopularity}>Sort by popularity</button>
        </div>
        <Cardlist contacts={this.state.contacts} deleteContact={this.deleteContact} />
      </div>
  
    );
  }
}

export default App;
