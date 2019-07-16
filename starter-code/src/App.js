import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './Contact'

class App extends Component {
  constructor(){
    super()
    this.availableContacts = [...contacts]
    this.contactsIni = contacts.splice(0,5)
    this.state = {
      actors: this.contactsIni
    }

  }

  addRandom(){

 
    const otherContacts = this.availableContacts.filter( ( contact ) => !this.state.actors.includes( contact ) );
    this.state.actors.push( otherContacts[Math.floor(Math.random()*otherContacts.length)])
      this.setState({
          ...this.state.actors
      })
  }

  sortName(){
   this.state.actors.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      ...this.state.actors
  })

  }
  sortPopular(){
    this.state.actors.sort((a,b)=>b.popularity-a.popularity);
     this.setState({
       ...this.state.actors
   })
 
   }
   
       
    delete=sectionIndex =>{
      let allActors = [...this.state.actors]
      allActors.splice(sectionIndex, 1)
      this.setState({
        ...this.state,
        actors: allActors
      })
      
    }
   

  

  render() {
    
    return (
      <div>
        <div className="App">
        <h1>IronContacts</h1>
        <button onClick={()=>this.addRandom()}> Add random contact </button>
        <button onClick={()=>this.sortName()}> Sort by Name </button>
        <button onClick={()=>this.sortPopular()}> Sort by popularity </button>


        <table className="table">
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th> 
              <th>Popularity</th>
            </tr>
            {this.state.actors.map((contact,idx)=>
         <Contact picture={contact.pictureUrl} name={contact.name} popularity={contact.popularity} idx={idx} deletebtn={this.delete}></Contact>
      )}

            </tbody>
            </table>
            </div>
      </div>
    )
  }
  
}

export default App;
