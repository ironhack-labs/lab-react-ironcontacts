import React, { Component } from 'react';
import contacts from './contacts.json';

class Producers extends Component {
  
  render() {
    return (
      <div className="Producers-container">
        <div className="Producers-table">
          <table>
            <tr>
              <td><img src={this.props.pictureUrl}></img></td>
              <td>{this.props.name}</td>
              <td>{this.props.popularity}</td>
              <button onClick={() => this.props.deleteProducer()}>Delete</button>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Producers;

