import React, { Component } from "react";
import contacts from "./contacts.json";

{
  /* <ul>{this.state.allSectionNames}</ul>
        <img src={logo} alt="logo" />
        <button onClick={() => this.increaseTaxes()}>Add Taxes!</button>
        {
          this.state.prices.map((price, idx) => {
            return <IronPrice price={price} key={idx}></IronPrice>
          })
        } */
}

export default class Row extends Component {
  render() {
    return (
      <tr>
        <td>
          <img src={this.props.picture} />
        </td>
        <td>{this.props.name}</td>
        <td>{this.props.popularity}</td>
        <td>{this.props.button}</td>
      </tr>
    );
  }
}
