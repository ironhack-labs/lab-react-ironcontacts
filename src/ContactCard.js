import './ContactCard.css'
import Button from './Button';

const ContactCard = ({ name, pictureUrl, popularity, removeContact }) => {
    return (
        <article className="contactCard">
            <img className='contactCardInfo' src={pictureUrl} alt="contact" />
            <h4 className='contactCardInfo'>{name}</h4>
            <h4 className='contactCardInfo'>{popularity}</h4>
            {/* <button className='contactCardInfo' onClick={removeContact}>Remove</button> */}
            <Button className="contactCardInfo" buttonText='Remove' buttonAction={removeContact} />
        </article>
    )
}

export default ContactCard