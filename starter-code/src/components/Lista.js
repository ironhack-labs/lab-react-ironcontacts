import React, { Component } from "react";
import contacts from "../contacts.json";
import Actors from "../components/Actors";

class Lista extends Component {
  state = {
    actors: contacts.slice(5, contacts.length),
    listActors: contacts.slice(0, 5)
    // rndActor: {},
    // rnd: false
  };

  randomList = () => {
    const { actors } = this.state;
    let { listActors } = this.state;
    let random = Math.floor(Math.random() * actors.length);
    listActors.push(actors[random]);

    this.setState({ listActors });
  };

  sortList = () => {
    const { listActors } = this.state;
    let sortName = (a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    };

    listActors.sort(sortName);
    this.setState({ listActors: listActors });
  };

  popList = () => {
    const { listActors } = this.state;
    let sortPop = (a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
    };

    listActors.sort(sortPop);
    this.setState({ listActors: listActors });
  };

  delete = index => {
    const deleteActor = this.state.listActors;
    deleteActor.splice(index, 1);
    this.setState({ listActors: deleteActor });
  };

  render() {
    const { listActors, rndActor, rnd } = this.state;
    console.log(this.state);
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomList}>Add Random Contacts</button>
        <button onClick={this.sortList}>Sort by name</button>
        <button onClick={this.popList}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listActors.map((actor, index) => (
              <Actors key={index} {...actor} />
            ))}
            <td>
              <button onClick={this.detele}>Delete</button>
            </td>
          </tbody>
        </table>
        {rnd ? (
          <tr>
            <td>
              <img src={rndActor.pictureUrl} alt="lasd" width="100px" />
            </td>
            <td>{rndActor.name}</td>
            <td>{rndActor.popularity}</td>
          </tr>
        ) : null}
      </div>
    );
  }
}

export default Lista;
