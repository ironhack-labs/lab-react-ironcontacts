import React, {Component} from "react";
import ContactCard from './ContactCard';

export default class TableCard extends Component {
    render() {
        return (
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th> 
                    <th>Popularity</th>
                </tr>
                
                <tr>
                    <td><img src={this.props.pictureUrl} width="25"/></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.popularity}</td>
                </tr>
            </table>
        )
    }
}
