
import React, {Component} from 'react';
import './ContactForm.css';
class Contact extends Component{
    render(){
        const {name, image, popularity, index, deleteContact}=this.props;
        return(
            <div className="eachContactDiv">
                <img src={image} alt=""></img>
                <p>{name}</p>
                <p>{popularity}</p>
                <button onClick={()=>{deleteContact(index)}}>Delete</button>
            </div>
        )
    }
}
export default Contact;
