
import contacts from './contacts.json'

const ContactCard = ({ name, pictureUrl, popularity }) => {
    console.log(contacts)
    return (
        <article className="contact-card">
            <h4>name {name}</h4>
            <img src={pictureUrl} alt="Imagen" />
            <p>Popularity {popularity}</p>
        </article>
    )
}

export default ContactCard



