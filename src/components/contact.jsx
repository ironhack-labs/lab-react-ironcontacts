import { useEffect } from 'react';
import * as contactService from '../services/contact-service';
import DeleteContact from './delete-contact';

function Contact ({ contacts, setContactData }) {

    useEffect(() => {
        const dataContacts = contactService.getContactCountFive();
        setContactData(dataContacts);
    }, [setContactData])
    
    const oscarIcon = '🏆';
    const emmyIcon = '🌟';

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Picture</th>
                    <th scope="col">Name</th>
                    <th scope="col">Popularity</th>
                    <th scope="col">Won Oscar</th>
                    <th scope="col">Won Emmy</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts && contacts.map(contact => 
                        <tr key={contact.id}>
                            <td  className="w-25"> <img src={contact.pictureUrl} alt={contact.name} className='img-fluid'/> </td>
                            <td>{contact.name}</td>
                            <td>{contact.popularity.toFixed(2)}</td>
                            <td>{contact.wonOscar && oscarIcon}</td>
                            <td>{contact.wonEmmy && emmyIcon}</td>
                            <td><DeleteContact contact={contacts} setContactData={setContactData} id={contact.id} /> </td>
                        </tr>)}
                </tbody>
            </table>
        </>
    );
}

export default Contact;