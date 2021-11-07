import React from "react";
import "./App.css";
import contacts from "./contacts.json";

let smallArr = contacts.slice(0, 5);
console.log("1st console log", smallArr);

function Contacts(props) {
  return (
    <tr>
      <td>
        <img className="picture" src={props.pictureUrl} alt="profil" />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: smallArr,
    };
  }

  addRandom = () => {
    console.log("click") 
    this.setState((prevState, props)=>{
      const contactRandom = contacts[Math.floor(Math.random()*contacts.length)]
      return prevState.contacts.push(contactRandom)
   })
  }

  sortName = ()=>{
    this.setState((prevState, props)=>{
      const sortedList = prevState.contacts.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
      console.log (sortedList)
      return {contacts: sortedList}
    })
  }

  sortPopularity = ()=>{
    this.setState((prevState, props)=>{
      const sortedList = prevState.contacts.sort((a,b)=>{
        return a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
      })
      return {contacts: sortedList}
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table className="table">
          <thead>
            <tr>
              <td><h2>Picture</h2></td>
              <td><h2>Name</h2></td>
              <td><h2>Popularity</h2></td>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((elm) => {
              return (
                <Contacts
                  key={elm.id}
                  pictureUrl={elm.pictureUrl}
                  name={elm.name}
                  popularity={elm.popularity}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
