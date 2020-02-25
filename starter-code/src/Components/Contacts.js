import React from "react";
import "./Contacts.css";


export default class Contacts extends React.Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.pictureUrl} alt=""/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity.toFixed(2)}</td>
                <td><button onClick={() => this.props.clickToDelete()}>Delete</button></td>
            </tr>

        );
    }
}
