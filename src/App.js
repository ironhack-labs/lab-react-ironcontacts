import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';

class App extends Component {

  state = {
    celebrity: contacts,
    chosenCelebs: contacts.slice(0, 5)
  }

  //adding random celeb to contact list:
  addCelebrity = () => {
    const randomCeleb = this.state.celebrity[Math.floor(Math.random() * this.state.celebrity.length)]
    this.setState({
      chosenCelebs: this.state.chosenCelebs.concat([randomCeleb])
    })
  }

  // sorting list by name (ascending):
  sortByName = () => {
    this.setState({
      // chosenCelebs: this.state.chosenCelebs.sort((a, b) => a.name.localeCompare(b.name))
      chosenCelebs: this.state.chosenCelebs.sort((a, b) => {
        if(a.name < b.name){
        return -1 
      } else {
        return 1
      }
      })

    })
  }

  // sorting list by popularity (ascending):
  sortByPopularity = () => {
    this.setState({
      chosenCelebs: this.state.chosenCelebs.sort((a, b) => {
        return a.popularity - b.popularity
      })
    })
  }

  deleteCeleb = (name) => {
    let clonedCelebs = JSON.parse(JSON.stringify(this.state.chosenCelebs))
    let index = clonedCelebs.findIndex((celeb) => {
      return celeb.name === name;
    })
    clonedCelebs.splice(index, 1)

    this.setState({
      chosenCelebs: clonedCelebs
    })
  }

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addCelebrity}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </table>
        {this.state.chosenCelebs.map((celebrity, index) => {
          return <Table
            key={index}
            pictureUrl={celebrity.pictureUrl}
            name={celebrity.name}
            popularity={celebrity.popularity}
            delete={this.deleteCeleb}
          />
        })}
      </div>
    )
  }
}

export default App;
