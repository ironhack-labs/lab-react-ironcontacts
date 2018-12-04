import React, { Component } from 'react';

import './Contacts.css';


class Contact extends Component {

    delete = (e) => {
        let arr = [...this.props];
        console.log(e.target.parentNode.parentNode.id)
        
        ///arr.splice(e.target.parentNode.parentNode, 1)
        this.setState({
            ...this.state, contacts: arr
        })
    }

    render() {


        return (


            <tr className="Contact">
                <td><img src={this.props.pictureUrl} width="20%"></img></td>
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button onClick={this.delete}>Delete</button></td>
            </tr>



        );
    }
}

export default Contact;