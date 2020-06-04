import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ShowFirstFive from './components/ShowFirstFive'


let firstFive = [...contacts].slice(0,5)


class App extends Component {
  constructor () {
    super();
    this.state = {
        firstVisibleContacts: firstFive
        }
}

addRandomContact = () => {
  
  const contactsCopy = this.state.firstVisibleContacts;
  const randIndex = Math.floor(Math.random()*contacts.length)
  contactsCopy.push(contacts[randIndex]);

  this.setState({
    firstVisibleContacts: contactsCopy
  })
};

sortByName = () => {

  const contactsCopy = this.state.firstVisibleContacts;
  console.log(contacts)
  contactsCopy.sort((a,b) => { // https://flaviocopes.com/how-to-sort-array-of-objects-by-property-javascript/
      if (a.name > b.name){
        return 1
      } else {
        return -1
      }
    }
  )
  this.setState({
    firstVisibleContacts: contactsCopy
  })
};

sortByPopularity = () => {
  const contactsCopy = this.state.firstVisibleContacts;
  contactsCopy.sort((a,b) => 
    b.popularity-a.popularity 
  )
  this.setState({
    firstVisibleContacts: contactsCopy
  })
}

deleteContactHandler = (id) => {
  const contactsCopy = this.state.firstVisibleContacts;
  const deleteIndex = contactsCopy.findIndex(item => item.id === id);
  contactsCopy.splice(deleteIndex, 1);
  this.setState({
    firstVisibleContacts: contactsCopy
  })
};

    
    render() {
      console.log(firstFive) // WHY IS NOT CONSOLE LOGGING???
      return (
        <div className="App">

          <button onClick={this.addRandomContact}>Add Random Contact</button> 
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>

          <h2>IronContacts</h2>
          <table>
                    <thead>
                          <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                        </tr>
                    </thead>

             {this.state.firstVisibleContacts.map(item => {
               return <ShowFirstFive key={item.id}
                  picture = {item.pictureUrl}
                  name = {item.name}
                  popularity = {item.popularity}
                  clickToDelete={() => this.deleteContactHandler(item.id)}  /> 
                    } )
                }
          </table>    
        </div>
      );
    }
  }

export default App;
