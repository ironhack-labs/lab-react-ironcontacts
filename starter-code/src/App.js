import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/contact/Contact';
import Button from './components/button/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names : contacts.slice(0,5),
      allTheRest : contacts.slice(5)
    }
  }
  
  showContacts = () => {
    return(
      this.state.names.map((eachContact, i)=>{
        return(

          <Contact
           key={i}
           index={i}
           name = {eachContact.name} 
           popularity = {eachContact.popularity}
           theImage = {eachContact.pictureUrl} 
           delete = {()=>{this.delete(i)}}
           />

          )
      })
    )

  }

  addRandomContact = () => {
    let clone = [...this.state.names];
    let restClone = [...this.state.allTheRest]
    let randomNumber = Math.floor(Math.random()*contacts.length);
    let random = this.state.allTheRest[randomNumber]
    
    clone.unshift(random)
    restClone.splice(randomNumber, 1)
    this.setState({names: clone, allTheRest: restClone})
    

  }

  sortByName = () => {
    let clone = [...this.state.names]

    clone.sort((a,b)=> {
      if (a.name > b.name) {
        return 1;
    }
    if (b.name > a.name) {
        return -1;
    }
    return 0;
    })

    this.setState({names: clone})
  }
  
  sortByPopularity = () => {
  
    let clone = [...this.state.names]

    clone.sort((a,b)=> {
      if (a.popularity > b.popularity) {
        return -1;
    }
    if (b.popularity > a.popularity) {
        return 1;
    }
    return 0;
    })

    this.setState({names: clone})
  }

  delete = (index) =>{
  
    let clone = [...this.state.names];
    clone.splice(index, 1);

    this.setState({names: clone})
  }
  
  

  render() {
    return (
      <div className="container">

      <div className="App">
        <h2>IronContacts</h2>
        <div className="d-flex">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>
        <Button value="Add random contact" role={()=>{this.addRandomContact()}}/>
        <Button value="Sort By name" role={()=>{this.sortByName()}}/>
        <Button value="Sort By popularity" role={()=>{this.sortByPopularity()}}/>
        {this.showContacts()}
        
      </div>
      </div>
    );
  }
}

export default App;
