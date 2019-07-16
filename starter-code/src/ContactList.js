import React from 'react'
import Contact from './Contact'

class ContactList extends React.Component {

    render() {

        const elements = this.props.contacts.map(contact => {
            return <Contact deleteContact={this.props.deleteContact} data={contact} />
        })
    
        

        return (
            <div>

                <table>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>

                        {elements}

                </table>
            </div>
        )
    }
}

export default ContactList