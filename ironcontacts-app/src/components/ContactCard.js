import './ContactCard.css'

const ContactCard = ({ pictureUrl, name, popularity, removeContact }) => {

    return (
        <div className='contact-card'>
            <img className='images' src={pictureUrl} alt='Contact picture' />
            <h3 className='info2'>{name}</h3>
            <h3 className='info2'>{popularity}</h3>
            <button className='btn-delete' onClick={removeContact}>Delete</button>
        </div>
    )
}

export default ContactCard