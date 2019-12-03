import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./Contact/Contact";

class App extends Component {
  constructor() {
    super();
    let firstContacts = [...contacts].slice(0, 5);

    this.state = {
      listOfFive: [...firstContacts],

    };
  }

  randomActor() {
    let newArr = [...this.state.listOfFive]
    let filterArr = [...contacts].filter(element => !this.state.listOfFive.includes(element))
    let randomAct = filterArr[Math.floor(Math.random()*filterArr.length)]
    newArr.push(randomAct)
 
    this.setState ({
      ...this.state,
      listOfFive: newArr
    })
  }

  sortName(){
    let sortNameArr = [...this.state.listOfFive].sort((a, b) => a.name.localeCompare(b.name))
    
    this.setState ({
      ...this.state,
      listOfFive: sortNameArr
    })
  }

  sortPopularity(){
    let sortPopArr = [...this.state.listOfFive].sort((a, b) => {
      if(a.popularity > b.popularity) return -1;
      return 1;})

    this.setState ({
      ...this.state,
      listOfFive: sortPopArr
    })
  }

  remove(id){
    let removeArr = [...this.state.listOfFive]
    let newArr = []
    removeArr.forEach(contact => {
      if(id !== contact.id){newArr.push(contact)}
    })

    this.setState({
      ...this.state,
      listOfFive: newArr
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
         <button onClick={() => this.randomActor()}>Add a Random Contact</button>
         <button onClick={() => this.sortName()}>Sort by name</button>
         <button onClick={() => this.sortPopularity()}>Sort by popularity</button>
        <div className="table-container">
        <table className="tabla">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>

           {this.state.listOfFive.map((actor, idx) => {
             return (
              <Contact key={idx} contact={actor} callback={this.remove.bind(this)}></Contact>
              
             )
           })}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
