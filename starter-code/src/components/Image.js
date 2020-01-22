import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img style={this.props.style} src={this.props.picUrl} />
    )
  }
}

export default Image;