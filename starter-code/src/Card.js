import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          <tr>
            <td>
              <img src={this.props.pictureUrl} alt="" className="card-img" />
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="card-name">{this.props.name}</h2>
            </td>
          </tr>
          <tr>
            <td>
              <h2 className="card-popularity">{this.props.popularity}</h2>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Card;
