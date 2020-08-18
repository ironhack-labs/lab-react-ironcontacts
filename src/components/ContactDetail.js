import React from 'react';
import './ContactDetail.css';

class ContactDetail extends React.Component {

    render (){
        return (<tr>
            <td><img className= "imgContact" src={this.props.contact.pictureUrl} alt=""></img></td>
            <td>{this.props.contact.name}</td>
            <td>{this.props.contact.popularity}</td>
            <td><button onClick={() => this.props.Delete(this.props.index) }>Delete</button></td>
        </tr>)
    }

}

export default ContactDetail;