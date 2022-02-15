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
      ({contacts: state.contacts.sort((a, b) => {
        if(a.name > b.name){
            return 1;
        }
        if(a.name < b.name){
            return - 1;
        }
        return 0
      })}))
    }


    handleSortPopularity() {
        this.setState((state, props) => 
        ({contacts: state.contacts.sort((a, b) => {
            if(a.popularity > b.popularity) {
                return 1
            }
            if(a.popularity < b.popularity){
                return - 1
            }
            return 0
        })}))
    }

    




    render() {
        const { contacts } = this.state
        return (
            <>
                <div className='d-flex justify-content-center'>
                <h1 className="mb-5"><strong> IRON CONTACTS </strong></h1>
                </div>
                <div className='d-flex justify-content-center mb-5'>
                    <button className='btn btn-primary ' onClick={() => this.handleCreateContact()}>New Contact</button>
                    <button className='btn btn-secondary ms-5' onClick={() => this.handleSortName()}>Sort By Name</button>
                    <button className='btn btn-secondary ms-5' onClick={() => this.handleSortPopularity()}>Sort By Popularity</button>
                </div>

                <div className=''>
                    <div className='d-flex row g-2 row-cols-1 row-cols-md-3 mb-5'>
                        
                        <h3>Picture</h3>
                        <h3>Name</h3>
                        <h3>Popularity</h3>
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