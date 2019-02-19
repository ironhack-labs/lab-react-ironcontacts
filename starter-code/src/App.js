import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Card from './components/card/Card'
import Button from './components/button/Button'

class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: contacts.splice(0, 8)
    }
    this.updateState = this.updateState.bind(this);
  }

  updateState(object) {
    this.setState({
      actors: object
    })
  }

  render() {
    return (
      <div className="App">
        <section>
          <Button name="Add Random Contact" isAdd updateState={this.updateState} actors={this.state.actors} />
          <Button name="Sort By Name" isName updateState={this.updateState} actors={this.state.actors} />
          <Button name="Sort By Popularity" isPop updateState={this.updateState} actors={this.state.actors} />
          <ul>
            <div className="container">
              <div className="row d-flex">
                <Card actors={this.state.actors} updateState={this.updateState} />
              </div>
            </div>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
