import React, { Component } from 'react';
import cx from 'classnames';

export class Button extends Component {
    constructor() {
        super();
    }
    handleClick() {
        this.props.action();
    }
    render() {
        return(
            <a className={`button ${this.props.className}`} onClick={() => this.handleClick()}>
            <span>{this.props.text}</span>
                { this.props.icon ? (
                <span class="icon is-small">
                    <i class={`fas ${this.props.icon}`}></i>
                </span> ) : ""
                }
            </a>
        )
    }
}