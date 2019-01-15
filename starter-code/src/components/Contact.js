import React, { Component } from 'react';
import { Button } from './Button';

export class Contact extends Component {
    render() {
        const {name, pictureUrl, popularity} = this.props.children;
        return(
            <tr key={this.props.keyCode}>
                <th><img src={pictureUrl} height="80" className="image"/></th>
                <th>{name}</th>
                <th>{Number((popularity).toFixed(2))}</th>
                {
                    this.props.actionBtn ? <th><Button text="Remove" className="is-danger" action={() => this.props.actionBtn()} icon='fa-times'/></th> : ""
                }
            </tr>
        )
    }
}