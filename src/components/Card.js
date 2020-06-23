import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.pictureUrl} alt={this.props.name} /></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button onClick={this.props.clickToDelete}>Delete</button></td>
            </tr>
        );
    }
}

export default Card;
