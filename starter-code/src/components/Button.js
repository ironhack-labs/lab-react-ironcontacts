import React,{Component} from "react";
import cx from 'classnames/bind';
import styles from '../styles'

export default class Button extends Component{
  
  render(){
    return(
      <a className={cx.bind(styles)("button",this.props)}>{this.props.children}</a>
    )
  }
}


  