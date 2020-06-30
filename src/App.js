import React, { Component } from 'react';
import contacts from './contacts.json';


class App extends Component {

  state = {

    showingContacts: [...contacts].splice(0,5), 
    restOfContacts: [...contacts].splice(5)  
  }

  showContacts = () => {
    let contactList = this.state.showingContacts.map((eachContact,i) => {
      return <tr key={eachContact.id}> <td> <img src={eachContact.pictureUrl} style={this.imageStyle}/></td><td>{eachContact.name}</td> <td>{eachContact.popularity.toFixed(2)}</td><td><button onClick={()=>{this.deleteContact(i)}}>Delete</button></td></tr>
    })    
    return contactList
  }

  addContact = () =>{
    let randomI = Math.floor(Math.random() * this.state.restOfContacts.length)
    let showingContactsCopy = [...this.state.showingContacts]
    let restOfContactsCopy=[...this.state.restOfContacts]

    showingContactsCopy.push(restOfContactsCopy[randomI])
    restOfContactsCopy.splice(randomI,1)

    this.setState({
      showingContacts: showingContactsCopy,
      restOfContacts: restOfContactsCopy
    })
  }

  sortByName = () =>{
    let showingContactsCopy = [...this.state.showingContacts]
    showingContactsCopy.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }

        // names must be equal
        return 0;
      });

   this.setState({showingContacts:showingContactsCopy})
  }

  sortByPopularity = () =>{
    let showingContactsCopy = [...this.state.showingContacts]
    showingContactsCopy.sort((a,b) => {return b.popularity-a.popularity})

   this.setState({showingContacts:showingContactsCopy})
  }

  deleteContact = (i) => {
    let showingContactsCopy = [...this.state.showingContacts]
    showingContactsCopy.splice(i,1)
    this.setState({
      showingContacts:showingContactsCopy
    })
    console.log(this.props.key)
  }

  render() {
    this.imageStyle = {
    width:75+'px',
    height:80+'px'
  }
    return (
      <div>
      <button onClick={this.addContact}>Add random contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      <table>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Action</th>
      </tr>
        {this.showContacts()}  
        </table>      
      </div>
    );
  }
}

export default App;