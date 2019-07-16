import React, { Component } from "react";
import Actors from "./Actors"
import contacts from "../contacts.json";


class ActorsTable extends Component {
  constructor() {
    super();

    this.state = {
      actors: contacts.filter((actor, idx) => idx <= 4)
    };
  }

  //ITERATION 2

  addRandom = () => {
    const randomActor = () => Math.floor(Math.random() * contacts.length + 1);
    const actorsSpreadOperator = [...this.state.actors];
    actorsSpreadOperator.push(contacts[randomActor()]);
    this.setState({
      actors: actorsSpreadOperator
    });
  };

  //ITERATION 3

  sortByAlphabetically = () => {
    let actorsSpreadOperator = [...this.state.actors];
    actorsSpreadOperator = actorsSpreadOperator.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      actors: actorsSpreadOperator
    });
  };

  sortByPopularity = () => {
    let actorsSpreadOperator = [...this.state.actors];
    actorsSpreadOperator = actorsSpreadOperator.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      actors: actorsSpreadOperator
    });
  };

// ITERATION 4
  deleteActor = (actorIndex) => {
      let actorsSpreadOperator = [...this.state.actors]
      actorsSpreadOperator.splice(actorIndex, 1)
      this.setState({
          actors: actorsSpreadOperator
      })
  }

  render() {
    return (
      <section className="table">
        <div className="buttons" />
        <button onClick={this.addRandom}>Add Random</button>
        <button onClick={this.sortByAlphabetically}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th className="action-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.actors.map((actor, idx) => {
              return (
                <Actors
                  key={idx}
                  {...actor}
                  clickDelete={() => this.deleteActor(idx)}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}


export default ActorsTable


