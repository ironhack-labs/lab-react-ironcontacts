import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from "./Contact"

// for tthe random: take from contacts.slice(6) one random sample;

class App extends React.Component {
  state = {
    fiveContacts: contacts.slice(0,5)
  }
  sortPopularity = () => { 
    let sortedPopularity = this.state.fiveContacts.sort((a,b) => (a.popularity > b.popularity) ? 1 : -1 );
    this.setState({fiveContacts: sortedPopularity})
  }
  // list.sort((a, b) => (a.property > b.property) ? 1 : -1) 
  sortName = () => {
    const sortedByName = this.state.fiveContacts.sort((a,b) => (a.name > b.name) ? 1 : -1 )
    this.setState({fiveContacts: sortedByName})
  }

  
  getRandomFromRange = () => {
    let remainingContacts = contacts.slice(this.state.fiveContacts.length + 1);
    let randomRange = remainingContacts.length;
    return remainingContacts[Math.floor(Math.random()*randomRange)]
  }

  addRandom = () => {
    let randomContact = this.getRandomFromRange();
    let updatedArray = [...this.state.fiveContacts];
    updatedArray.push(randomContact);
    this.setState({fiveContacts: updatedArray})
    //return this.getRandomFromRange(this.remainingContacts);
    // not removing the person from array1.. 'let newContact = ' was at beginning of previous line
  }

  deleteContact = (id) => {
    let updatedContacts = this.state.fiveContacts.filter( (contact) => {
      if (contact._id !== id) {
        console.log('from deleteContact: ', contact)
        return contact;
      }
      else {
        console.log("not deleting???", contact)
        //
      }
    })
    // I DELETE EVERYTHING, ALWAYS
    this.setState({ fiveContacts: updatedContacts})
  }

  render() {

    //console.log('addRandom()', this.addRandom())
    return (
      <div className="App">
        <button id="random" onClick={this.addRandom}>Add random contact</button>
        <button id="sortName" onClick={this.sortName} >Sort by name</button>
        <button id="sortPopularity" onClick={this.sortPopularity} >Sort by popularity</button>
        <table>
          <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Popularity</th>
          </tr>
          {this.state.fiveContacts.map((contact, id) => {
            // console.log(contact)
            return <Contact 
                      key={contact._id} 
                      name={contact.name} 
                      picture={contact.pictureUrl} 
                      popularity={contact.popularity} 
                      deleteThis={this.deleteContact} />
                      // (might have been a good idea to spread these ^) DELETE EVERYTHING!!
          })}
        </table>


        {/* /* <table>
          <h1> {fiveContacts[0].name} </h1>
        </table> */ }
  
        {/* //Display that array of 5 contacts in a <table> and display the picture, name, and popularity  */}
      </div>
    )
  }

}

export default App;
