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

    handleCreateContact() {

    }




    render() {
        const { contacts } = this.state

        return (
            <>
                <h1 className="mb-3">Iron Contacts </h1>
                <div className='d-flex justify-content-center mb-3'>
                    <button className='btn btn-primary'>New Contact</button>
                </div>

                <div className=''>
                    <div className='d-flex row g-2 row-cols-1 row-cols-md-3'>
                        <h1>Picture</h1>
                        <h1>Name</h1>
                        <h1>Popularity</h1>
                    </div>

                    {contacts.map((contact) => (
                        <div key={contact.id}>
                            <ContactItem {...contact} />
                        </div>
                    ))}
                </div>
            </>



        )
    }
}

export default ContactsList