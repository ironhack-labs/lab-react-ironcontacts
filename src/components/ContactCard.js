import './ContactCard.css'

const ContactCard = ({ pictureUrl, name, popularity, deleteContact }) => {
    return (
        <div>
            <button onClick={deleteContact}>Delete Contact</button>
            <article className="contact-card">
                <img src={pictureUrl}></img>
                <p>{name}</p>
                <p>{popularity}</p>
            </article>
        </div>
    )
}

export default ContactCard