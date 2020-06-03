import React, { Component, useDebugValue } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsFromJSOM from './contacts.json';
import Contact from './components/Contact'

class App extends Component {
  state ={
    firstVisibleContacts: contactsFromJSOM.slice(0,5)
  }
  addRandomContact (pictureUrl,name,popularity,id){
    const addedArray = this.state.firstVisibleContacts
    addedArray.push({
      "name": name,
      "pictureUrl": pictureUrl,
      "popularity": popularity,
      "id": id
    })
    this.setState({
      firstVisibleContacts : addedArray
    }
    )
  }

  sortByName (){
    const sortedArray = this.state.firstVisibleContacts

    sortedArray.sort(function(a,b){return (a.name<b.name) ? -1 : 1 })
    console.log(sortedArray)

    this.setState({
      firstVisibleContacts:sortedArray
    })
  }
  sortByPopularity(){
    const sortedArray = this.state.firstVisibleContacts

    sortedArray.sort(function(a,b){return (a.popularity<b.popularity) ? 1 : -1 })
    console.log(sortedArray)

    this.setState({
      firstVisibleContacts:sortedArray
    })
  }

  deleteContact(id){
    const contactCopy = this.state.firstVisibleContacts
    const index = contactCopy.findIndex(item => item.id === id)
    contactCopy.splice(index,1)

    this.setState({
      firstVisibleContacts:contactCopy
    })
  }

  render (){
    return(
    <div className="App">
      <table>
        <th>
          Picture
        </th>
        <th>
          Name
        </th>
        <th>
          Popularity
        </th>
          {this.state.firstVisibleContacts.map(contact =>{
            return(
            <Contact key={contact.id}
              name={contact.name}
              popularity={contact.popularity}
              pictureUrl={contact.pictureUrl}
              delete = {()=>this.deleteContact(contact.id)}
              >
            </Contact>
          )})}
      </table>
      <button onClick={()=>this.addRandomContact(
        "https://upload.wikimedia.org/wikipedia/commons/f/fe/Margot_Robbie_%2828601016915%29_%28cropped%29.jpg",
        "Margot Robbie",
        16,
        "cebolas"
        )}>Add</button>
        <button onClick={()=>this.sortByName()}>Sort by Name</button>
        <button onClick={()=>this.sortByPopularity()}>Sort by Popularity</button>
    </div>
  )};
}

export default App;
