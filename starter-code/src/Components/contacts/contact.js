import React, { Component } from 'react';
import './contact.css';
import Button from '../button/button';



class Contact extends Component{
    render(){
        return(
            <div className="card">

<h4>{this.props.name}</h4>
<img className="theImage" src={this.props.picture} />
<h5>{this.props.popularity}</h5>

<Button value="Delete" role={this.props.delete} />



            </div>
        );
    }
}






export default Contact;
