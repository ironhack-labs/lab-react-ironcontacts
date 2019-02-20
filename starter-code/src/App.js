import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Mytable from './components/tables/table'
import FunctionButton from './components/FunctionButton/FunctionButton';



class App extends Component {
    state = {
        list: contacts.slice(0, 5)
    }
    addRandomContac = () => {
      let newState = {
        ...this.state
      }
      newState.list.push(contacts[Math.floor(Math.random()* contacts.length)])
      this.setState(newState)

    }
    sortByName = () => {
      let newState = {
        ...this.state
      }
      newState.list.sort((a, b) => {
        if (a.name < b.name) {return -1;}
        if (a.name < b.name) {return 1;}
        return 0

      })
      this.setState(newState)


    }
    sortBypopularity = () => {
      let newState = {
        ...this.state
      }
      newState.list.sort((a, b) => b.popularity - a.popularity)

      this.setState(newState)
    }
    deleteContact = (name) => {
      let newState = {
        ...this.state
      }
      newState.list = newState.list.filter(e => e.name != name)

      this.setState(newState)
    }

  render() {
    return (
      
      <div className="App">
          <div className="controller">
          <FunctionButton functionProp={this.addRandomContac}>Add Random contacts</FunctionButton>
          <FunctionButton functionProp={this.sortByName}>sort by name</FunctionButton>
          <FunctionButton functionProp={this.sortBypopularity}>sort by popularity</FunctionButton>


          </div>
          <Mytable deleteProp={this.deleteContact} contactsProp = {this.state.list}/>
        
        

      </div>
    );
  }
}

export default App;
