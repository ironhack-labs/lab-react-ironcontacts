import React, { Component } from "react";
import Row from "./Row.js";

class Table extends Component {
  render() {
    const { contacts, onDelete } = this.props;

    return (
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
          {contacts.map((contact, index) => {
            return (
              <Row
                buttonAbility={() => onDelete(index)}
                key={index}
                {...contact}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
