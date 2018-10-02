import React, { Component } from 'react';
import Button from './Button';

class Contact extends Component {
    render(){
        let { pictureUrl, name, popularity, deleteAction } = this.props
        return (
            <tr>
                <td><img src={pictureUrl} alt=''></img></td>
                <td>{name}</td>
                <td>{popularity}</td>
                <td><Button onClick={() => deleteAction({name})}>Delete</Button></td>
            </tr>
        )
    }
};

export default Contact