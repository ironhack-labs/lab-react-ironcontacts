import React, { Component } from 'react';
import './button.css';


class Button extends Component{
    render(){
        return(
<div>

<button onClick={this.props.role}>{this.props.value}</button>

</div>
        );
    }
}






export default Button;
