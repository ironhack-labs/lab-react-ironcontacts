import React, {Component} from 'react';
import Button from './Button';

class ContactLine extends Component{

  render(){


    return (

        
            <tbody>
            {this.props.infoLine.map ((contact, index) => (
              <tr key={index}>
                <td> <img src={contact.pictureUrl} width="60px" alt={contact.name} /></td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td><Button actionButton={() =>this.props.actionFunction(contact)} className="btn btn-danger btn-sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        

    )
  }

}

export default ContactLine;