import React from 'react'
import "./FunctionButton.css"

export default class FunctionButton extends React.Component {
    render (){
        return <button onClick={() => this.props.functionProp()}>{this.props.children}</button>
    }
}

//ponemos children y eso se refiere a lo que pongamos dentro del botón.