import "./ContactCard.css"


function ContactCard ({ picture, name, popularity }) {
return (
    <div className="contact-card">
        <img src={picture} alt="contact_picture" />
        <p>{name}</p>
        <p>{popularity}</p>
    </div>
)
}

export default ContactCard;