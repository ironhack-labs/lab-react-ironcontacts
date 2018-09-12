import React from "react";

import List from "./List";
import contacts from "../contacts.json";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
      list: this._getList()
    };

    this._getList = this._getList.bind(this);
    this._addRandom = this._addRandom.bind(this);
  }

  render() {
    const mappedList = this.state.list.map((actor, index) => {
      return (
        <List
          name={actor.name}
          picture={actor.pictureUrl}
          popularity={actor.popularity}
          key={"actor_" + index}
          index={index}
        />
      );
    });

    return (
      <div className="container">
        <h1>IronContacts</h1>
        <button onClick={this._addRandom}>Add Random Contact</button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {mappedList}
          </tbody>
        </table>
      </div>
    );
  }

  _getList() {
    const newList = [];
    for (let i = 0; i < 5; i++) {
      newList.push(contacts[i]);
    }
    return newList;
  }

  _randomIndex() {
      return Math.floor(Math.random()*199)
  }

  _addRandom() {
    this.state.list.push(contacts[this._randomIndex()])
    this.setState({
        list : this.state.list
    })
  }
}

export default Application;
