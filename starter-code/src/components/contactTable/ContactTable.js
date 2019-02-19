import React, { Component } from "react";
import './ContactTable.css'

export default class ContactTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.contactsProp.map((e, idx) => {
            return <tr key={idx}>
              <td><img className="img-table" src={e.pictureUrl} /></td>
              <td>{e.name}</td>
              <td>{e.popularity.toFixed(2)}</td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}
