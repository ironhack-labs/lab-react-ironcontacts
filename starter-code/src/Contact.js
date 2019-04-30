import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        const { name, picture, popularity } = this.props
        return (
            <React.Fragment>
                <tr>
                    <td><img src={picture} width="80"/></td>
                    <td>{name}</td>
                    <td>{popularity}</td>
                </tr>

            </React.Fragment>
        )
    }
}
