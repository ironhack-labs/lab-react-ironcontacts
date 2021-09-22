import './ContactItem.css'

function ContactItem ({name, popularity, pictureUrl, id, deleteContact}) {

    return(
        <tr>
            <th><img className='contact-image' src={pictureUrl} alt='contact'></img></th>
            <th>{name}</th>
            <th> {popularity.toFixed(2)}</th>
            <th><button  className='btn' onClick={() => deleteContact(id)}>Delete Contact</button></th>
        </tr>
    )
}

export default ContactItem