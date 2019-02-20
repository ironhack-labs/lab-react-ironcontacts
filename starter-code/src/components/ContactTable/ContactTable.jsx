import React, { Component } from "react";

export default class ContactTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{this.props.contacts.map((e, idx) => {
            return <tr key={idx}>
              <td><img className="img-table"src={e.pictureUrl}/></td>
              <td>{e.name}</td>
              <td>{e.popularity.toFixed(2)}</td>
            </tr>
          })}</tbody>
        </table>
      </div>
    );
  }
}
