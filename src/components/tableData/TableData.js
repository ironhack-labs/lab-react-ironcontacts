import React, { Component } from 'react';

class TableData extends Component{
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
      </tr>
    )
  }
}

export default TableData;