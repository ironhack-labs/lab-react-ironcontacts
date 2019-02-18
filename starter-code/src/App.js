import React, { Component } from 'react';
import './App.css';
import Contacts from "./contacts.json"
import Card from "./Card"

class App extends Component {


  state = {
    contacts: [{
      name: "Idris Elba",
      pictureUrl: "https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg",
      popularity: 11.622713
    },
    {
      name: "Jessica Chastain",
      pictureUrl: "https://image.tmdb.org/t/p/w500/nkFrkn5NZVGWb4b2X0yIcXezhyt.jpg",
      popularity: 8.324357
    },
    {
      name: "Johnny Depp",
      pictureUrl: "https://image.tmdb.org/t/p/w500/kbWValANhZI8rbWZXximXuMN4UN.jpg",
      popularity: 15.656534
    },
    {
      name: "Emilia Clarke",
      pictureUrl: "https://image.tmdb.org/t/p/w500/j7d083zIMhwnKro3tQqDz2Fq1UD.jpg",
      popularity: 16.211837
    },
    {
      name: "Leonardo DiCaprio",
      pictureUrl: "https://image.tmdb.org/t/p/w500/A85WIRIKVsD2DeUSc8wQ4fOKc4e.jpg",
      popularity: 11.245333
    }]

  }

  selectRandom = () => {

    var randomContact = Contacts[Math.floor(Math.random() * Contacts.length)]
    var contactCopy = [...this.state.contacts]
    contactCopy.push(randomContact)

    this.setState({
      contacts: contactCopy
    })

  }
  

  sortby = (sortby) => {

  var copyContact = [...this.state.contacts]
  
  var sorted = copyContact.sort((a,b) => {
    a = a[sortby]
    b = b[sortby]
    if (a < b) {return -1} else {return 1}
  })

  if (sortby === "popularity") {sorted.reverse()}

  this.setState({
    contacts: sorted
  })

  }


deleteHandler = (index) => {

var copyContact = [...this.state.contacts]
copyContact.splice(index,1)

this.setState({
  contacts: copyContact
})


  }


  render() {
    return (
      <div>

      <h1>IronConcats</h1>

      <div>
      <label>sort by:</label>
      <button onClick={() => this.sortby("name")}>name</button><button onClick={() => this.sortby("popularity")}>popularity</button>
      </div>

      <ul>
       <li key="heading">Picture Name Popularity</li>
       <Card contacts={this.state.contacts} delete={() => this.deleteHandler}/> 
      </ul>

      <button onClick={this.selectRandom}>Add Random Contact</button>

    </div>
    );
  }
}

export default App;
