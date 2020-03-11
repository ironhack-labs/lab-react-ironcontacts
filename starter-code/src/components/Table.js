import React, { Component } from "react";
import contactsArray from "../contacts.json";
import Button from "./RandomButton";

class Contacts extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsArray.splice(0, 5) };
  }

  handleClick() {
    const min = 0;
    const max = contactsArray.length;
    const rand = Math.floor(Math.random() * (max - min));
    const contactRandom = contactsArray[rand];
    this.setState({
      ...this.state,
      contacts: [...this.state.contacts.splice(0), contactRandom]
    });
  }

  render() {
    return (
      <div>
        <Button
          contacts={this.state.contacts}
          handleClick={this.handleClick.bind(this)}
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
          <button onClick={this.handleClick.bind(this)}>Click</button>
        </div>
      </div>
    );
  }
}

export default Contacts;
