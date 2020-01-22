import React, { Component } from "react";

class TableHead extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <thead>
        <tr> 
          { this.props.keysArr.map((keys, idx) => <th key={`thead-${idx}`}> {keys} </th> )} 
        </tr>
      </thead>
    )
  }
}

export default TableHead;