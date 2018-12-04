import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props){
        super(props)
        this.props=props;
        this.state= {
            handler: function(e){this.props.callbackFunction(e)}.bind(this)
         
        }
      
    }
  render() {
    
if (this.props.hasOwnProperty("id")) {
    return (
   
        <button onClick={this.state.handler} id={this.props.id}>{this.props.children}</button>
    
    )
}else {
return (
   
    <button onClick={this.state.handler}>{this.props.children}</button>

)
  }
}
}
