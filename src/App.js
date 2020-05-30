import React, { Component } from 'react';
import './App.css';
import _ from 'lodash'
import contacts from './contacts.json';
import DisplayCelebrities from './DisplayCelebrities';
import AddRandomContact from './AddRandomContact';
import SortByName from './SortByName';

class App extends Component {

  state = {
   celebrities: contacts.slice(0,5)
  }
  

AddRandomContact = () => {
  console.log('clicked')
 let arrayCopy = [...this.state.celebrities]
 arrayCopy.push(_.sample(contacts))

this.setState({
  celebrities : arrayCopy
  })
}


SortByName = () => {
  console.log('clicked')

  let sortedCopy = [...this.state.celebrities]

  let sortedList = _.sortBy(sortedCopy, 'name')
  console.log(sortedList)
  
  this.setState({
    celebrities: sortedList
  })

}



render() {
  return(
    <div>
    {this.state.celebrities.map((m) => <DisplayCelebrities id={m.id} key={m.id} name={m.name} popularity={m.popularity} pictureUrl={m.pictureUrl}></DisplayCelebrities>)}
    <AddRandomContact AddRandomContact={this.AddRandomContact}></AddRandomContact>
    <SortByName SortByName={this.SortByName}></SortByName>
    </div>
  )}  

}

export default App;
