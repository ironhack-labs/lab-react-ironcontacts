import React, { Component } from "react";
import contactsArray from "../contacts.json";
import RandomButton from "./RandomButton";
import SortNameButton from "./SortNameButton";
import SortPopularityButton from "./SortPopularityButton";

class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsArray.splice(0, 5) };
  }

  randomClick() {
    const min = 0;
    const max = contactsArray.length;
    const rand = Math.floor(Math.random() * (max - min));
    const contactRandom = contactsArray[rand];
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts.splice(0), contactRandom]
    });
  }
  sortNameClick() {
    const orderContacts = this.state.contacts.sort(function(a, b) {
      return a.name > b.name ? 1 : -1;
    });
    this.setState({
      ...this.state,
      contacts: orderContacts
    });
  }
  sortPopularityClick() {
    const orderPopularity = this.state.contacts.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({
      ...this.state,
      contacts: orderPopularity
    });
  }

  render() {
    return (
      <div>
        <RandomButton
          contacts={this.state.contacts}
          randomClick={this.randomClick.bind(this)}
        />
        <SortNameButton
          contacts={this.state.contacts}
          sortNameClick={this.sortNameClick.bind(this)}
        />
        <SortPopularityButton
          contacts={this.state.contacts}
          sortPopularityClick={this.sortPopularityClick.bind(this)}
        />
        <table className="alignContent">
          <tbody>
            {this.state.contacts.map((cont, i) => (
              <tr key={i} className="alignItems">
                <td>
                  <img
                    src={cont.pictureUrl}
                    alt={cont.pictureUrl}
                    className="image"
                  />
                </td>
                <td>
                  <p className="nameSize">{cont.name}</p>
                </td>
                <td>
                  <p>{cont.popularity.toFixed(2)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={this.randomClick.bind(this)}>Click</button>
        </div>
      </div>
    );
  }
}

export default Contacts;
