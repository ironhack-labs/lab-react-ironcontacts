import React, { Component } from 'react';

class Contact extends Component {
    render(){
        let { pictureUrl, name, popularity } = this.props
        return (
            <tr>
            <td><img src={pictureUrl}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
          </tr>
        )
    }
};

export default Contact