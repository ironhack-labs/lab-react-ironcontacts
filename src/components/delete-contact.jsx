import * as contactDelete from '../services/contact-service'

function DeleteContact ({contact, setContactData, id}) {

    const deleteContactId = () => {
        const contactArrDelete = contactDelete.setContactDelete(contact, id);

        setContactData([...contactArrDelete]);
    };

    return (<>
            <button
                type="button" 
                className="btn btn-danger mx-1" 
                onClick={deleteContactId}>Delete
            </button>
        </>);
}

export default DeleteContact;