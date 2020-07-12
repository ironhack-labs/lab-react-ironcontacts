import React, { Component } from 'react'

class RandomButton extends Component {
    render() {
        return (
            <button onClick={this.props.clickRandomBtn}>Add Random Contact</button>
        )
    }
}

export default RandomButton
