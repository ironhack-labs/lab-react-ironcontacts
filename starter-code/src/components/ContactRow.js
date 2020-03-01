import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class ContactRow extends Component {
    render() {
       const {contact} = this.props; 
        return (
           
                <tr>
                    <th>
                   
                        <img className ="image  is-96x96" alt="" src={contact.pictureUrl}/>
                   
                    </th>
                    <th>
                        {contact.name}
                    </th>
                    <th>
                        {contact.popularity}
                    </th>
                </tr>
       
        )
    }
}
export default ContactRow