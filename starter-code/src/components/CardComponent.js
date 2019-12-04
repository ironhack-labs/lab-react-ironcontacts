import React, { Component } from 'react';
import { Raw } from "../styles/components";

export default class CardComponent extends Component {
    render() {
        return(
                <Raw>
                    <td>
                        <img src={this.props.pictureUrl} alt="Director"/> 
                    </td>
                    <td>{this.props.name}</td>
                    <td>{this.props.popularity}</td>
                    <td><button onClick={() => this.props.removeDirector(this.props.index)}>Delete</button></td>
                </Raw>
        );
    }
}