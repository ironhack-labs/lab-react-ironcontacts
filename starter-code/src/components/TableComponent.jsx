import React, { Component } from 'react'

export default class tableComponent extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popuarity</th>
                        <th>Action</th>
                    </tr>
                    {this.props.children}
                </table>
            </div>
        )
    }
}
