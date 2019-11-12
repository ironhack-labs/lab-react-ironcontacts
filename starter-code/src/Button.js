
import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <button onClick={this.props.onClick}>{this.props.children}</button>
            </React.Fragment>
        )
    }
}