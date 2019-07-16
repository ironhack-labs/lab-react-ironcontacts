import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  render() {
    return (
       <button className={"btn" + this.props.classMod} onClick={this.props.function}>{this.props.text}</button>
    );
  }
}

