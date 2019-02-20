import React, {Component} from "react";
import ContactsCard from './ContactCard';
import './ListContact.css';


export default class ContactCard extends Component {

    render() {
        return (
            
            <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th> 
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                    {this.props.datos.map((contact,index) => 

                        <ContactsCard text="Delete" action={() => contact.delete(index)} pictureUrl={contact.pictureUrl} key={index} name={contact.name} popularity={contact.popularity}/>)}
            </table>

        )
    }
}
