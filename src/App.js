import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Celebrity from './components/Celebrity.js'
import _ from 'lodash'



class App extends Component {

  state = {
    celebrities: [...contacts.slice(0,5)],
  }


  addRandomCelebrity = () => {

    let randomNumber = Math.floor(Math.random() * (contacts.length - 5)) + 5
    this.setState({
      celebrities : this.state.celebrities.concat(contacts[randomNumber])
    })

  }

  deleteHandler = (id) => {
    this.setState({
      celebrities : this.state.celebrities.filter((c) => c.id !== id)
    })
  }

  sortByNameHandler = () => {
    this.setState({
      celebrities: _.sortBy(this.state.celebrities, 'name')
    })
  }

  sortByPopularityHandler = () => {
    this.setState({
      celebrities: _.sortBy(this.state.celebrities, 'popularity')
    })
  }

  render()
  {
    let celebrities=this.state.celebrities

    return(
    <div>
      <button onClick={this.addRandomCelebrity}>Add random celebrity</button>
      <button onClick={this.sortByNameHandler}>Sort by name</button>
      <button onClick={this.sortByPopularityHandler}>Sort by popularity</button>
      {celebrities.map((c) => <Celebrity name={c.name} popularity={c.popularity} key={c.id} celebrityId={c.id} pictureUrl={c.pictureUrl} deleteHandler={this.deleteHandler}/> )}
    </div>
    )
  }
}

export default App;
