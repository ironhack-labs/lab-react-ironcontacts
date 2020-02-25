import React, { Component } from "react";

export default class Celebrity extends Component {
  render() {
    return (
      <div>
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
                <tr key={this.props.key}>
                  <td>
                    <img src={this.props.url} width="100" />
                  </td>
                  <td>{this.props.name}</td>
                  <td>{this.props.popularity}</td>
                  <td>
                    <button onClick={this.props.deletedCeleb}>
                      Delete
                    </button>
                  </td>
                </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
