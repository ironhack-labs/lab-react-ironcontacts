import React, {Component} from 'react';

class Button extends Component{


    render(){

        return (

            <button onClick={this.props.actionButton} type={this.props.type} className={this.props.className}>{this.props.children}</button>
        )
    }


}


export default Button;
