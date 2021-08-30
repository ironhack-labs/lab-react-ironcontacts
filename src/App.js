// import logo from './logo.svg';
import React from "react";
import "./App.css";
import contacts from "./contacts.json";

export default class App extends React.Component {
  state = {
    contacts: contacts,
  };
  render() {
    const getActors = () => {
      const fiveActors = [];
      while (fiveActors.length < 5) {
        const randomIndex = Math.floor(Math.random() * contacts.length);
        if (!fiveActors.includes(contacts[randomIndex]))
          fiveActors.push(contacts[randomIndex]);
      }
      return fiveActors;
    };
    console.log(this.state.contacts);
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <table className="App-table">
          <thead>
            <tr>
              <th>
                <strong>PICTURE</strong>
              </th>
              <th>
                <strong>NAME</strong>
              </th>
              <th>
                <strong>POPULARITY</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {getActors().map((actor) => (
              <tr key={actor.id}>
                <td>
                  <img src={actor.pictureUrl} alt={actor.name} />
                </td>
                <td>
                  <strong>{actor.name}</strong>
                </td>
                <td>{actor.popularity.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
