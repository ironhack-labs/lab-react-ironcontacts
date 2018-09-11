import React from "react";
import contacts from "../contacts.json";
import Actor from "./Actor";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      actors: []
    };

    this._addRandom = this._addRandom.bind(this);
    this._sortName = this._sortName.bind(this);
    this._sortPopul = this._sortPopul.bind(this);
    this._deleteActor = this._deleteActor.bind(this);
  }

  componentDidMount() {
    const newActors = [];
    for (let x = 0; x < 5; x++) {
      newActors.push(contacts[x]);
    }
    this.setState({
      actors: newActors
    });
  }

  render() {
    let actorMap = this.state.actors.map((actor, i) => {
      return (
        <Actor
          pictureUrl={actor.pictureUrl}
          name={actor.name}
          popularity={actor.popularity}
          key={i}
          index={i}
          deleteActor={this._deleteActor}
        />
      );
    });

    return (
      <div className="application">
        <h1>IronContacts</h1>
        <br />
        <div className="button-container">
          <button onClick={this._addRandom}>Add random contact</button>
          <button onClick={this._sortName}>Sort by name</button>
          <button onClick={this._sortPopul}>Sort by popularity</button>
        </div>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity Score</th>
              <th>Action</th>
            </tr>
            {actorMap}
          </tbody>
        </table>
      </div>
    );
  }

  _addRandom() {
    const randNum = this._randomNum();

    const newActors = [...this.state.actors];

    newActors.unshift(contacts[randNum]);
    this.setState({
      actors: newActors
    });
  }

  _sortName() {
    const sortedActors = this.state.actors.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      actors: sortedActors
    });
  }

  _sortPopul() {
    const sortedActors = this.state.actors.sort((a, b) => {
      return a.popularity < b.popularity;
    });
    this.setState({
      actors: sortedActors
    });
  }

  _deleteActor(index) {
    const newActors = [...this.state.actors];
    newActors.splice(index, 1);
    this.setState({
      actors: newActors
    });
  }

  _randomNum() {
    return Math.floor(Math.random() * contacts.length);
  }
}

export default Application;
