import React, { Component } from "react";

export default class Contacts extends Component {
  render() {
    return (
      <div className="contactsTable">
        <h1>Iron Contacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.listado.map((actor, idx) => (
              <tr className="contactRow">
                <td>
                  <img
                    className="imgTable"
                    src={actor.pictureUrl}
                    alt="actor"
                  />
                </td>
                <td>{actor.name} </td>
                <td> {actor.popularity} </td>
                <td><button onClick={() => this.props.delete}> Delete </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
