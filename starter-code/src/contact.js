import React from "react";

export default class Contact extends React.Component {
    render() {
        return (
            <tr className="contact">
                <td><img width="100" src={this.props.picture} alt="" /></td>
                <td><h1>{this.props.name}</h1></td>
                <td><h2>{this.props.popularity}</h2></td>
                <td><button className="deleteButton" onClick={() => this.props.deleteMe()}>Delete</button></td>
            </tr>
        );
    }
}