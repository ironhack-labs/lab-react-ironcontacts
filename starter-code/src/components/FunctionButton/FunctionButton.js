import React from 'react';

export default class FunctionButton extends React.Component {
    render() {
        return <button onClick={()=> this.props.functionProp()}>{this.props.children}</button>

        
    }
}