import React from "react";
import "./Card.css"

class Card extends React.Component {
    render() {
    return (
      <div className="card">
      <ul>
        <li><img src={this.props.pictureUrl} alt=""></img></li>
        <li>{this.props.name}</li>
        <li>{this.props.popularity}</li>

      </ul>
      </div>
    )
  }
}

export default Card;


