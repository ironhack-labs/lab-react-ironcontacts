import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.pictureUrl} alt="" height="100"/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button onClick={this.props.removeClick}>Delete</button></td>
            </tr>
        )
    }
}
