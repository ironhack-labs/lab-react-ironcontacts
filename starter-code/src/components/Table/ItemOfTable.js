import React, { Component } from 'react';


class ItemOfTable extends Component {

  render() {
    const { pictureUrl, name, popularity } = this.props

    return (
        <tr>
          <th>
           <img src={pictureUrl} alt={name}/>
          </th>
          <th>
            {name}
          </th>
          <th>
            {parseFloat(popularity).toFixed(2)}
          </th>
          <th>
            <button onClick={this.props.onClick}>delete</button>
          </th>
        </tr>
    );
  }
}

export default ItemOfTable;
