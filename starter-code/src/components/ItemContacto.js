import React, { Component } from "react";
import PropTypes from 'prop-types';

export class ItemContacto extends Component {
  
  
  handleDelete(e){
    this.props.onDelete(this.props.index)
  }

  static propTypes = {
    onDelete: PropTypes.func,
};

  render() {
    let {item} = this.props;
    return (
      <tr>
        <td>
          <figure className="image is-4by5">
            <img src={item.pictureUrl} alt={item.name} />
          </figure>
        </td>
        <td>{item.name}</td>
        <td>{item.popularity.toFixed(2)}</td>
        <td>
          <a onClick={(e)=>this.handleDelete(e)} className="delete">Delete</a>
        </td>
      </tr>
    );
  }
}
