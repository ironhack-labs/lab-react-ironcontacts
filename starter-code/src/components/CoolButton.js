import React from 'react';
import '../App.css';

class CoolButton extends React.Component{

  render(){
    return(

      
      <button className={this.props.className} href={this.props.href}>{this.props.children}</button>
      



      )
  }

}


export default CoolButton;