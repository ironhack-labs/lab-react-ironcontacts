import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import contacts from "./contacts.json";
var counter = 5;

function selected(counter) {
  const shuffled = contacts.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, counter);
}
var selectedArray = selected(counter);

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    counter: 5
  };

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1
    });
    console.log(this.state.counter);
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler}>Click me</button>
        <ul>
          <table>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </table>
          {selected(this.state.counter).map((actor, index) => {
            return (
              <table>
                <tr>
                  <td key1={index}>
                    <img width="100" src={actor.pictureUrl} />
                  </td>
                  <td key2={index}>{actor.name}</td>
                  <td key3={index}>{actor.popularity}</td>
                </tr>
              </table>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
