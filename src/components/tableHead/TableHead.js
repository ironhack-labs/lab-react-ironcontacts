import React, { Component } from 'react';

class TableHead extends Component{
  render(){
    return(
      <thead>
        <tr>
          <th className="header">Picture</th>
          <th className="header">Name</th>
          <th className="header">Popularity</th>
        </tr>
      </thead>
    )
  }
}

export default TableHead;
