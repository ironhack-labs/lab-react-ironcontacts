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
    cloneCelebrity.sort((a, b) => {
        if (a.name < b.name){
        return -1;
        }
        else if (a.name > b.name){
          return 1;
        }
        return 0;
    })
    this.setState({
      allContacts: cloneCelebrity
    })
  }
  sortByPopularity = () => {

    let cloneCelebrity = JSON.parse(JSON.stringify(this.state.allContacts))
    cloneCelebrity.sort((a, b) => {
        if (a.popularity < b.popularity){
        return 1;
        }
        else if (a.popularity > b.popularity){
          return -1;
        }
        return 0;
    })
    this.setState({
      allContacts: cloneCelebrity
    })
  }
  deleteCelebrity = (name) => {
    console.log(name)
    let clonedArray = JSON.parse(JSON.stringify(this.state.allContacts))

    let index = clonedArray.filter((celeb) => {
      return celeb.name !==name;
    })

    clonedArray.splice(index, 1);
    this.setState({
      allContacts: clonedArray
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
        return <Contact key={index} picture={celeb.pictureUrl} name={celeb.name} popularity={celeb.popularity} delete={this.deleteCelebrity}/> 
      })}
      </div>
    );
  }
}

export default App;
