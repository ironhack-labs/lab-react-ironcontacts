import React from "react"
import contactsDB from "../contacts.json"

class ContactList extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        contacts: contactsDB.slice(0,5)

        };
    }


    render(){
        return(
            <table>
            <thead>
            <tr>
                <th>name
                </th> 
                <th>picture
                </th>
                <th>popularity
                </th>        
            </tr>
            </thead>
            <tbody>
            {this.state.contacts.map(contact => {
                return( 
                    <tr key={contact.id}>
                        <td>{contact.name}
                        </td>   
                        <td><img src={contact.pictureUrl}></img>
                        </td>  
                        <td>{contact.popularity}
                        </td>  
                    </tr>)
            })}
            </tbody>

            </table>

        )
    }

}

export default ContactList