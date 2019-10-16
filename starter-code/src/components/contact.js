import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(            
                <tbody>
                <tr>
                    <td><img src={this.props.pictureUrl} alt="" width="50px" height="70px"></img></td>
                    <td>{this.props.name}</td>
                    <td>{this.props.popularity}</td>
                    <td><button onClick={() => {this.props.deleteHandler(this.props.index)}}>Delete</button></td>
                </tr>
                </tbody>
        )
    }
}

export default Contact