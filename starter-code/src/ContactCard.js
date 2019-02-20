import React, {Component} from "react";
import './contactCard.css';
import MyButton from './MyButton';

export default class ContactCard extends Component {
    render() {
        return (
            <tr>
                <td><img src={this.props.pictureUrl} width="70"/></td>
                <td>{this.props.name}</td>
                <td>{parseFloat(this.props.popularity).toFixed(2)}</td>
                <td><MyButton onClick={this.props.action} text={this.props.text}/></td>
            </tr>
        )
    }
}
