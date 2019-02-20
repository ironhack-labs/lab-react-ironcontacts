import React, {Component} from 'react'

export default class Button extends React.Component {
  render() {
    return <button onClick={() => this.props.functionProp()}>{this.props.children}</button>
  }
}