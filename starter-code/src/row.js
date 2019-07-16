import React, { Component } from 'react';

export default class row extends Component {
    render() {
        return (
            <tr>
                <td>{<img className="pict" src={this.props.image} alt={this.props.name} />}</td> 
                <td>{this.props.name}</td>
                <td>{this.props.popularity}</td>
                <td><button className="dlt-btn" onClick={ () => {this.props.deletebtn(this.props.ind)}}>Delete</button></td>
            </tr>
        )
    }
}
