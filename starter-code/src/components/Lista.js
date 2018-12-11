import React, { Component } from "react";
import contacts from "../contacts.json";
import Actors from "../components/Actors";

class Lista extends Component {
  state = {
    actors: contacts.slice(0, 5)
  };

  render() {
    const { actors } = this.state;
    return (
      <div>
        {actors.map(actor => (
          <Actors key={actor.id} {...actor} />
        ))}
      </div>
    );
  }
}

export default Lista;
