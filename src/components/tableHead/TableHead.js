import React, { Component } from 'react';

class TableHead extends Component{
  render(){
    return(
      <tr>
        <th className="header">Picture</th>
        <th className="header">Name</th>
        <th className="header">Popularity</th>
      </tr>
    )
  }
}

export default TableHead;
