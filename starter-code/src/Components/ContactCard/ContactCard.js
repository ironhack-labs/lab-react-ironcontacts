import React, { Component } from 'react';
import AddButton from '../AddButton/AddButton';
class ContactCard extends Component {
    render() {
        return (
        <tr>
            <td>
                <img src={this.props.img}></img>
            </td>
            <td>
                <p>{this.props.name}</p>
            </td>
            <td>
                <p>{this.props.popularity.toFixed(2)}</p>
            </td>
            <td>
                <AddButton functionProp={()=>this.props.deleteProp(elem.name)}>Delete</AddButton>
            </td>
        </tr>
        );
    }
}

export default ContactCard;

