import React, { Component } from 'react'

export default class Contacts extends Component {
  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Listado.map((list, idx) => (
              <tr>
                <td><img className="imgList" src={list.pictureUrl} /></td>
                <td><h3>{list.name}</h3></td>
                <td><h3>{list.popularity}</h3></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    )
  }
}