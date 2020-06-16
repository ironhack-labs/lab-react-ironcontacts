import React, {Component} from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './Components/Contact'

class App extends Component {
  state = {
    allContacts: contacts.slice(0, 5)
  }
  addCelebrity = () => {

    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.allContacts))
    let randomCel = contacts[Math.floor(Math.random() * contacts.length)];
    cloneCelebrity.push(randomCel)
    this.setState({
      allContacts: cloneCelebrity 
    })
  }
  sortByName = () => {

    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.allContacts))
    let randomCel = contacts[Math.floor(Math.random() * contacts.length)];
    cloneCelebrity.push(randomCel)
    this.setState({
      allContacts: cloneCelebrity 
    })
  }
  sortByPopularity = () => {

    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.allContacts))
    let randomCel = contacts[Math.floor(Math.random() * contacts.length)];
    cloneCelebrity.push(randomCel)
    this.setState({
      allContacts: cloneCelebrity 
    })
  }
  render(){
    return (
      <div>
      <h1>IronContacts</h1>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      <button onClick={this.addCelebrity}>Add Random</button>
      {this.state.allContacts.map((celeb, index) => {
        return <Contact key={index} picture={celeb.pictureUrl} name={celeb.name} popularity={celeb.popularity}/> 
      })}
      </div>
    );
  }
}

export default App;
