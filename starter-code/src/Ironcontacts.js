import React, {Component} from 'react'
import contacts from './contacts.json'
import Contact from './Contact'

export default class Ironcontacts extends Component {
    state = {
        contacts: contacts.slice(0,5) //first 5 contacts
    }

    render(){
        return(
            <div className='contacts'>
 
                {this.state.contacts.map(person=>(
                    <Contact
                        key={`${person.name} - ${person.popularity}`}
                        name={person.name}
                        image= {person.pictureUrl}
                        rating={person.popularity}
                    />
                ))}
            </div>
        )
    }
}
