import React, { Component, useDebugValue } from 'react';
import logo from './logo.svg';
import './App.css';
import contactsFromJSOM from './contacts.json';


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
            return (
            <tr>
              <td><img src={contact.pictureUrl} height="200px"></img></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr> )
          })}
      </table>
      <button onClick={()=>this.addRandomContact(
        "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
        "Margot Robbie",
        11,
        "cebolas"
        )}>Add</button>
    </div>
  )};
}

export default App;
