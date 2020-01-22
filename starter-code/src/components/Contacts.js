import React, { Component } from 'react';


class Contacts extends Component {
    render() {
        const {pictureUrl, name, popularity, deleteItem} = this.props; 
      return (
        <tr>
          <td>
              <img src={pictureUrl} alt="artist"/>
          </td>
          <td>
              <span>{name}</span>
          </td>
          <td>
              <span>{popularity}</span>
          </td>
          <td className="delete">
            <button onClick={() => deleteItem(this.props)}>Delete</button>
          </td>
        </tr>
      );
    }
  }
  
  
  export default Contacts;