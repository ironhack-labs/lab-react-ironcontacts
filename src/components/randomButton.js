import React, { Component } from 'react'

class RandomButton extends Component {
    render() {
        return (
            <button onClick={this.props.clickBtn}>{this.props.function}</button>
        )
    }
}

export default RandomButton