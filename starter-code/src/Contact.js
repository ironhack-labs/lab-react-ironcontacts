import React from "react";
import "./Contact.css";



export default class Contact extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.imgSrc} alt={this.props.name} width="100" />
        </td>
        <td>
          <h4>{this.props.name}</h4>
        </td>
        <td>
          <h4>{this.props.imdbRating} </h4>
        </td>
        <td>
          <button onClick={()=>(this.props.func(this.props.idx))}>Delete</button>
        </td>
      </tr>
    );
  }
}
