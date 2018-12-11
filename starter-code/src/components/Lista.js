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
    // const { listActors } = this.state;
    let random = Math.floor(Math.random() * actors.length);
    // let add = listActors.push(random);

    this.setState({ rndActor: actors[random], rnd: true });
  };

  render() {
    const { listActors, rndActor, rnd } = this.state;
    console.log(rndActor);
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.randomList}>Add Random Contacts</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {listActors.map(actor => (
            <Actors key={actor.id} {...actor} />
          ))}
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
