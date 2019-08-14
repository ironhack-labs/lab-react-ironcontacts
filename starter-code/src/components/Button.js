import React, { Component } from 'react';
import '../App.css'


class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {

    return (
      <button onClick={this.props.addRandom} className="btn btn-outline-dark"></button>
    )
  }

}
export default Button