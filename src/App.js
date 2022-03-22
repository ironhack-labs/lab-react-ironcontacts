import { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts, //tried to contacts.slice here but didn´t work 👀👀
  };
  addRandomContact = () => {
    const remainingContacts = this.state.contacts.slice(5);
    const random = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    this.setState({
      contacts: [...this.state.contacts, random],
    });
  };

  render() {
    const { contacts } = this.state;
    const justFiveContacts = contacts.slice(0, 5);

    return (
      <div className="App">
        <div className="container">
          <h1>Ironcontacts</h1>
          <button
            name="random"
            className="RandomButton"
            onClick={() => this.addRandomContact()}
          >
            Add Random Contact
          </button>
          <table className="table">
            <tbody>
              <tr>
                <th>Pic</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Oscars</th>
                <th>Emmys</th>
              </tr>
            </tbody>
            {justFiveContacts.map((elements, key) => {
              return (
                <tr key={key}>
                  <td>
                    <img
                      className="ContactsPics"
                      src={elements.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>{elements.name}</td>
                  <td>{elements.popularity.toFixed(2)}</td>
                  <td>{elements.wonOscar ? "🏆" : ""}</td>
                  <td>{elements.wonEmmy}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
