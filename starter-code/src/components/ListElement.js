import React, { Component } from 'react';

class ListElement extends Component {
  render () {
    const { img, name, popularity } = this.props;
    return (
      <tr>
        <td><img className="table-img" src={img} alt=""/></td>
        <td>{name}</td>
        <td>{popularity}</td>
      </tr>
    );
  }
}

export default ListElement;