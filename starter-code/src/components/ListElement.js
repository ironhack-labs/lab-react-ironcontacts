import React, { Component } from 'react';

class ListElement extends Component {
  render () {
    const { img, name, popularity, deleted } = this.props;
    return (
      <tr>
        <td><img className="table-img" src={img} alt=""/></td>
        <td>{name}</td>
        <td>{popularity}</td>
        <td><button onClick={deleted} className='add-random-btn'>Delete</button></td>
      </tr>
    );
  }
}

export default ListElement;