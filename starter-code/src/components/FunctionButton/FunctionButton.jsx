import React from 'react';

export default class FunctionButton extends React.Component{
  render(){
    return <button onClick={()=> this.props.functionProp()}>{this.props.children}</button>
  }
}

//children: lo que pongamos en App.js entre las dos etiquetas del <button> se pasa de esa forma. va a ser el textoque aparece en el button