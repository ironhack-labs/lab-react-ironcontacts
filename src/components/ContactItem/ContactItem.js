import React from 'react'
import { ContactItemContainer } from './ContactItem.styled'
import contacts from '../../contacts.json'





export default class ContactItem extends React.Component {
    
    constructor (props){
        super(props)
    
    }

    


    render() {
        return (
           
        <ContactItemContainer> 
                    <tr>
                        <td><img src={this.props.img} alt="actor photography" /></td>
                        <td>{this.props.name}</td>
                        <td>{this.props.popularity.toFixed(2)}</td>
                    </tr>
        </ContactItemContainer>
        )
    }
}
