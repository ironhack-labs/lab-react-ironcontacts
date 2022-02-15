import { Component } from 'react'
import contacts from '../../../contacts.json'
import ContactItem from '../contact-item/contact-item'


class ContactsList extends Component {
    state = {
        contacts: []
    }

    componentDidMount() {
        this.setState({ contacts })
    }

    // handleCreateContact() {
    //     this.setState((state, props) => {

    //          return {
    //             contacts: [...state.contacts, contact]
    //         }
    //     })
    // }

    handleDeleteContact(id){

        this.setState((state, props) => 
        ({contacts: state.contacts.filter(contact => contact.id !== id)}))
    }

    handleSortName() {
        this.setState((state, props) => 
        ({contacts : state.contacts.sort((a,b) => a.name.localeCompare(b.name))}))
    }





    render() {
        const { contacts } = this.state
        return (
            <>
                <h1 className="mb-3">Iron Contacts </h1>
                <div className='d-flex justify-content-center mb-3'>
                    <button className='btn btn-primary' onClick={() => this.handleCreateContact()}>New Contact</button>
                    <button className='btn btn-secondary' onClick={() => this.handleSortName()}>Sort By Name</button>
                </div>

                <div className=''>
                    <div className='d-flex row g-2 row-cols-1 row-cols-md-3'>
                        
                        <h1>Picture</h1>
                        <h1>Name</h1>
                        <h1>Popularity</h1>
                    </div>

                    {contacts.map((contact)=> (
                        <div key={contact.id}>
                            <ContactItem {...contact} onDeleteContact={(id) => this.handleDeleteContact(id)} />
                        </div>
                       
                    ))}
                </div>
            </>



        )
    }
}

export default ContactsList