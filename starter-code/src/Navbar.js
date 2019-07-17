import React, { Component } from 'react'
import logo from "./amazon.png"

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
      <img className="amazonia" src={logo}  />
      <ul className="flexrow">
        <li>Cuenta de: Sito</li>
      </ul>
      </div>
    )
  }
}
