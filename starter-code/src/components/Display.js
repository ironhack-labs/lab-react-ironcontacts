import React, {Component} from "react";
import './Display.css';

class Display extends Component {
    render() {
        return (
            <tr>
                <td><img className="celebrity-img" src={this.props.pictureUrl} alt={this.props.name}></img></td>
                <td>{this.props.name}</td>
                <td>{this.props.rating}</td>
            </tr>
        )
    } 
}

export default Display;