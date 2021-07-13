import './ContactCard.css'
import AddContactButton from './AddContactButton';

const ContactCard = ({ name, pictureUrl, popularity, removeContact }) => {
    return (
        <article className="contactCard">
            <img className='contactCardInfo' src={pictureUrl} alt="contact" />
            <h4 className='contactCardInfo'>{name}</h4>
            <h4 className='contactCardInfo'>{popularity}</h4>
            {/* <button className='contactCardInfo' onClick={removeContact}>Remove</button> */}
            <AddContactButton className="contactCardInfo mdButton" buttonAction='Remove' addContact={removeContact} />
        </article>
    )
}

export default ContactCard