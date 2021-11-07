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
    this.setState((prevState, this.props.)=>{
      const contactRandom = contacts[Math.floor(Math.random()*contacts.length)]
      return prevState.contacts.push(contactRandom)
   })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Contact</button>
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
