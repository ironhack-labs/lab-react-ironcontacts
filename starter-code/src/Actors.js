import React from "react";



export default class Actors extends React.Component {
    render() {
        return (
            <tr>
                <td><button onClick={() => this.props.removeContact()}>Remove Actor</button></td>
                <td><img src={this.props.pictureUrl} width="100"  alt=""/></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
            </tr>

        )
    }
}