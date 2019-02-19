import React, { Component } from 'react';

class TableRow extends Component{

  handleAction = () => {
    this.props.delete(this.props.name);
  };

  render(){

    return(
      <div>
        <tr>
          <td>
            <img src={this.props.src} alt="" />
          </td>
          <td>
            <p>{this.props.name}</p>
          </td>
          <td>
            <p>{this.props.popularity}</p>
          </td>
        </tr>
        <button onClick={this.handleAction}>delete</button>
      </div>
    )
  }
}

export default TableRow;