import React, { Component } from 'react'

export default class AddRandomBtn extends Component {
    render() {
        return (
            <div>
                <button onClick={this.AddRandomBtn}>Add random contact</button>
            </div>
        )
    }
}
