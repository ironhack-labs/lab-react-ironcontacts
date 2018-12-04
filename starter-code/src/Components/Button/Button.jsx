import React from 'react';
import "./Button.css"

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Button">
                <button onClick={this.props.function}>{this.props.children}</button>
            </div>
        );
    }
}