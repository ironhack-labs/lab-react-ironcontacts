import React, { Component } from 'react';
class AddButton extends Component {
    render() {
        return (
            <button onClick={()=>this.props.functionProp()}>{this.props.children}</button>
        );
    }
}

export default AddButton;

