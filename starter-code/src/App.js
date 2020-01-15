import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Celebrity from "./components/Celebrity";

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      visibleCelebrity: contacts.slice(0,5)
    }
  }

  
  pickRandomCelebrityFromArray = (contacts)=> {
    return contacts[Math.floor(Math.random()*contacts.length)];
  }

  pickNewCelebrity = ()=> {
    var celeb = this.state.visibleCelebrity;
    celeb.push(this.pickRandomCelebrityFromArray(contacts))

    this.setState({
      newCelebrity: celeb
    })
  }

  orderByName = () => {
    var celeb = this.state.visibleCelebrity;
    celeb.sort()

    this.setState({
      nameOrder: celeb
    })
    celeb.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  orderByPop = () => {
    var celeb = this.state.visibleCelebrity;
    this.setState({
      popOrder: celeb
    })
    celeb.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
  }

  render() {
    return (
      <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.pickNewCelebrity}>Add Random Contact</button>
      <button onClick={this.orderByName}>Sort by name</button>
      <button onClick={this.orderByPop}>Sort by popularity</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        
        {this.state.visibleCelebrity.map((contacts)=> 
          <Celebrity
              
        picture={contacts.pictureUrl}
        name={contacts.name}
        popularity={contacts.popularity}
          />
        )}
      
      </table>
      </div>
    );
  }
}


