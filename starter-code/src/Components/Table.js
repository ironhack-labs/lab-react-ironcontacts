import React, { Component } from 'react';


class Table extends Component {
  render() {
    return (
      <div className="Tables">
    <table>
  <tr>
    <th name={this.props.name}></th>
    <th name={this.props.name}></th> 
    <th name={this.props.name}></th>
  </tr>
  <tr>
    <td pictureUrl={this.props.pictureUrl}></td>
    <td pictureUrl={this.props.pictureUrl}></td> 
    <td pictureUrl={this.props.pictureUrl}></td>
  </tr>
  <tr>
    <td popularity={this.props.popularity}></td>
    <td popularity={this.props.popularity}></td> 
    <td popularity={this.props.popularity}></td>
  </tr>
</table>
      </div>
    );
  }
}

export default Table;