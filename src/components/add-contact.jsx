import * as contactRandom from '../services/contact-service';

function AddContact ({contact, setContactData}) {
    
    const addContact = () => {
        const newContact = contactRandom.getContactRandom(contact);

        if (newContact) {
            setContactData(prevContact => [...prevContact, newContact]);   
        } else {
            console.info('No existe contacto que añadir');
        }
    };

    return (<>
            <button 
                type="button" 
                className="btn btn-primary mx-1" 
                onClick={addContact}>Add Contact
            </button>
        </>);   
}

export default AddContact;