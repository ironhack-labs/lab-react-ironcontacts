import React, { Component } from 'react';

class TableRow extends Component{

  handleDeleteAction = () => {
    this.props.delete(this.props.name);
  };

  render(){

    return(
      <tr key={this.props.key}>
        <td>
          <img src={this.props.src} alt="" />
        </td>
        <td>
          <p>{this.props.name}</p>
        </td>
        <td>
          <p>{this.props.popularity}</p>
        </td>
        <button onClick={this.handleDeleteAction}>delete</button>
      </tr>
    )
  }
}

export default TableRow;